import React, { useState, useEffect } from "react";
import Word from "../Word/Word";
import useTimer from "../../hooks/useTimer";
import { fetchWords } from "../../services/wordService";

const Typer: React.FC = () => {
    const [inputValue, setInputValue] = useState('');
    const [activeIndex, setActiveIndex] = useState(0);
    const [words, setWords] = useState<string[]>([]);
    const [typedWords, setTypedWords] = useState<string[]>([]);
    const { time, startTimer, resetTimer, isActive } = useTimer(60);

    const loadWords = async () => {
        try {
            const words = await fetchWords();
            setWords(words);
            setTypedWords(new Array(words.length).fill(''));
        } catch (error) {
            console.error("Error loading words:", error);
        }
    };

    useEffect(() => {
        loadWords();
    }, []);

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

    const restartGame = () => {
        setActiveIndex(0);
        setInputValue('');
        setTypedWords(new Array(words.length).fill(''));
        resetTimer(60);
        loadWords();
    };

    return (
        <div className="relative w-full h-36 overflow-clip">
            <button onClick={restartGame}>Restart Game</button>
            <div className="timer">Time Left: {time}s</div>
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
