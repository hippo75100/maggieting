console.log("hi!");
var http = require("http");
var request = require("request");
var port = Number(process.env.PORT || 3000);
var url = "http://graph.facebook.com/2014METEORmeethere/photos?type=uploaded";
var fs = require('fs');

fs.readfile("./index.html","utf8", function (err,result){
	template = result;
})

template = fs.readFileSync("./index.html","utf8");

http.createServer(function (req, res)
{
    var data= "";
    request.get(url, function (err,body,result)
    {
      result = JSON.parse(result);
      result.data.forEach(function(val,idx){
      	data += val.images[2].source;})     

      data = template.replace("{{content}}",data);

          res.end(data);
});


})
.listen(port);

console.log("sever create:" + port);

