const path = require("path");

// console.log(path);
console.log(path.sep);

const filePath: string = path.join("/folder", "file.txt");
console.log("File Path " + filePath);

const baseName: string = path.basename(filePath);
console.log("Base Name " + baseName);

const absPath: string = path.resolve(__dirname, "folder", "file.txt");
console.log(absPath);
