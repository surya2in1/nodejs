const names = require("./common/names");
const sayHello = require("./common/greeting");

// exported as object
console.log(names);
sayHello(names.fname);
sayHello(names.sname);

// exported as object but separated it
const { fname, sname } = require("./common/names");
sayHello(fname);
sayHello(sname);

const data = require("./common/another");
console.log(data);
