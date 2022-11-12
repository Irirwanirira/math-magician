import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import NavBar from '../components/NavBar';

const MockNav = () => {
  <BrowserRouter>
    <NavBar />
  </BrowserRouter>;
};
it('renders NavBar', () => {
  expect(render(<MockNav />)).toMatchSnapshot();
});
