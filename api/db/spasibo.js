const SpasiboModel = require('./models/spasibo');

class Spasibo {
  static save(from, to, text) {
    const spasibo = new SpasiboModel({
      from: from,
      to: to,
      text: text
    });
    return new Promise(((resolve, reject) => {
      spasibo.save(err => err ? reject(err) : resolve());
    }));
  }

  static get(id) {
    return new Promise((resolve, reject) => {
      SpasiboModel
        .find()
        .or([{from: id}, {to: id}])
        .select('to text date')
        .limit(10)
        .sort('-date')
        .then((err, res) => err ? reject(err) : resolve(res));
    });
  }
}

module.exports = Spasibo;