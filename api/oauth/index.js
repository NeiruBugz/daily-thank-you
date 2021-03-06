const {google} = require('googleapis');
const OAuth2 = google.auth.OAuth2;

// https://spasibo.dergunov.net/?code=4/AABJiRrKxG_RVC8cgqpGL-KqXNH-riD4qlo0EYQDBuzPqeT-Bi22p3ete5ctw4kODgmVKra-q0F2h-3Iu02jwwM#
const oauth2Client = new OAuth2(
  '189576862785-p83qioo93omueb6788uhm27dtfbbugvm.apps.googleusercontent.com',
  'Y7bz9Rx7fp0ojl5l2avXIqpb',
  'https://spasibo.dergunov.net'
);

function generateAuthUrl() {
  return oauth2Client.generateAuthUrl({
    // 'online' (default) or 'offline' (gets refresh_token)
    access_type: 'offline',
    // If you only need one scope you can pass it as a string
    scope: 'https://www.googleapis.com/auth/plus.me',
  });
}

function getAccessToken(code) {
  return new Promise((resolve, reject) => {
    oauth2Client.getToken('code')
      .then(data => {
        oauth2Client.setCredentials(data.tokens);
        resolve(data.tokens);
      })
      .catch(err => {
        reject(err);
      })
  });
}

const plus = google.plus({
  version: 'v1',
  auth: oauth2Client
});

function getName() {
  plus.people.get({
    userId: 'me'
  }, (err, res) => {
    if (err) {
      console.error(err);
    }
    console.log(res.data);
  });
}

module.exports.generateAuthUrl = generateAuthUrl;
module.exports.getAccessToken = getAccessToken;
module.exports.getName = getName;