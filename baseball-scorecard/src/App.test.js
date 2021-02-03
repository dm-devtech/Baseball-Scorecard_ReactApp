import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import App from './App.js';

describe('<Controls />', () => {
  it('renders without crashing', () => {
    render(<App />);
  });
  it('full integration test', () => {
    const {getByText} = render(<App />);
    const strike = getByText(/^strike$/i);
    const ball = getByText(/^ball$/i);
    const foul = getByText(/^foul$/i);
    const hit = getByText(/^hit$/i);
     // ^ = begning of block of text $ = end of line of text
     // Test that strike works
     fireEvent.click(strike);
     fireEvent.click(strike);
     getByText(/Strikes: 2/);
  });
});
