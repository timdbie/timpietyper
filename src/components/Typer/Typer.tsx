import React, { useState, useEffect } from "react";

const Typer: React.FC = () => {
    const [words, setWords] = useState<string[]>([]);

    useEffect(() => {
        const fetchWords = async () => {
            try {
                const response = await fetch("http://localhost:5278/api/Word/random?count=50");
                if (!response.ok) {
                    throw new Error("Network response was not ok");
                }
                const data = await response.json();
                setWords(data.values);
            } catch (error) {
                console.error("Error fetching words:", error);
            }
        };

        fetchWords();
    }, []);

    return (
        <div className="w-full h-36 overflow-clip">
            <div className="w-full flex flex-wrap overflow-clip">
                {words.map((word, index) => (
                    <div key={index} className="word">
                        {word.split('').map((letter: string, letterIndex: number) => (
                            <span key={letterIndex}>
                                {letter}
                            </span>
                        ))}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Typer;