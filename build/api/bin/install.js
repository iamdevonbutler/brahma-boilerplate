const {exec} = require('child_process');

process.chdir('/Users/jay/dev/brahma/brahma-demo/build/api'); // @note needed for npm i to work correctly. idtk why tho.

exec('npm install /Users/jay/dev/brahma/brahma-demo/build/api', (err, stdout, stderr) => {
  // console.error(stderr);
  process.exit();
});
