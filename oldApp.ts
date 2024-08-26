// modules - encapsulated code
// CommonJS =- every file is a module by default

import { builtinModules } from "module";

// local
const names = require("./02-names");
require("./grenade");
console.log(names);

const sayHi = (name: string): void => {
  console.log(`Hello there ${name}`);
};

sayHi(names.john);
sayHi(names.peter);
sayHi("ram");

// Built-in builtinModules

// OS
// PATH
// FS
// HTTP
