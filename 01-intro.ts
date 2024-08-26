const amount: number = 12;

if (amount < 10) {
  console.log("small number");
} else {
  console.log("large number");
}

console.log(`hey it's my first node app with ${amount}`);

//Globals - no window
//__dirname - path to current directory
console.log(__dirname);
// __filename - file name
//require - use modules (CommonJS)
// module - info about current module
// process - info about current process

setInterval(() => {
  console.log("Hello world!!!");
}, 1000);
