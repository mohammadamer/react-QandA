import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders the Q&A home page', async () => {
  render(<App />);
  expect(screen.getByRole('link', { name: /q&a home/i })).toBeInTheDocument();
  expect(await screen.findByRole('heading', { name: /unanswered questions/i })).toBeInTheDocument();
});
