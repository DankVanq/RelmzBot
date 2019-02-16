const Discord = require('discord.js');


module.exports.run = async (bot, message, args) => {
	//message.channel.send(`Server name: ${message.guild.name}\nTotal members: ${message.guild.memberCount}`);
	   
	var serverpic = "https://cdn.discordapp.com/icons/"+ message.guild.id + "/" + message.guild.icon + ".png";
	const embed = new Discord.RichEmbed()
	  .setTitle(`Server Statistics for ${message.guild.name}`)
	  .setColor(0xb74602)
	  .setDescription("Various useless server stats for your brain!")
	  .setFooter("Server Information - Requested by " + message.author.username, "")
	  .setTimestamp()
	  .setURL("")
	  .setThumbnail(serverpic)
		
	  .addField("Guild Name and ID",`${message.guild.name}` + "/(" + `${message.guild.id}`+")", true)

	  .addField("Guild Owner", `${message.guild.owner.user}`, true)
	  //.addBlankField(true)

	  .addField("Guild Creation Date", `${message.guild.createdAt}`, true)

	  .addField("Guild Member Count", `${message.guild.memberCount}`+ ' members', true)


	  //.addField("Guild Creation Date", `${message.guild.roles}`, true)
	
	  message.channel.send({embed});
}
exports.configure = {
    command: "serverinfo"
}