const { conversation } = require('@assistant/conversation');
const functions = require('firebase-functions');

const app = conversation({debug: true, clientId: "591618152780-8r7novrnehq8oh2n1nn89f013j5ij6fh.apps.googleusercontent.com",});

app.handle('init', conv => {
  console.log(conv.headers.authorization);
  console.log(app.getUser().accessToken);
});

exports.ActionsOnGoogleFulfillment = functions.https.onRequest(app);