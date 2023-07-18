let fs = require("fs/promises");

const readTwo= async(file1, file2)=>{
    let a1 = fs.readFile(file1,"utf-8");
    let a2 = fs.readFile(file2,"utf-8");

    let b2 = await a2;
    console.log(b2);
    let b1 = await a1;
    console.log(b1);
}
