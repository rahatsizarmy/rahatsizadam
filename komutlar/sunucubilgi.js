const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

exports.run = (client, message, params) => {

	if (!message.guild) {
    const ozelmesajuyari = new Discord.RichEmbed()
    .setColor("RANDOM")
    .setTimestamp()
    .setAuthor(message.author.username, message.author.avatarURL)
    .addField(':warning: Uyarı :warning:', '`sunucubilgi` adlı komutu özel mesajlarda kullanamazsın.')
    return message.author.sendEmbed(ozelmesajuyari); }
    if (message.channel.type !== 'dm') {
      const sunucubilgi = new Discord.RichEmbed()
      .setColor("RANDOM")
    .setTimestamp()
    .setDescription(message.guild.name +' ('+ message.guild.id + ')')
    .setThumbnail(message.guild.iconURL)
    .setFooter(message.guild.name, message.guild.iconURL)
    .addField('❯  Sunucunun Bilgileri:','\n•Bölge  :  `'+ message.guild.region +'`\n•Oluşturulma tarihi : `'+ message.guild.createdAt +'`\n•Rol Sayısı  : '+ message.guild.roles.size)
    .addField('❯  Kişilerle İlgili:','•Kişi sayısı :  '+ message.guild.memberCount +'\n•Sahibi  :'+ message.guild.owner + ' (' + message.guild.ownerID + ')')
    .addField('❯  Kanal Bilgileri :','•Kanal Sayısı  :  ' + message.guild.channels.size +'\n•AFK kanalı : '+ message.guild.afkChannel)
    return message.channel.sendEmbed(sunucubilgi);
    }
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['sunucu', 'sunucu bilgi', 'sbilgi','sb'],
  permLevel: 0
};

exports.help = {
  name: 'sunucubilgi',
  description: 'Sunucu hakkında bilgi verir.',
  usage: 'sunucubilgi'
};
