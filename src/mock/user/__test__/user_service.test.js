const UserService = require('../user_service.js');
const UserClient = require('../user_client.js');

jest.mock('../user_client.js');

describe('UserService', () => {
  const login = jest.fn(async () => 'success');

  UserClient.mockImplementation(() => ({ login }));

  let userService;

  beforeEach(() => {
    userService = new UserService(new UserClient());
    login.mockClear();
    UserClient.mockClear();
  });

  it('calls login() on UserClient when tries to login', async () => {
    await userService.login('abc', '123');
    expect(login).toHaveBeenCalledTimes(1);
  });
});
