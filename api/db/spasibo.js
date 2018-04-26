const SpasiboModel = require('./models/spasibo');
const user = require('./user');

class Spasibo {
  static save(token, to, text) {
    return new Promise(((resolve, reject) => {
      user.getIdByToken(token)
        .then(id => {
          const spasibo = new SpasiboModel({
            from: id,
            to: to,
            text: text
          });
          spasibo.save(err => err ? reject(err) : resolve());
        });
    }));
  }

  static get(token, skip = 0, limit = 20) {
    return new Promise((resolve, reject) => {
      user.getIdByToken(token)
        .then(id => {
          SpasiboModel
            .find()
            .or([{to: id}, {from: id}])
            .populate('from to')
            .skip(parseInt(skip))
            .limit(parseInt(limit))
            .sort('date')
            .select()
            .exec((err, spasibo) => {
              err ? reject(err) : resolve({spasibo: spasibo, id: id});
            });
        })
        .catch(err => {
          reject(err);
        });
    });
  }
}

module.exports = Spasibo;