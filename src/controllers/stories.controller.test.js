const StoriesController = require('./stories.controller');
const { Stories } = require('../models/stories.model');

const storiesCtr = StoriesController();

jest.mock('../models/stories.model', () => ({
  Stories: {
    find: jest.fn(() => {}),
  },
}));

const statusMock = jest.fn(() => {});
const jsonMock = jest.fn(() => {});
const res = {
  status: statusMock,
  json: jsonMock,
};

jsonMock.mockImplementation(() => res);
statusMock.mockImplementation(() => res);

let req = null;

describe('[stories.controller.js]', () => {
  beforeEach(() => {
    req = { 
      body: { 
        id: '1', 
        profileId: 'profileId', 
      }, 
    };
  });

  describe('getStories()', () => {
    test('should find() be called', async () => {
      await storiesCtr.getStories(req, res);

      expect(Stories.find).toHaveBeenCalled();

      expect(res.status).toHaveBeenCalled();
      expect(res.json).toHaveBeenCalled();
    });
  });
});