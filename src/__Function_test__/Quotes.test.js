import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import QUOTE from '../components/Quotes';

it('it has to Render quotes', () => {
  const home = render(<QUOTE />);
  expect(home).toMatchSnapshot();
});
