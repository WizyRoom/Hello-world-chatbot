# Welcome to the WizyRoom-Sample-Bot

WizyRoom-Sample-Bot is a Node.js [Wizyroom](https://app.wizyroom.io/secured/login?next_uri=Lw%3D%3D) chatbot.

![chatbot](https://sites.google.com/a/wizy.io/sand/sandbox/chatbot.gif?attredirects=0)

## Installation

The application has very minimal dependencies and requirements aside from a typical Node.js stack.
this will run the bot localy use **ngrok** to secure introspectable tunnels to your localhost webhook 

1. Simply clone this repository.
2. Run the commande prompt.
3. Install the dependencies via `npm install` under your project root file.
3. Run the bot localy via `npm start` it will run on localhost:8080
4. Download [Ngrok](https://ngrok.com/download) and extract file content in project path
5. Run the commande prompt and run server via `ngrok http 8080`.
* **Ngrok** is useful for developement to test your application before deploying it.

## Developement

♦ How to redirect user to bot home page?

`app.get('/', function(req, res, next) {
	res.render('index.ejs');
});`

♦ How to access the request body when POSTing using Node.js and Express?

`req.body` contain the posted data.

`app.post('/chatbot', function(req, res, next) {
	operations.botOperation(req, res)
});`

♦ How to connect my bot to external services ?

Check this [example](https://github.com/WizyRoom/1.weather-chatbot) to learn how to retrieve data from external services


## Deployment

In order to be able to deploy our bot we will use **Heroku.com**.

1. First of all [Fork](https://github.com/maherwizy/WizyRoom-Sample-Bot/wiki/_new#fork-destination-box) this project to you account
2. Log in or Sign up to Heroku.
3. Go to [dashboard](https://dashboard.heroku.com/apps).
4. Click new and create a new app.
5. Specify an **App Name** then **Create app**.
6. Use **GitHub** for Deployment method.
7. Connect **GitHub** to **Heroku** and authorize application.
8. Now search for our project **WizyRoom-Sample-Bot** and connect it.
9. Click on **Deploy Branche** Master.
10. Once done you can view your app (you will see the bot home page) [example](https://wizyroom-sample-bot.herokuapp.com/)


## WizyRoom integration

Time to use our bot in Wizyroom and test it.

![Wizyroom](https://sites.google.com/a/wizy.io/sand/sandbox/bot_creation.PNG?attredirects=0)

1. Go to you Wizyroom account admin panel https://app.wizyroom.io/admin/integrations/chatbots
2. Add chatbot
3. Specify all required fields (Server URL is the url of the deployed application on Heroku with **/chatbot** at the end of URLs) example : https://wizyroom-sample-bot.herokuapp.com/chatbot
4. Go to a room and invite your bot
5. Mention your created bot and start a conversation

## License

The code provided in this sample is licensed under the Wizy.io License.