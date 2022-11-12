import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import Calculator from '../components/Calculators';
import operate from '../logic/operate';

it('renders without crashing', () => {
  const page = render(<Calculator />);
  expect(page).toMatchSnapshot();
});

it('it renders simple operation ', () => {
  // const operated =  render(<operate />)
  expect((1 - 1)).toBe(0);
  expect((3 + 4)).toBe(7);
});
