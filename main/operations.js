'use strict';

function botOperation(req, res){

	console.log(req.body)
	//INIT VAR
	var data = 	  req.body;     // Data sent from WizyRoom When Bot mentioned
	var message = data.message; // Object that contain wizyRoom message details (id, body, owner_id, owner_name, owner_mention_name, domain_id, workroom_id, workroom_name, created, is_reply)
	var bot =     data.bot;     // Chatbot properties (id, mention_text)
	var token =   data.token;   // Chatbot_server.token, used for authorization on Chatbot server

	var is_reply = true //if true the message sent by the bot will be a reply to the message recieved

	//Add a condition so the bot can reply depending on user's message
	//message.body.toLowerCase() : this will convert text to lower case
	//match(/help+/g) : this will check if text contain a substring 'help'

	if(message.body.toLowerCase().match(/help+/g)){
		//message.body contain 'help' so here we now that the user need help.
		var textReply = "Hello "+message.owner_name+", what can i help you with.";

	}else if(message.body.toLowerCase().match(/tell me time please+/g) || message.body.toLowerCase().match(/time+/g)){
		//message.body contain 'time' so here we now that the user want the time.
		var textReply = "The time is: "+ new Date();
	}else{
		//Standard message (the bot will always reply this message when message.body don't match with the conditions above)
		var textReply = "Hello "+message.owner_name+", i'm a sample bot.";
	}

	//Send back chatbot response to Wizyroom (satus and json)
	res.status(200).send({'body': textReply, 'is_reply':is_reply});
}

module.exports = {
	botOperation: botOperation
}