 let fs = require("fs/promises");
  let b = fs.readFile("file.txt","utf-8");

b.then((data)=>{
    console.log(data);
})

console.log("I am currently Studying JS");