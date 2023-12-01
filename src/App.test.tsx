import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

test.only('renders learn react link only', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn /i);
  expect(linkElement).toBeInTheDocument();
});
// skip, only, ...etc