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
        .or([{to: id.toObjectId()}, {from: id.toObjectId()}])
        .populate('from to')
        .limit(20)
        .sort('-date')
        .select()
        .exec((err, spasibo) => {
          err ? reject(err) : resolve(spasibo);
        });
    });
  }
}

module.exports = Spasibo;