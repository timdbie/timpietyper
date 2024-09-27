import React, { useState, useEffect } from "react";

const Typer: React.FC = () => {
    const [inputValue, setInputValue] = useState('');
    const [activeIndex, setActiveIndex] = useState(0);
    const [words, setWords] = useState<string[]>([]);

    useEffect(() => {
        const fetchWords = async () => {
            try {
                const response = await fetch("http://localhost:5278/words");
                if (!response.ok) {
                    throw new Error("Network response was not ok");
                }
                const data = await response.json();
                setWords(data);
            } catch (error) {
                console.error("Error fetching words:", error);
            }
        };

        fetchWords();
    }, []);

    const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        const activeWord = document.querySelector('.word.active');

        setInputValue(value);

        if (activeWord) {
            const letters = activeWord.querySelectorAll('span');
            letters.forEach((letter, letterIndex: number,) => {
                const isCorrect = value[letterIndex] === words[activeIndex][letterIndex];

                if (letterIndex < value.length) {
                    if (isCorrect) {
                        letter.className = 'correct';
                    } else {
                        letter.className = 'incorrect';
                    }
                } else {
                    letter.removeAttribute('class');
                }
            });
        }
    };

    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === ' ') {
            e.preventDefault();

            if (activeIndex < words.length - 1 && inputValue.length > 0) {
                setActiveIndex(activeIndex + 1);
            }
            setInputValue('');
        }
    };

    return (
        <div className="relative w-full h-36 overflow-clip">
            <input
                className="absolute bottom-0 z-30"
                type="text"
                autoComplete="off"
                autoCapitalize="off"
                autoCorrect="off"
                spellCheck="false"
                value={inputValue}
                onChange={handleInput}
                onKeyDown={handleKeyDown}
            />
            <div className="w-full flex flex-wrap overflow-clip">
                {words.map((word, index) => {
                    let className = 'word';
                    if (index === activeIndex) {
                        className += ' active';
                    } else if (index < activeIndex) {
                        className += ' typed';
                    }

                    return (
                        <div key={index} className={className}>
                            {word.split('').map((letter: string, letterIndex: number) => (
                                <span key={letterIndex}>
                                    {letter}
                                </span>
                            ))}
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default Typer;