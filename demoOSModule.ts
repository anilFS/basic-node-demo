const os = require("os");

// info about current user
const user = os.userInfo();
console.log(user);

console.log(`System uptime is ${os.uptime()} seconds`);

const ut: number = os.uptime();

console.log(ut / 60 / 60);

const currentOS = {
  name: os.type(),
  release: os.release(),
  totalmem: os.totalmem(),
  freemem: os.freemem(),
};
console.log(currentOS);
