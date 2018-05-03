const {google} = require('googleapis');
const OAuth2 = google.auth.OAuth2;

const oauth2Client = new OAuth2(
  process.env.OAUTH_USER,
  process.env.OAUTH_SECRET,
  process.env.OAUTH_REDIRECT
);

function generateAuthUrl() {
  return oauth2Client.generateAuthUrl({
    access_type: 'offline',
    scope: 'https://www.googleapis.com/auth/userinfo.email'
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