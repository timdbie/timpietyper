import { WordProps } from './Word.types';

const Word: React.FC<WordProps> = ({ word, typedWord, isActive, isTyped }) => {
    const wordClass = `word ${isActive ? 'active' : ''} ${isTyped ? 'typed' : ''}`.trim();

    return (
        <div className={wordClass}>
            {word.split('').map((letter, letterIndex) => {
                const isCorrect = typedWord[letterIndex] === letter;
                const isTypedLetter = letterIndex < typedWord.length;

                return (
                    <span key={letterIndex} className={isTypedLetter ? (isCorrect ? 'correct' : 'incorrect') : ''}>
                        {letter}
                    </span>
                );
            })}
        </div>
    );
};

export default Word;