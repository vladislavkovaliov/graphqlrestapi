const { AUTHENTICATION_ERROR, UNAUTHOTIZED } = require('./errors');

describe('[errors.js]', () => {
  test('should authentication error be correctly', () => {
    expect(AUTHENTICATION_ERROR).toMatchSnapshot();
  });

  test('should unauthotized be correctly', () => {
    expect(UNAUTHOTIZED).toMatchSnapshot();    
  });
});