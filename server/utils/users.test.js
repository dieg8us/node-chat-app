const expect = require('expect');

const {Users} = require('./users');

describe('Users', () => {

  let users;

  beforeEach(() => {
    users = new Users();
    users.users = [{
      id: '1',
      name: 'Diego',
      room: 'Node Course'
    }, {
      id: '2',
      name: 'Mauro',
      room: 'React Course'
    }, {
      id: '3',
      name: 'Victor',
      room: 'Node Course'
    }];
  });

  it('should add a new user', () => {
    let users = new Users();
    let user = {
      id: '1',
      name: 'Diego',
      room: 'The Office Fans'
    };
    let newUser = users.addUser(user.id, user.name, user.room);

    expect(users.users).toEqual([user]);
  });

  it('should return names for node course', () => {
    let userList = users.getUserList('Node Course');

    expect(userList).toEqual(['Diego', 'Victor']);
  });

  it('should return names for react course', () => {
    let userList = users.getUserList('React Course');

    expect(userList).toEqual(['Mauro']);
  });

  it('should remove user by id and return user removed', () => {
    let userId = '2';
    let userRemoved = users.removeUser(userId);

    expect(userRemoved.id).toBe(userId);
    expect(users.users.length).toBe(2);
  });

  it('should not remove user by id', () => {
    let userId = '7';
    let userRemoved = users.removeUser(userId);

    expect(userRemoved).toNotExist();
    expect(users.users.length).toBe(3);
  });

  it('should return user filtered by id', () => {
    let userId = '2';
    let user = users.getUser(userId);

    expect(user.id).toBe(userId);
  });

  it('should not return user filtered by id', () => {
    let userId = '7';
    let user = users.getUser(userId);

    expect(user).toNotExist();
  });
});
