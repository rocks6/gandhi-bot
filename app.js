
// here we have the driver for the bot
// start bot
// handle authentication
// handle chat 'menu' (what do you want the bot to do?)

var mineflayer = require('mineflayer');
var bot = mineflayer.createBot({
	  host: "localhost", // optional
	  port: 25565,       // optional
	  username: "email@example.com", // email and password are required only for
	  password: "12345678",          // online-mode=true servers
});
bot.on('chat', function(username, message) {
	  if (username === bot.username) return;
	  bot.chat(message);
});
