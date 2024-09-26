import React, {useState} from 'react';

// temporary word array
const words = Array(64).fill("hello");

const Typer: React.FC = () => {
    const [inputValue, setInputValue] = useState('');
    const [activeIndex, setActiveIndex] = useState(0);

    const updateLetters = (value: string) => {
        const activeWord = document.querySelector('.word.active');
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

    const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        setInputValue(value);
        updateLetters(value);
        
        if (value.length === words[activeIndex].length) {
            if (activeIndex < words.length - 1) {
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