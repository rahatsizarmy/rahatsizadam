const Discord = require('discord.js');
const client = new Discord.Client();
exports.run = (client, message, args) => {
  if (!message.guild) {
  const ozelmesajuyari = new Discord.RichEmbed()
  .setColor(0xFF0000)
  .setTimestamp()
  .setAuthor(message.author.username, message.author.avatarURL)
  .addField(':warning: Uyarı :warning:', '`ayrıl` adlı komutu özel mesajlarda kullanamazsın.')
  return message.author.sendEmbed(ozelmesajuyari); }
  
  message.guild.leave(message.guild.id);
  client.channels.get("439843991014473739").sendMessage("-----------------------\n\nBaşarılı bir şekilde "+ message.guild.name +" Adlı sunucudan çıkarıldım.\n\n-----------------------")


};

exports.conf = {
    enabled: true,
    guildOnly: true,
    aliases: ['ayrıl'],
    permLevel: 4
  };
  
  exports.help = {
    name: 'ayrıl',
    description: 'Komutun kullanıldığı sunucudan botu çıkarır.',
    usage: 'ayrıl'
  };
  
