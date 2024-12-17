import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Word from './Word';

describe('Word Component', () => {
    const defaultProps = {
        word: 'test',
        typedWord: '',
        isActive: false,
        isTyped: false,
    };

    it('highlights correct and incorrect letters', () => {
        render(<Word {...defaultProps} typedWord="te" />);
        const letters = screen.getAllByText(/[a-z]/i);
        expect(letters[0]).toHaveClass('correct');
        expect(letters[1]).toHaveClass('correct');
        expect(letters[2]).not.toHaveClass('correct');
        expect(letters[3]).not.toHaveClass('correct');
    });

    it('displays extra typed letters', () => {
        render(<Word {...defaultProps} typedWord="testx" />);
        expect(screen.getByText('x')).toHaveClass('incorrect extra');
    });

    it('handles empty word correctly', () => {
        render(<Word {...defaultProps} word="" />);
        expect(screen.queryByText(/[a-z]/i)).not.toBeInTheDocument();
    });

    it('handles completely incorrect typing', () => {
        render(<Word {...defaultProps} typedWord="wxyz" />);
        const letters = screen.getAllByText(/[a-z]/i);
        letters.forEach(letter => expect(letter).toHaveClass('incorrect'));
    });
});