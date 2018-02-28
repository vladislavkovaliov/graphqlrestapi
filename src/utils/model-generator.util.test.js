const { modelGenerator } = require('./model-generator.util');
const mongoose = require('mongoose');

jest.mock('mongoose', () => ({
  model: jest.fn(() => jest.fn()),
}));


describe('[model-generator.util.js]', () => {
  describe('modelGenerator()', () => {
    test('should call mongoose.model', () => {
      modelGenerator('test_name', {});

      expect(mongoose.model).toHaveBeenCalledWith('test_name', {});
    });
  });
});