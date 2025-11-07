import { render, screen } from '@testing-library/react';
import App from './App';

test('renders welcome text', () => {
  render(<App />);
  const text = screen.getByText(/Changes the index/i);
  expect(text).toBeInTheDocument();
});
