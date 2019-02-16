const { prefix, token } = require('./config.json');
const Discord = require('discord.js');
const client = new Discord.Client();
const moderator = ["327427652254302209"];


module.exports.run = async (bot, message, args) => {
	function titleCase(str,join) {
		if(args.length>0){
			var splitStr = str.toLowerCase().split(' ');
			return splitStr.join(join); 
		} else{
			return;
		}
	 }
	let values = titleCase(args[0]);
	if (values === "entertainment") {
	   const embed = new Discord.RichEmbed()
	   .setTitle(`<:Entertainment:508086545778081792> Entertainment Commands`)
	   .setColor(0xb74602)
	   .setFooter("Entertainment Help - Requested by " + message.author.username, bot.user.avatarURL)
	   .setTimestamp()
	   //.setThumbnail("https://www.relmz.io/TemplateData/main2.jpg")
	   .addField("<:Dice:508254639536209930> Diceroll","``.diceroll``", true)

	   //.addField(".",".", false)
	   message.channel.send({embed});
	} else if (values === "relmz") {
		const embed = new Discord.RichEmbed()
	   .setTitle(`<:Relmz:508087142392659989> Relmz Commands`)
	   .setColor(0xb74602)
	   .setFooter("Relmz Help - Requested by " + message.author.username, bot.user.avatarURL)
	   .setTimestamp()
	   //.setThumbnail("https://www.relmz.io/TemplateData/main2.jpg")
	   .setURL("")
	   .addField("<:Search:508452104709472267> Itemsearch","``.itemsearch <item>``", true)
	   .addField("<:Leaderboard:508449504651902982> Leaderboard","Planned!", true)
	   .addField("<:Suggest:508453060486365201> Suggest",".suggest or .suggestcommand <suggestion>", true)
	   message.channel.send({embed});

	} else if (values === "other") {
		const embed = new Discord.RichEmbed()
	   .setTitle(`<:Other:508092058377125889> Other Commands`)
	   .setColor(0xb74602)
	   .setFooter("Other Help - Requested by " + message.author.username, bot.user.avatarURL)
	   .setTimestamp()
	   //.setThumbnail("https://www.relmz.io/TemplateData/main2.jpg")
	   .setURL("")
	   .addField("<:Avatar:508453466687930369> Avatar","``.avatar``", true)
	   .addField("<:Help:508453834318807041> Help","``.help <section>``", true)
	   .addField("<:Ping:508255234523660288> Ping","``.ping``", true)
	   .addField("<:Info:508461874656837639> Serverinfo","``.serverinfo``", true)
	   .addField("<:Time:508462383098757121> Uptime","``.uptime``", true)
	   .addField("<:Info:508461874656837639> Userinfo","``.userinfo``", true)

	   message.channel.send({embed});
	} else if (values === "moderation" && moderator.includes(message.author.id)) {
		message.reply("<:Moderation:508087830526951434> Test! Nothing has been implemented as of yet!")
		//message.reply(message.author.id)
		//"Moderation Help - Requested by " + message.author.username
	} else if (values === "moderation" /*&& message.author.id !== moderator.includes*/) {
		message.reply("<:Moderation:508087830526951434> Only us superiors may use said secret commands!")
		//message.reply(message.author.id) 
	} else if (values === "owner") {
		const embed = new Discord.RichEmbed()
	   .setTitle(`<:Owner:508088809448275978> Owner Commands`)
	   .setColor(0xb74602)
	   .setFooter("Owner Help - Requested by " + message.author.username, bot.user.avatarURL)
	   .setTimestamp()
	   //.setThumbnail("https://cdn.discordapp.com/attachments/462977605273124885/472622845986471946/title.png")
	   //.setURL("https://www.relmz.io/")
	   .addField("Stop","``.stop``", true)
	   message.channel.send({embed});
	} else {
		const embed = new Discord.RichEmbed()
	   .setTitle(`Command List`)
	   .setDescription('.help <category> for more information!')
	   .setColor(0xb74602)
	   .setFooter("Help - Requested by " + message.author.username, bot.user.avatarURL)
	   .setTimestamp()
	   //.setThumbnail("https://cdn.discordapp.com/attachments/462977605273124885/472622845986471946/title.png")
	   //.setURL("https://www.relmz.io/")
	   .addField("<:Entertainment:508086545778081792> Entertainment","``.help Entertainment``", true)
	   .addField("<:Other:508092058377125889> Other","``.help Other``", true)
	   .addField("<:Owner:508088809448275978> Owner","``.help Owner``", true)
	   .addField("<:Moderation:508087830526951434> Moderation","``.help Moderation``", true)
	   .addField("<:Relmz:508087142392659989> Relmz","``.help Relmz``", true)


	   message.channel.send({embed});
	}
}
exports.configure = {
    command: "help"
}