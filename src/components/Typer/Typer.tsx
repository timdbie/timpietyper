import React, {useState} from 'react';

// temporary word array
const words = Array(64).fill("hello");

const Typer: React.FC = () => {
    const [inputValue, setInputValue] = useState('');
    const [activeIndex, setActiveIndex] = useState(0);

    const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        setInputValue(value);

        if (value === words[activeIndex]) {
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
            >
            </input>
            <div className="w-full flex flex-wrap overflow-clip">
                {words.map((word, index) => (
                    <div key={index} className={`word ${index === activeIndex ? 'active' : ''}`}>
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