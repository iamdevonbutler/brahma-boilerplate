const {exec} = require('child_process');

process.chdir('/Users/jay/dev/brahma/brahma-demo/build/mail'); // @note needed for npm i to work correctly. idtk why tho.

exec('npm install /Users/jay/dev/brahma/brahma-demo/build/mail', (err, stdin, stderr) => {
  // @note @todo? VERBOSE is a string. here we are not handling process.env the brahma way.
  if (process.env.VERBOSE) {
    console.log('\x1b[33m%s\x1b[0m', '-> start "npm install /Users/jay/dev/brahma/brahma-demo/build/mail" output (err, stdin, stderr):');
    console.log(stdin);
    console.log('\x1b[31m%s\x1b[0m', err);
    console.log('\x1b[31m%s\x1b[0m', stderr);
    console.log('\x1b[33m%s\x1b[0m', '-> end "npm install /Users/jay/dev/brahma/brahma-demo/build/mail" output.');
  }
  process.exit();
});
