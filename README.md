# Welcome to the Hello-World-Chatbot for [Wizyroom](https://app.wizyroom.io/secured/login?next_uri=Lw%3D%3D)

Hello-World-Chatbot is a Node.js chatbot for [Wizyroom](https://app.wizyroom.io/secured/login?next_uri=Lw%3D%3D). 
In this example we propose to use [Ngrok](https://ngrok.com/download): a secure introspectable tunnels to your localhost, to test your chatbot locally without deploying it.

![chatbot](https://sites.google.com/a/wizy.io/sand/sandbox/chatbot.gif)

## Requirement

* Wizyroom account
* Hello-World-Chatbot
* Ngrok
* Heroku

## Installation

The application has very minimal dependencies and requirements aside from a typical Node.js stack.

1. Simply clone this repository.
2. Run the prompt command.
3. Install the dependencies via `npm install` under your project root file.
4. Run the chatbot locally via `npm start` it will run on localhost:8080.
5. Download [Ngrok](https://ngrok.com/download) and extract file content in project path.
6. Run the commande prompt and run server via `ngrok http 8080`.

## Development

You can retrieve all documentation for Wizyroom API:

	* [Incomming Webhook](https://docs.google.com/document/d/1wcpJ4Y7O2OWyGvEmHb4a0mjmh7Nr6ObUlwaIRi1lj5k)
	* [Outgoing Webhook](https://docs.google.com/document/d/1WwOL8bmiJLOC57VvnX4qlzInFrX3EN9ZhosJiu6iifI)

* Create a get request to test the chatbot running

```javascript
app.get('/', function(req, res, next) {
	res.render('index.ejs');
});
```

* Get the body of your request when using the **Node.js** framework **Express**

`req.body` contain the posted data.

```javascript
app.post('/chatbot', function(req, res, next) {
	operations.botOperation(req, res)
});
```

* This simple application will return a sentence everytime the chatbot is triggered in **Wizyroom**

```javascript
function botOperation(req, res){
	var data = 	  req.body;
	var message = data.message;
	var bot =     data.bot;
	var token =   data.token;

	var is_reply = true

	if(message.body.toLowerCase().match(/help+/g)){
		var textReply = "Hello "+message.owner_name+", what can i help you with.";

	}else if(message.body.toLowerCase().match(/tell me time please+/g) || message.body.toLowerCase().match(/time+/g)){
		var textReply = "The time is: "+ new Date();
	}else{
		var textReply = "Hello "+message.owner_name+", i'm a sample bot.";
	}

	res.status(200).send({'body': textReply, 'is_reply':is_reply});
}
```

The chatbot reply depends on the message chatted by the user to the bot. The chatted message is analysed by regular expressions.


For more bot examples Check this [link](https://github.com/WizyRoom/1.weather-chatbot) and learn how to retrieve data from external services.


## Deployment

In order to be able to deploy your bot we propose to use **Heroku.com**.

1. First of all [Fork](https://github.com/maherwizy/WizyRoom-Sample-Bot/wiki/_new#fork-destination-box) this project to your account
2. Log in or Sign up to Heroku.
3. Go to [dashboard](https://dashboard.heroku.com/apps).
4. Click new and create a new app.
5. Specify an **App Name** then **Create app**.
6. Use **GitHub** for Deployment method.
7. Connect **GitHub** to **Heroku** and authorize application.
8. Now search for our project **WizyRoom-Sample-Bot** and connect it.
9. Click on **Deploy Branch** Master.
10. Once deployment done you can view your app by clicking on Open app [example](https://hello-world-chatbot.herokuapp.com/)


## WizyRoom integration

Time to use your bot in Wizyroom and test it.

1. Go to your Wizyroom account admin panel https://app.wizyroom.io/admin/integrations/chatbots
2. Add chatbot
3. Specify all required fields (Server URL is the url of the deployed application on Heroku with **/chatbot** at the end of URLs) example : https://hello-world-chatbot.herokuapp.com/chatbot
![Wizyroom](https://sites.google.com/a/wizy.io/sand/sandbox/bot_creation.PNG)
4. Go to a room and invite your bot
![inviteBot](https://sites.google.com/a/wizy.io/sand/sandbox/add-bot.PNG)
5. Mention your created bot and start a conversation
![inviteBot](https://sites.google.com/a/wizy.io/sand/sandbox/mention.PNG)

## License

The code provided in this sample is licensed under the Wizy.io License.