module.exports.run = async (bot, message, args) => {

		var roll = Math.floor(Math.random() * 6) + 1;
		message.channel.send({
			embed: {
	  		color: 3447003,
	  		description: `:game_die: You rolled a... **` + roll + `** :game_die:`
		}
	});
}
exports.configure = {
    command: "diceroll"
}