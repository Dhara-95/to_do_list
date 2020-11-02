import React from 'react';
import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'

import ToDoList from './ToDoList'

test('user can view list', () => {
  render(<ToDoList />);

  expect(screen.getByText('Apply to Jobs')).toBeInTheDocument()
})