import { render, screen } from '@testing-library/react';
import App from './App';

test('renders login page', () => {
  render(<App />);
  const h2Element = screen.getByText('Login');
  expect(h2Element).toBeInTheDocument();
});
