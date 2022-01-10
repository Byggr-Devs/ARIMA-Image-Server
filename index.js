var express = require("express");
var app = express();
console.log(__dirname);
//setting middleware
app.use(express.static(__dirname + "/images")); //Serves resources from public folder
app.listen(5000, () => {
  console.log("Images are serving at port 5000");
});
