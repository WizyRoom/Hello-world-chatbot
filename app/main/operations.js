'use strict';
var request = require('request');
var botApi =  require('../api/bot_api');

function botOperation(req, res){

	console.log(req.body)
	//INIT VAR
	var data = 	  req.body;     // Data sent from WizyRoom When Bot mentioned
	var message = data.message; // Object that contain wizyRoom message details (id, body, owner_id, owner_name, owner_mention_name, domain_id, workroom_id, workroom_name, created, is_reply)
	var bot =     data.bot;     // Chatbot properties (id, mention_text)
	var token =   data.token;   // Chatbot_server.token, used for authorization on Chatbot server

	console.log(message.body)

	//Add a condition so the bot can reply depending on user's message
	if(message.body.toLowerCase().match(/help+/g)){
		botApi.botDirectReply(res, "Hello "+message.owner_name+", what can i help you with.", true); //true will reply to the message sent by the user
	}else if(message.body.toLowerCase().match(/how are you+/g)){
		botApi.botDirectReply(res, "i'm fine thanks", true);
	}
	//Standard message (the bot will always reply this message when mensioned)
	else{
		var textReply = "Hello "+message.owner_name+", i'm a sample bot.";
		botApi.botDirectReply(res, textReply, true);
	}
}

module.exports = {
	botOperation: botOperation
}