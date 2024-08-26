"use strict";
// modules - encapsulated code
// CommonJS =- every file is a module by default
Object.defineProperty(exports, "__esModule", { value: true });
// local
const names = require("./02-names");
require("./grenade");
console.log(names);
const sayHi = (name) => {
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
