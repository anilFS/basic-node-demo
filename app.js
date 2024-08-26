const { log } = require("console");
const la = require("lodash");

const items = [1, [2, 9, [3, 11, [4, 8, [5, 6, 7]]]]];

const itemsDeep = la.flattenDeep(items);

console.log(itemsDeep[5]);
log(itemsDeep.length);
