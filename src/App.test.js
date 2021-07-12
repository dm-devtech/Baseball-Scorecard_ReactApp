import React from 'react';
import { render, fireEvent, cleanup } from '@testing-library/react';
import App from './App.js';

afterEach(cleanup)

describe('<Controls />', () => {
  it('renders without crashing', () => {
    render(<App />);
  });
  it('test strike works', () => {
     // ^ = begning of block of text $ = end of line of text
     const {getByText} = render(<App />);
     const strike = getByText(/^strike$/i);
     const ball = getByText(/^ball$/i);
     const foul = getByText(/^foul$/i);
     const hit = getByText(/^hit$/i);
     // Test that strike works
     fireEvent.click(strike);
     fireEvent.click(strike);
     getByText(/Strikes: 2/);
  })
  it('Test that ball works', () => {
    const {getByText} = render(<App />);
    const strike = getByText(/^strike$/i);
    const ball = getByText(/^ball$/i);
    const foul = getByText(/^foul$/i);
    const hit = getByText(/^hit$/i);

    fireEvent.click(ball);
    fireEvent.click(ball);
    fireEvent.click(ball);
    getByText(/Balls: 3/)
    getByText(/Strikes: 0/);
  })
  it('Test that strike rolls over the count', () => {
    const {getByText} = render(<App />);
    const strike = getByText(/^strike$/i);
    const ball = getByText(/^ball$/i);
    const foul = getByText(/^foul$/i);
    const hit = getByText(/^hit$/i);

    fireEvent.click(strike);
    fireEvent.click(strike);
    fireEvent.click(ball);
    fireEvent.click(ball);
    fireEvent.click(ball);
    fireEvent.click(ball);
    getByText(/Strikes: 0/)
    getByText(/Balls: 0/)
  })
  it('Test that foul doesnt increase strikes past 2', () => {
    const {getByText} = render(<App />);
    const strike = getByText(/^strike$/i);
    const ball = getByText(/^ball$/i);
    const foul = getByText(/^foul$/i);
    const hit = getByText(/^hit$/i);

     fireEvent.click(foul);
     getByText(/Strikes: 1/)
     fireEvent.click(foul);
     getByText(/Strikes: 2/)
     fireEvent.click(foul);
     getByText(/Strikes: 2/)
  })
  it('check that hit resets count', () => {
    const {getByText} = render(<App />);
    const strike = getByText(/^strike$/i);
    const ball = getByText(/^ball$/i);
    const foul = getByText(/^foul$/i);
    const hit = getByText(/^hit$/i);

     fireEvent.click(strike);
     fireEvent.click(ball);
     fireEvent.click(hit);
     getByText(/Strikes: 0/)
     getByText(/Strikes: 0/)
  })
})
