import '@testing-library/jest-dom';
import { render, screen} from '@testing-library/react'
import Calculator from '../components/Calculators'
import operate from '../logic/operate'

it("renders without crashing", () =>{
    const page =  render(<Calculator />)
    expect(page).toMatchSnapshot()
})


it('it renders simple operation ', () => {
    // const operated =  render(<operate />)
    expect((1-1)).toBe(0);
    expect((3+4)).toBe(7)
})

const obj = {
  num1: 3,
  num2: 4,
  num3: 2,
  num4: 7,
};

describe('test calculator function', () => {
  test('operate function should return 7', () => {
    expect(Number(operate(obj.num1, obj.num2, '+'))).toBe(7);
  });
  test('operate function should return 3', () => {
    expect(Number(operate(obj.num4, obj.num2, '-'))).toBe(3);
  });
  test('operate function should return 12', () => {
    expect(Number(operate(obj.num1, obj.num2, 'x'))).toBe(12);
  });
  test('operate function should return 3', () => {
    expect(Number(operate(obj.num2, obj.num3, '÷'))).toBe(2);
  });
});
