import { render, screen } from '@testing-library/react';
import App from './App';

test('Shows Hello, World! on page', () => {
  render(<App />)

  expect(screen.getByText('Hello, World!')).toBeInTheDocument()
})