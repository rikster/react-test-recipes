import { render, screen } from '@testing-library/react';
import App from '../App';

test('renders learn react link', () => {
  render(<App />);
  const textElement = screen.getByText(/Hey, stranger/i);
  expect(textElement).toBeInTheDocument();
});
