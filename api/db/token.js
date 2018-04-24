const TokenModel = require('./models/tokens');

class Token {

  static ifExist(token) {
    return new Promise(resolve => {
      if (!token) {
        resolve(false);
      }
      TokenModel.findOne({token: token}, null, (err) => {
        err ? resolve(false) : resolve(true);
      });
    }).then(res => res ? this.remove(token) : false);
  }

  static remove(token) {
    return new Promise((resolve, reject) => {
      TokenModel.remove({token: token}, err => {
        err ? reject(err) : resolve(true);
      });
    });
  }
}

module.exports = Token;