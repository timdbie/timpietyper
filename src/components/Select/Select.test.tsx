import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Select from './Select';

describe('Select Component', () => {
    const defaultProps = {
        icon: 'test-icon',
        backgroundColor: '#ffffff',
        iconColor: '#000000',
        children: <button>Test Option</button>
    };

    it('renders without crashing', () => {
        render(<Select {...defaultProps} />);
        expect(screen.getByText('Test Option')).toBeInTheDocument();
    });

    it('applies correct background color to main div', () => {
        render(<Select {...defaultProps} />);
        const mainDiv = screen.getByText('Test Option').parentElement;
        expect(mainDiv).toHaveStyle(`background-color: ${defaultProps.backgroundColor}`);
    });

    it('renders children correctly', () => {
        render(
        <Select {...defaultProps}>
            <button>Option 1</button>
            <button>Option 2</button>
        </Select>
        );
        expect(screen.getByText('Option 1')).toBeInTheDocument();
        expect(screen.getByText('Option 2')).toBeInTheDocument();
    });
});