import { render, screen } from '@testing-library/react';
import App from './App';
import ToDoList from './ToDoList'

test('Shows To Do List App on page', () => {
  render(<App />)

  expect(screen.getByText('To Do List App')).toBeInTheDocument()
})