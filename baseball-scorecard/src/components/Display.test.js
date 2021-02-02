import React from 'react';
import {render } from '@testing-library/react';
import Display from './Display.js';

describe('<Display />', () => {
  it('renders without crashing', () => {
    render(<Display />);
  });
  it('checks props work', () => {
    const display = render(<Display strikes={2} balls={3} />);
    expect(display.getByText(/Strikes: 2/))
    expect(display.getByText(/Balls: 3/))
  });
  it('checks props work with different values', () => {
    const display = render(<Display strikes={1} balls={2} />);
    expect(display.getByText(/Strikes: 1/))
    expect(display.getByText(/Balls: 2/))
  });
  it('testing edge case of incorrect values', () => {
    const display = render(<Display strikes={-1} balls={2000} />);
    expect(display.getByText(/Strikes: -1/))
    expect(display.getByText(/Balls: 2000/))
  });
})
