let args = process.argv.slice(2);
let url = args[0];
let desFile = args[1];

const request = require('request');
const fs = require('fs');

request(url, (error, response, body) => {
  let fsSize = fs.statSync(desFile);
  let fsSizeBytes = fsSize["size"];


  fs.writeFile(desFile,body,(err)=>{
    if(err){
       throw err;
    }
    console.log(`Downloaded and saved ${fsSizeBytes} to ${desFile}`);
  });
});


