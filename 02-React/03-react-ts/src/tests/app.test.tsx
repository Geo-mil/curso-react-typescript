import React from 'react';
import { render, screen } from '@testing-library/react';
import App from '../web/app';

test('renders learn react link', () => {
    render(<App />);
    const linkElement = screen.getByText(/teamcamp/i);
    expect(linkElement).toBeInTheDocument();
});
