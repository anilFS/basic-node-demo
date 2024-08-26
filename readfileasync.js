"use strict";
const { readFile, writeFile } = require("fs");
readFile("./folder/file.txt", "utf8", (err, result) => {
    if (err) {
        console.log(err.message);
        //return;
    }
    else {
        console.log(result);
    }
    const first = result;
    writeFile("./folder/result-async.txt", `The text ${first} is here`, { flag: "a" }, (err, result) => {
        if (err) {
            console.log(err.message);
        }
        else {
            console.log(result);
        }
    });
});
