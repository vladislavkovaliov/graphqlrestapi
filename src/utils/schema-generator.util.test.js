const { schemaGenerator } = require('./schema-generator.util');
const mongoose = require('mongoose');

jest.mock('mongoose', () => ({
  Schema: jest.fn(() => jest.fn()),
}));


describe('[schema-generator.util.js]', () => {
  describe('schemaGenerator()', () => {
    test('should call mongoose.Schema', () => {
      schemaGenerator({});

      expect(mongoose.Schema).toHaveBeenCalledWith({});
    });
  });
});