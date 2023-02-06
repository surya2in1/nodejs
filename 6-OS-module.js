const os = require("os");

// Get the user information
console.log(os.userInfo());

// Method return system uptime in seconds
console.log(`The system uptime is ${os.uptime()} seconds`);

const currentOs = {
  "OS Type": os.type(),
  "OS Release": os.release(),
  "Total Memory": os.totalmem(),
  "Free Memory": os.freemem(),
  "Host Name": os.hostname(),
  "OS Platform": os.platform(),
  "Temp dir": os.tmpdir(),
};

console.log(currentOs);
