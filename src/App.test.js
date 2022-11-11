import { render, screen } from '@testing-library/react';
import App from './App';

test('first test', () => {
  render(<App />);
  const linkElement = screen.getByText(/Content here/i);
  expect(linkElement).toBeInTheDocument();
});
