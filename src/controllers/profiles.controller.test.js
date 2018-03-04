const ProfilesController = require('./profiles.controller');

const profilesCtr = ProfilesController();

const statusMock = jest.fn(() => {});
const jsonMock = jest.fn(() => {});
const res = {
  status: statusMock,
  json: jsonMock,
};

jsonMock.mockImplementation(() => res);
statusMock.mockImplementation(() => res);

let req = null;

describe('[profiles.controller.js]', () => {
  describe('getProfileData()', () => {
    test('should res.status().json() be called', () => {
      profilesCtr.getProfileData(req, res);
        
      expect(res.status).toHaveBeenCalled();
      expect(res.json).toHaveBeenCalled();
    });
  });
});