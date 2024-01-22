/* eslint-disable testing-library/no-await-sync-query */
/* eslint-disable testing-library/await-async-query */
/* eslint-disable testing-library/no-debugging-utils */
import { render, screen } from '@testing-library/react';
import App from './App';

it('not renders Hello', () => {
  render(<App />);
  const element = screen.getByText('ello');
  screen.debug(element);
  expect(element).not.toBeInTheDocument();
});