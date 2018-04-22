const Discord = require('discord.js');
exports.run = function(client, message, args) {
    const embed = new Discord.RichEmbed()
  .setColor("RANDOM")
  .setAuthor(message.author.username, message.author.avatarURL)
  .setDescription('Pingim   ==  '+ client.ping)
    return message.channel.sendEmbed(embed);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'ping',
  description: 'Botun pingini gösterir.',
  usage: 'ping'
};
