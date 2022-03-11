const fs = require("fs");

function jsonReader(filePath, cb){
    fs.readFile(filepath, 'utf-8', (err,fileData)=>{
if (err) {
    return cb && cb(err);
}
try {
      const object=JSON.parse(fileData);
      return cb && cb(null, object);
}
catch(err){
    return cb && cb(err);
}

    });

jsonReader('./package.json', (err,data) => {
    if (err){
        console.log(err);
    }
    else{
        console.log(data.description);
    }
});
    
