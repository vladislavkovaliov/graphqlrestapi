const ProfilesController = require('./profiles.controller');
const { Profiles } = require('../models/profiles.model');

const profilesCtr = ProfilesController();

const statusMock = jest.fn(() => {});
const jsonMock = jest.fn(() => {});
const res = {
  status: statusMock,
  json: jsonMock,
};

jest.mock('../models/profiles.model', () => ({
  Profiles: {
    findOneAndUpdate: jest.fn(() => {}),
    find: jest.fn(() => {}),
  },
}));

jsonMock.mockImplementation(() => res);
statusMock.mockImplementation(() => res);

let req = null;

describe('[profiles.controller.js]', () => {
  beforeEach(() => {
    req = {
      body: {
        id: '1',
        profileId: 'profileId',
      },
    };
  });

  describe('getProfileData()', () => {
    test('should res.status().json() be called', () => {
      profilesCtr.getProfileData(req, res);
        
      expect(res.status).toHaveBeenCalled();
      expect(res.json).toHaveBeenCalled();
    });
  });

  describe('getProfiles()', () => {
    test('should find() be called', async () => {
      await profilesCtr.getProfiles(req, res);

      expect(Profiles.find).toHaveBeenCalled();

      expect(res.status).toHaveBeenCalled();
      expect(res.json).toHaveBeenCalled();
    });
  });

  describe('following()', () => {
    test('should findOneAndUpdate() be called', async () => {
      await profilesCtr.following(req, res);

      expect(Profiles.findOneAndUpdate).toHaveBeenCalled();

      expect(res.status).toHaveBeenCalled();
      expect(res.json).toHaveBeenCalled();
    });
  });

  describe('followers()', () => {
    test('should findOneAndUpdate() be called', async () => {
      await profilesCtr.followers(req, res);

      expect(Profiles.findOneAndUpdate).toHaveBeenCalled();

      expect(res.status).toHaveBeenCalled();
      expect(res.json).toHaveBeenCalled();
    });
  });
});