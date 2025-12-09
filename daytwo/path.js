const path = require("path");
const filepath = "C:\Users\Gunachandru\Documents\fullstackt5\daytwo\app.js";
console.log("base name",path.dirname(filepath));
console.log("ext name",path.extname(filepath));

const joinedpath = path.join(__dirname,"public","index.html");
console.log(joinedpath);
