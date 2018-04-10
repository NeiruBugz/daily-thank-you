const {google} = require('googleapis');
const OAuth2 = google.auth.OAuth2;

const oauth2Client = new OAuth2(
  '189576862785-p83qioo93omueb6788uhm27dtfbbugvm.apps.googleusercontent.com',
  'Y7bz9Rx7fp0ojl5l2avXIqpb',
  'https://spasibo-spasibo.7e14.starter-us-west-2.openshiftapps.com/oauth/validate'
);

function generateAuthUrl() {
  return oauth2Client.generateAuthUrl({
    access_type: 'offline',
    scope: 'https://www.googleapis.com/auth/userinfo.email',
    prompt: 'consent'
  });
}

function getAccessToken(code) {
  return new Promise((resolve, reject) => {
    oauth2Client.getToken(code.replace('#', ''))
      .then(data => resolve(data.tokens))
      .catch(err => reject(err));
  });
}

function getName(tokens) {
  return new Promise((resolve, reject) => {
    oauth2Client.setCredentials(tokens);
    const url = 'https://www.googleapis.com/oauth2/v2/userinfo';
    oauth2Client.getRequestMetadata(url)
      .then(res => {
        res.url = url;
        return oauth2Client.request(res);
      })
      .then(res => resolve(res))
      .catch(err => reject(err));
  });
}

module.exports.generateAuthUrl = generateAuthUrl;
module.exports.getAccessToken = getAccessToken;
module.exports.getName = getName;