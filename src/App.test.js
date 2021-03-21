import { render, screen } from '@testing-library/react';
import { Lib } from '../src/lib'
const { App } = Lib.getComponents()

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
