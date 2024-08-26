"use strict";
const { readFileSync, writeFileSync } = require("fs");
const first = readFileSync("./folder/file.txt", "utf8");
console.log(first);
writeFileSync("./folder/result-sync.txt", `Here is the result: ${first}, some other text`);
writeFileSync("./folder/result-sync.txt", `${first}, appended other text`, {
    flag: "a",
});
