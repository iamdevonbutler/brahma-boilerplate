const {exec} = require('child_process');

process.chdir('/Users/jay/dev/brahma/brahma-demo/build/mail'); // @note needed for npm i to work correctly. idtk why tho.

exec('npm install /Users/jay/dev/brahma/brahma-demo/build/mail', (err, stdout, stderr) => {
  // console.error(stderr);
  process.exit();
});
