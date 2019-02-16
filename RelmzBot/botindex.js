const Discord = require('discord.js');
const { prefix, token } = require('./config.json');
const bot = new Discord.Client();
const fs = require('fs');
const startTime = Date.now();
const BlacklistedWords = ["hack", "hacker", "hacked", "hacking", "hacks", "hax", "haxor","Hack", "Hacker", "Hacked", "Hacking", "Hacks", "Hax", "Haxor"]
const SafeChannels = ["511567866147897355","332524204266356738"]
bot.commands = new Discord.Collection();

function titleCase(str) {
	var splitStr = str.toLowerCase().split(' ');
	return splitStr; 
 };
 
fs.readdir('./commands/', (err, files) => {
	if(err) console.error(err);

	var jsfiles = files.filter(f => f.split('.').pop() === 'js');
	if (jsfiles.length <= 0){
		return console.log('No commands found...')
	} else {
		console.log(jsfiles.length + ' commands found.')
	}

	jsfiles.forEach((f, i) => {
		var cmds = require(`./commands/${f}`);
		console.log(`Command ${f} loading...`)
		bot.commands.set(cmds.configure.command, cmds);
	})
})

bot.on('ready', () => {
	console.log('Ready!\nUse this link to add the bot to your disord server! \nhttps://discordapp.com/oauth2/authorize?client_id=483088102261391370&scope=bot');
	console.log(`Bot has started with ${bot.users.size} users in ${bot.channels.size} channels on ${bot.guilds.size} servers.`); 
	bot.user.setStatus("online");
	bot.user.setActivity(`.help | ${bot.users.size} Users!`);
	//bot.user.setUsername("NerdBot");
	//${bot.guilds.size} Servers |
});

bot.on('message', message => {
	if(BlacklistedWords.some(word => message.content.includes(word)) ) {
		var NaughtyNaughtyWords = message.content;
		
		message.delete();
	  	message.channel.send({embed: {
			color: 0xff0000,
			description: "Please do not discuss any hacks whatsoever!"
		}});

		const embed = new Discord.RichEmbed()
		.setTitle(message.author.username + "'s Hack Discussion <:Moderation:508087830526951434>")
		.setColor(0xff0000)
		.setFooter()
		.setTimestamp()
		.addField("Username",message.author.username,true)
		.addField("ID",message.author.id,true)
		.addField("User","<@"+message.author.id+">",true)
		.addField("Naughty Naughty Words",NaughtyNaughtyWords,true)
		bot.channels.get("509378137465946116").send(embed)
	}
	if (!SafeChannels.includes(message.channel.id) && (message.content[0] === prefix)){
		message.author.send("Use bot commands in <#511567866147897355> only!")
		return message.delete()
	}
	if (!message.content.startsWith(prefix)) return;
	var cont = message.content.slice(prefix.length).split(' ');
	var cscont = titleCase(cont.join(' '));
	var args = cscont.slice(1);
	var sender = message.author;
	var cmd = bot.commands.get(cscont[0])
	if (cmd) cmd.run(bot,message, args);
});

bot.login(token);
