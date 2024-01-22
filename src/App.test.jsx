/* eslint-disable testing-library/await-async-query */
/* eslint-disable testing-library/no-debugging-utils */
import { render, screen } from '@testing-library/react';
import App from './App';

it('renders Hello', async() => {
  render(<App />);
  const element = await screen.findByText('Hello');
  screen.debug(element);
  expect(element).toBeInTheDocument();
});