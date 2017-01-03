'use strict';

// [START exports]
module.exports = {
	/***************************************************************************************
	This will send a message when a user call the bot from WizyRoom it's called direct reply.
	****************************************************************************************/
  	botDirectReply: function (res, message, is_reply){
		res.status(200).send({'body': message, 'is_reply':is_reply});
	},
	/***************************************************************************************
	This will use a specefic bot to send a message to a specefic room.
	****************************************************************************************/
	botCustomMessage: function(dbjson, message){
		var postData = {
		  'domain_id':     dbjson.domain_id,
		  'membership_id': dbjson.bot_id,
		  'token':         dbjson.bot_token,
		  'workroom_id':   dbjson.workroom_id,
		  'body' :         message,
		  'parent':        {'id': dbjson.conversation_id}
		};

		request.post(
	    'https://public-dot-wizy-workroom.appspot.com/api/v1/messages',
	    { 
	    	json: postData,
	    	headers: {
		  		'Accept': 'application/json',
		      	'Content-Type': 'application/json'
		  	}
	    },function (error, response, body) {
	    	console.log(response.statusCode)
	    	console.log(error)
	        if (!error && response.statusCode == 200) {
	            console.log(body)
	        }
	    }
		);
	}
};
// [END exports]