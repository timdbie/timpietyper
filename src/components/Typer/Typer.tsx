import React, { useState, useEffect } from "react";

const Typer: React.FC = () => {
    const [inputValue, setInputValue] = useState('');
    const [activeIndex, setActiveIndex] = useState(0);
    const [words, setWords] = useState<string[]>([]);
    const [typedWords, setTypedWords] = useState<string[]>([]);

    useEffect(() => {
        const fetchWords = async () => {
            try {
                const response = await fetch("http://localhost:5278/api/Word/random?count=50");
                if (!response.ok) {
                    throw new Error("Network response was not ok");
                }
                const data = await response.json();
                setWords(data.values);
                setTypedWords(new Array(data.values.length).fill(''));
            } catch (error) {
                console.error("Error fetching words:", error);
            }
        };

        fetchWords();
    }, []);

    const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        setInputValue(value);

        const newTypedWords = [...typedWords];
        newTypedWords[activeIndex] = value;
        setTypedWords(newTypedWords);
    };

    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === ' ') {
            e.preventDefault();
            if (activeIndex < words.length - 1 && inputValue.length > 0) {
                setActiveIndex(activeIndex + 1);
                setInputValue('');
            }
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
                    const currentTypedWord = typedWords[index];
                    const isActive = index === activeIndex;
                    const isTyped = index < activeIndex;
                    const wordClass = `word ${isActive ? 'active' : ''} ${isTyped ? 'typed' : ''}`.trim();

                    return (
                        <div key={index} className={wordClass}>
                            {word.split('').map((letter, letterIndex) => {
                                const isCorrect = currentTypedWord[letterIndex] === letter;
                                const isTypedLetter = letterIndex < currentTypedWord.length;
                                const letterClass = isTypedLetter ? (isCorrect ? 'correct' : 'incorrect') : undefined;

                                return (
                                    <span key={letterIndex} className={letterClass}>
                                        {letter}
                                    </span>
                                );
                            })}
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default Typer;