const Discord = require('discord.js');

module.exports.run = async (bot, message, args) => {
	if (message.mentions.users.keyArray().length > 0) {
		var evatar = message.mentions.users.first().avatarURL.split("?").slice(0, 1).join("").split(".");
	} else {
		var evatar = message.author.avatarURL.split("?").slice(0, 1).join("").split(".");
	}
    var link = evatar.slice(0, 3).join(".")
    if(evatar[3] === "gif") {
		var avatar = link + ".gif"
		console.log("avatar gif"+ avatar);
    } else {
		var avatar = link + ".png"
		console.log("avatar png"+ avatar);
	}
	const embed = new Discord.RichEmbed()
	.setTitle("Avatar URL")
	.setURL(avatar)
	.setColor(16777215)
	.setFooter("Requested by " + message.author.username, "")
	.setImage(avatar)
	message.channel.send(embed);
}
exports.configure = {
    command: "avatar"
}