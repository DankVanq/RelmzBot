const Discord = require('discord.js');

module.exports.run = async (bot, message, args) => {
    if (message.mentions.users.keyArray().length > 0) {
        var requesteduser = message.mentions.users.first();
        console.log("MENTIONED SUCCESSFULLY");
	} else {
        var requesteduser = message.author;
    }

    const embed = new Discord.RichEmbed()
	  .setTitle(`${requesteduser.username}'s User Information`)
	  .setColor(0xb74602)
	  .setFooter("User Information - Requested by " + message.author.username, "")
	  .setTimestamp()
	  .setURL("")
	  .setThumbnail(requesteduser.avatarURL)
      .addField("Username",requesteduser.username,true)
      .addField("ID",requesteduser.id,true)
      .addField("User","<@"+requesteduser.id+">",true)
	  message.channel.send({embed});
}
exports.configure = {
    command: "userinfo"
}