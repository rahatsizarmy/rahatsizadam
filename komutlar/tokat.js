const Discord = require('discord.js');
const client = new Discord.Client();


exports.run = (client, message, args) => {
    let user = message.mentions.users.first();
    const embed = new Discord.RichEmbed()
    .setAuthor(message.author.username, message.author.avatarURL)
    .setTimestamp()
    .setDescription('<@'+ user.id+'> Adlı kişi <@'+message.author.id+'> adlı kişi tarafından tokatlandı.')
    .setImage("https://media.giphy.com/media/vxvNnIYFcYqEE/giphy.gif")
    .setColor("RANDOM")
    .setFooter('Of ne vurdu be iyi acımıştır.')
    return message.channel.sendEmbed(embed);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'tokat',
  description: 'İstediğiniz kişiye tokat atar.',
  usage: 'tokat <istediğin kişiyi etiketle>'
};