const Discord = require("discord.js");
const fs = require("fs")

function readJSON(location) {
	return JSON.parse(fs.readFileSync(location))
}
function titleCase(str,join) {
   var splitStr = str.toLowerCase().split(' ');
   for (var i = 0; i < splitStr.length; i++) {
       splitStr[i] = splitStr[i].charAt(0).toUpperCase() + splitStr[i].substring(1);     
   }
   return splitStr.join(join); 
}
module.exports.run = async (bot, message, args) => {
		let useritemname = args.join("-").toLowerCase();
		var useritemnamecapitalized = titleCase(args.join(" "),' ');
		var wikiurl = titleCase(args.join(" "),'_');
		var data = readJSON("./commands/items.json")

		if(Object.getOwnPropertyNames(data.items).includes(useritemname)){
		const embed = new Discord.RichEmbed()
	    .setTitle(useritemnamecapitalized)
	    .setURL(`http://relmz.wikia.com/wiki/${wikiurl}`)
	    .setColor(data.items[`${useritemname}`].ItemEmbedColor)
	    .setDescription(data.items[`${useritemname}`].Description)
	    .setThumbnail(data.items[`${useritemname}`].ItemThumbnailURL)
	    .setFooter("Item information requested by: " + message.author.username, "https://cdn.discordapp.com/attachments/462977605273124885/472622511562162187/psd_logo.png")
	    .setTimestamp()
	    var DisplayStatArray = [
		    "HPDisplayStat",
		    "HPRecoveredDisplayStat", 
		    "DefenseDisplayStat", 
		    "AttackDisplayStat", 
		    "CriticalDisplayStat", 
		    "SpeedDisplayStat", 
		    "BlockDisplayStat", 
		    "PoisonDisplayStat",
		    "PoisonResistDisplayStat",
		    "PoisonChanceDisplayStat",
		    "PoisonStrengthDisplayStat",
		    "BuyPriceDisplayStat"
		];
		var DisplayStatValuesArray = [
		    "HP",
		    "HPRecovered", 
		    "Defense", 
		    "Attack", 
		    "Critical", 
		    "Speed", 
		    "Block", 
		    "Poison",
		    "PoisonResist",
		    "PoisonChance",
		    "PoisonStrength",
		    "BuyPrice"
		];
		var TitleArray = [
			"Hitpoints (HP)",
			"Hitpoints Recovered",
			"Defense (Def)",
			"Attack (Atk)",
			"Critical (Crit)",
			"Speed (Spd)",
			"Block (Blk)",
			"Poison",
			"Poison Resist",
			"Poison Chance",
			"Poison Strength",
			"Buy Price"
		];
	    for (i = 0; i < DisplayStatArray.length; i++) {
	    	if (data.items[`${useritemname}`][`${DisplayStatArray[i]}`] === "True"){
	    		embed.addField(`${TitleArray[i]}`, "+" + data.items[`${useritemname}`][`${DisplayStatValuesArray[i]}`], true)
	    	}
	    }
	    embed.addField("Sell Price", "+" + data.items[`${useritemname}`].SellPrice + " Coins <:Gold:490690262490677261>", true)
	    embed.addField("Source", data.items[`${useritemname}`].Source, true)
		message.channel.send(embed);
	} else {
		message.channel.send("Please double check your spelling of the requested item and try again!")
	}

		
         /*
				"HP": "",
				"HPDisplayStat": "False",
				"HPRecovered": "",
				"HPRecoveredDisplayStat": "False",
				"Defense": "",
				"DefenseDisplayStat": "False",
				"Attack": "",
				"AttackDisplayStat": "False",
				"Critical": "",
				"CriticalDisplayStat": "False",
				"Speed": "",
				"SpeedDisplayStat": "False",
				"Block": "",
				"BlockDisplayStat": "False",
				"Poison": "",
				"PoisonDisplayStat": "False",
				"PoisonResist": "",
				"PoisonResistDisplayStat": "False",
				"PoisonChance": "",
				"PoisonChanceDisplayStat": "False",
				"PoisonStrength": "",
				"PoisonStrengthDisplayStat": "False",
				"BuyPrice": "",
				"BuyPriceDisplayStat": "False",
				"Description": "",
				"Source": "",
				"SellPrice": "",
				"ItemThumbnailURL": "",
				"ItemEmbedColor": "0x"
         */
		
}
exports.configure = {
    command: "itemsearch"
}