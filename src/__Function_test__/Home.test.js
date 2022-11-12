import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import Home from '../components/Home';

it('Matches the UI', () => {
  const home = render(<Home />);
  expect(home).toMatchSnapshot();
});
