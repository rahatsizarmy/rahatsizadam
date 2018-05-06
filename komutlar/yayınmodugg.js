const Discord = require('discord.js');

exports.run = (client, message, args) => {
  message.delete();
  client.user.setStatus("");
  client.user.setGame(`r,yardım |r,anket| ${client.guilds.size} sunucu ✨`);
  message.channel.send(`:white_check_mark: Botun yayın modu kapatıldı.`);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['yayin', 'twitch-off', 'off'],
  permLevel: 4
};

exports.help = {
  name: 'yayin-kapat',
  description: 'Botun yayın modunu kapatır.',
  usage: 'yayin-kapat'
};
