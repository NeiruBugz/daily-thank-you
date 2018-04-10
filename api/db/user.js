const UserModel = require('./models/user');
const crypto = require('crypto');

class User {
  static saveUser(name, email, photo = null) {
    const currentDate = (new Date()).valueOf().toString();
    const random = Math.random().toString();
    const token = crypto.createHash('sha1').update(currentDate + random).digest('hex');

    const user = new UserModel({
      name: name,
      email: email,
      photo: photo,
      token: token
    });
    return new Promise(((resolve, reject) => {
      user.save((err, res) =>
        err ? reject(err) : resolve(res));
    }));
  }

  static getUser(id) {
    return new Promise((resolve, reject) => {
      UserModel.findById(id, (err, user) => {
        err ? reject(err) : resolve(user);
      });
    });
  }

  static getUserByEmail(email) {
    return new Promise((resolve, reject) => {
      UserModel.findOne({email: email}, '_id name email photo token', (err, res) =>
        err ? reject(err) : resolve(res)
      );
    });
  }

  static findByName(name) {
    const regex = new RegExp(name, 'i');
    return new Promise((resolve, reject) => {
      UserModel
        .find({name: regex})
        .exec((err, res) => {
          err ? reject(err) : resolve(res);
        });
    });
  }
}

module.exports = User;