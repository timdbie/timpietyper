import React from "react";

const words = Array(64).fill("hello");

const Typer: React.FC = () => (
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

export default Typer;