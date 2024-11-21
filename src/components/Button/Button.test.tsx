import React from 'react';
import { render, screen } from '@testing-library/react';
import Button from './Button';

describe('Button Component', () => {
    it('renders correctly with given props', () => {
        const mockOnClick = jest.fn();
        const label = 'Click Me';
        const icon = 'mdi:home';
        const backgroundColor = '#f0f0f0';

        render(
            <Button 
                label={label} 
                icon={icon} 
                backgroundColor={backgroundColor} 
                onClick={mockOnClick} 
            />
        );
    }
)});