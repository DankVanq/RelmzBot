module.exports.run = async (bot, message, args) => {
		if (message.author.id !== "327427652254302209"){ 
			message.reply('You do not have permission to use this command!');
			return;
		}
		else {
			message.reply('Bot process has been terminated!');
			var interval = setInterval (function () {
				console.log('Bot has been terminated! Please restart the bot soon!');
				process.exit()
			  }, 1 * 1000); 
			
		}
}
exports.configure = {
    command: "stop"
}