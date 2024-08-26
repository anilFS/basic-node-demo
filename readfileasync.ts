const { readFile, writeFile } = require("fs");

readFile("./folder/file.txt", "utf8", (err: Error, result: string): void => {
  if (err) {
    console.log(err.message);
    //return;
  } else {
    console.log(result);
  }
  const first = result;

  writeFile(
    "./folder/result-async.txt",
    `The text ${first} is here`,
    { flag: "a" },
    (err: Error, result: string) => {
      if (err) {
        console.log(err.message);
      } else {
        console.log(result);
      }
    }
  );
});
