const Discord = require('discord.js');
exports.run = function(client, message, args) {

  if (!message.guild) {
    return message.author.send('`temizle` komutu sadece sunucularda kullanılabilir.');
  }
  let mesaj = parseInt(args.join(' '));
  if (mesaj.length < mesaj) return message.channel.send('Kaç mesaj silmem gerektiğini belirtmedin.')
  if (mesaj > 100) return message.channel.send('100 adetden fazla mesaj silemem!');
  message.channel.bulkDelete(mesaj + 1);
  message.channel.send(mesaj +" adet mesaj sildim.Sildiren : `"+message.author.username+'#'+message.author.discriminator +'`')
  message.channel.bulkDelete(2);
};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ['sil'],
  permLevel: 2
};

exports.help = {
  name: 'temizle',
  description: 'Belirlenen miktar mesajı siler.',
  usage: 'temizle <temizlenecek mesaj sayısı>'
};
