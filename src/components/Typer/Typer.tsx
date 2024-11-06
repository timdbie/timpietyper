import React, { useState, useEffect } from "react";
import Word from "./Word/Word";
import useTimer from "../../hooks/useTimer";
import useWords from "../../hooks/useWords";
import Bar from "./Bar/Bar";

const Typer: React.FC = () => {
    const [inputValue, setInputValue] = useState('');
    const [activeIndex, setActiveIndex] = useState(0);
    const [timerDuration, setTimerDuration] = useState(30);
    const { words, typedWords, setTypedWords, loadWords, loading, error } = useWords();
    const { time, startTimer, resetTimer, isActive } = useTimer(timerDuration);

    useEffect(() => {
        restart();
    }, [timerDuration]);

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
        resetTimer(timerDuration);
        loadWords();
    };

    if (loading) return <div>Loading...</div>;
    if (error) return <div>{error}</div>;

    if (time === 0) return <button onClick={restart}>Restart</button>;

    return (
        <>
            <Bar handleTimerDurationChange={setTimerDuration} />
            <div className="timer">{time}</div>
            <div className="relative w-full h-36 overflow-clip">
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
        </>
    );
};

export default Typer;
