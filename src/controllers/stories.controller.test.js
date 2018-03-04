const StoriesController = require('./stories.controller');
const { Stories } = require('../models/stories.model');

const storiesCtr = StoriesController();

jest.mock('../models/stories.model', () => ({
  Stories: { 
    findOneAndUpdate: jest.fn(() => {}), 
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

  describe('following()', () => {
    test('should findOneAndUpdate() be called', async () => {
      await storiesCtr.following(req, res);
  
      expect(Stories.findOneAndUpdate).toHaveBeenCalled();
      
      expect(res.status).toHaveBeenCalled();
      expect(res.json).toHaveBeenCalled();
    });
  });

  describe('followers()', () => {
    test('should findOneAndUpdate() be called', async () => {
      await storiesCtr.followers(req, res);
  
      expect(Stories.findOneAndUpdate).toHaveBeenCalled();
      
      expect(res.status).toHaveBeenCalled();
      expect(res.json).toHaveBeenCalled();
    });
  });
});