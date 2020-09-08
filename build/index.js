const util = require("util");
var cmd = require("node-cmd");
const { run } = require("node-cmd");
const promisify = util.promisify;

const instalCaceis = promisify(cmd.get);
const instalLibrary = promisify(cmd.get);

//yarn global add @caceis/primeng-library/0.0.4@file:/home/$USER/projects/mock-palmyra/demo-primeng-library/
const user = "appadmin08@cloud.corp";

instalCaceis(
  `yarn global add @caceis/primeng-library/0.0.4@file:/home/${user}/projects/mock-palmyra/demo-primeng-library/`
)
  .then((data) => {
    console.log(" data", data);
  })
  .catch((e) => {
    console.log(" data", e);
  });

instalLibrary(
  `npm install -g /home/appadmin08@cloud.corp/projects/mock-palmyra/demo-primeng-library`
)
  .then((data) => {
    console.log(" data", data);
  })
  .catch((e) => {
    console.log(" data", e);
  });
