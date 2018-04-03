const UserModel = require('./models/user');

class User {
  static saveUser(name, email, photo = null) {
    const user = new UserModel({
      name: name,
      email: email,
      photo: photo
    });
    return new Promise(((resolve, reject) => {
      user.save((err) => {
        if (err) {
          reject(err);
        }
        resolve(true);
      });
    }));
  }

  static getUser(id) {
    return new Promise((resolve, reject) => {
      UserModel.findById(id, (err, user) => {
        if (err) {
          reject(err);
        }
        resolve(user);
      });
    });
  }
}

module.exports = User;