const Discord = require('discord.js');

module.exports.run = async (bot, message, args) => {
    message.channel.send("Suggestion successfully suggested! (What else do you expect this to say?!)")
    var suggestion = message.content.replace(".suggest", " ");
    const embed = new Discord.RichEmbed()
    .setTitle(message.author.username + "'s Suggestion <:Suggest:508453060486365201>")
    .setColor(0xb74602)
    .setFooter()
    .setTimestamp()
    .addField("Username",message.author.username,true)
    .addField("ID",message.author.id,true)
    .addField("User","<@"+message.author.id+">",true)
    .addField("Suggestion",suggestion,true)
    bot.channels.get("509378137465946116").send(embed)
    //`**${message.member.displayName} (${message.author.username}/${message.author.id})** suggested the following command:\n${message.content.replace(bot.prefix+"suggest ", "")}`
    //bot.channels.get("509378137465946116").send(`**${message.member.displayName} (${message.author.username}/${message.author.id})** suggested the following command:\n${message.content.replace(bot.prefix+"suggest ", "")}`)
}
exports.configure = {
command: "suggest"
}