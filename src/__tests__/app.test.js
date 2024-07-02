import demo from '../js/app';

describe('Проверка работы тестов', () => {
  test.each([
    { str: 'Hello!', expected: 'Demo: Hello!' },
    { str: '', expected: 'Demo: ' },
    { str: 100, expected: 'Demo: 100' },
  ])('demo($str)', ({ str, expected }) => {
    expect(demo(str)).toBe(expected);
  });
});
