import React, { useState, useEffect } from "react";
import Word from "../Word/Word";

const Typer: React.FC = () => {
    const [inputValue, setInputValue] = useState('');
    const [activeIndex, setActiveIndex] = useState(0);
    const [words, setWords] = useState<string[]>([]);
    const [typedWords, setTypedWords] = useState<string[]>([]);

    useEffect(() => {
        const fetchWords = async () => {
            // try {
            //     const response = await fetch("http://localhost:5278/api/Word/random?count=50");
            //     if (!response.ok) {
            //         throw new Error("Network response was not ok");
            //     }
            //     const data = await response.json();
            //     setWords(data.values);
            //     setTypedWords(new Array(data.values.length).fill(''));
            // } catch (error) {
            //     console.error("Error fetching words:", error);
            // }
          
            setWords([]);
            setTypedWords([]);
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