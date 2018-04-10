const SpasiboModel = require('./models/spasibo');

class Spasibo {
  static save(from, to, text) {
    const spasibo = new SpasiboModel({
      from: from,
      to: to,
      text: text
    });
    return new Promise(((resolve, reject) => {
      spasibo.save(err => {
        if (err) {
          reject(err);
        }
        resolve(true);
      });
    }));
  }
}

module.exports = Spasibo;