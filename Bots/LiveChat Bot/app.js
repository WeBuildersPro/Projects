//var express = require("express");
//var bodyParser = require("body-parser");
var slackBot = require("slackbots");

var bot = new slackBot({
    token: 'xoxb-223984827124-wCiyojVPKaWgaobZVMF0Cfkl', 
    name: 'Livechat Bot'
});

bot.on('start', function() {
    // more information about additional params https://api.slack.com/methods/chat.postMessage 
    var params = {
        
    };

    bot.postMessageToChannel('bot-testing', 'meow!', params);
});

//var app = express();
//var port = process.env.PORT || 1337;

//app.use(bodyParser.urlencoded({extended: true}));

//app.get("/", function(req, res) {res.status(200).send("Hello World!"); });

//app.listen(port, function() {
	//console.log("Listening on port: " + port);
//});



//app.post("/hello", function(req, res, next) {
	//var userName = req.body.user_name;
	//var botPayload = {
		//text: "/sk test"
	//};

	//if (userName !== "slackbot") {
		//return res.status(200).json(botPayload);
	//} else {
		//return res.status(200).end();
	//}
//});