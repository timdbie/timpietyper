import React, { useState } from "react";
import Word from "../Word/Word";
import useTimer from "../../hooks/useTimer";
import useWords from "../../hooks/useWords";

const Typer: React.FC = () => {
    const [inputValue, setInputValue] = useState('');
    const [activeIndex, setActiveIndex] = useState(0);
    const { words, typedWords, setTypedWords, loadWords, loading, error } = useWords();
    const { time, startTimer, resetTimer, isActive } = useTimer(60);

    const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (!isActive) {
            startTimer();
        }
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

    const restart = () => {
        setActiveIndex(0);
        setInputValue('');
        setTypedWords(new Array(words.length).fill(''));
        resetTimer(60);
        loadWords();
    };

    if (loading) return <div>Loading...</div>;
    if (error) return <div>{error}</div>;

    return (
        <div className="relative w-full h-36 overflow-clip">
            <button onClick={restart}>Restart</button>
            <div className="timer">{time}</div>
            <input
                className="absolute z-30 w-full h-full opacity-0"
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
                {words.map((word, index) => (
                    <Word
                        key={index}
                        word={word}
                        typedWord={typedWords[index]}
                        isActive={index === activeIndex}
                        isTyped={index < activeIndex}
                    />
                ))}
            </div>
        </div>
    );
};

export default Typer;
