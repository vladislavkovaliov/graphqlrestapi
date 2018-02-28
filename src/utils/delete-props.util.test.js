const { deleteProps } = require('./delete-props.util');

describe('[delete-props.utils.js]', () => {
  describe('deleteProps()', () => {
    test('should remove one prop from object', () => {
      const originObject = {
        shouldLive: 42,
        shouldRemove: 42,
      };

      deleteProps(originObject, ['shouldRemove']);

      expect(originObject.shouldRemove).toBeUndefined();
    });

    test('should remove more than one prop from object', () => {
      const originObject = {
        shouldLive: 42,
        shouldRemove: 42,
        alsoShouldRemove: 42,
      };

      deleteProps(originObject, ['shouldRemove', 'alsoShouldRemove']);

      expect(originObject.shouldRemove).toBeUndefined();
      expect(originObject.alsoShouldRemove).toBeUndefined();
    });
  });
});