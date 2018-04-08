const UserModel = require('./models/user');

class User {
  static saveUser(name, email, photo = null) {
    const user = new UserModel({
      name: name,
      email: email,
      photo: photo
    });
    return new Promise(((resolve, reject) => {
      user.save((err, res) => {
        if (err) {
          reject(err);
        }
        resolve(res._id);
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

  static getId(email) {
    return new Promise((resolve, reject) => {
      UserModel.findOne({email: email}, '_id', (err, res) => {
        if (err) {
          reject(err);
        }
        resolve(res.id);
      });
    });
  }

  static findByName(name) {
    console.log(name);
    const regex = new RegExp(name, 'i');
    console.error(regex);
    return new Promise((resolve, reject) => {
      UserModel.find({name: regex}, 'name email photo', (err, res) => {
        if (err) {
          reject(err);
        }
        resolve(res);
      });
    });
  }
}

module.exports = User;