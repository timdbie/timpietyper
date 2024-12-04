import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Bar from './Bar';

jest.mock('../Select/Select', () => {
    return ({ children, icon, backgroundColor, iconColor }: any) => (
        <div data-testid="mock-select" data-icon={icon} style={{ backgroundColor }} data-icon-color={iconColor}>
        {children}
        </div>
    );
});

describe('Bar Component', () => {
    it('renders two Select components', () => {
        render(<Bar />);
        const selects = screen.getAllByTestId('mock-select');
        expect(selects).toHaveLength(2);
    });

    it('renders the first Select with correct props', () => {
        render(<Bar />);
        const selects = screen.getAllByTestId('mock-select');
        expect(selects[0]).toHaveAttribute('data-icon', 'mingcute:settings-6-line');
        expect(selects[0]).toHaveStyle('background-color: #FFCBCB');
        expect(selects[0]).toHaveAttribute('data-icon-color', '#FF4949');
    });

    it('renders correct options in the first Select', () => {
        render(<Bar />);
        const selects = screen.getAllByTestId('mock-select');
        expect(selects[0]).toHaveTextContent('Time');
        expect(selects[0]).toHaveTextContent('Words');
        expect(selects[0]).toHaveTextContent('Sentences');
    });
});