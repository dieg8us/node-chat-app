class Users {
  constructor () {
    this.users = [];
  }

  // method to add a user to array
  addUser (id, name, room) {
    // create user
    let user = {id, name, room};
    // push user to array
    this.users.push(user);
    // return user created
    return user;
  }

  // method to remove user from the array of users
  removeUser (id) {
    // user removed by id
    let userRemoved = this.users.filter((user) => user.id === id)[0];

    // validate if user exists
    if (userRemoved) {
      // remove user from array
      this.users = this.users.filter((user) => user.id !== id);
    }

    // return user removed
    return userRemoved;
  }

  // method to find a user
  getUser (id) {
    // return user filtered by id
    return this.users.filter((user) => user.id === id)[0];
  }

  // method to find all users
  getUserList(room) {
    // get users by room
    let users = this.users.filter((user) => user.room === room);
    // select name of all users
    let namesArray = users.map((user) => user.name);

    // return array of users with only names
    return namesArray;
  }
}

module.exports = {
  Users
};
