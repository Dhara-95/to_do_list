import { render, screen } from '@testing-library/react';
import App from './App';

test('Shows To Do List App on page', () => {
  render(<App />)

  expect(screen.getByText('To Do List App')).toBeInTheDocument()
})