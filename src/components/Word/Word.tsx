import { WordProps } from './Word.types';

const Word: React.FC<WordProps> = ({ word, typedWord, isActive, isTyped }) => {
    const wordClass = ['word', isActive && 'active', isTyped && 'typed'].filter(Boolean).join(' ');
    const extraTypedLetters = typedWord.slice(word.length);

    return (
        <div className={wordClass}>
            {word.split('').map((letter, letterIndex) => { 
                const isCorrect = typedWord[letterIndex] === letter; 
                const isTypedLetter = letterIndex < typedWord.length; 

                return (
                    <span key={letterIndex} {...(isTypedLetter && { className: isCorrect ? 'correct' : 'incorrect' })}>
                        {letter}
                    </span>
                ); 
            })}
            {extraTypedLetters.split('').map((letter, letterIndex) => (
                <span key={word.length + letterIndex} className="incorrect extra">
                    {letter}
                </span>
            ))}
        </div>
    );
};

export default Word;
