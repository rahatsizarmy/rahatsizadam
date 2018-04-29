const Discord = require('discord.js');
exports.run = function(client, message, args) {

  if (!message.guild) {
    return message.author.send('`sil` komutu sadece sunucularda kullanılabilir.');
  }
  let mesaj = args.slice(0).join(' ');
  if (mesaj.length < 1) return message.reply('Yazmam için herhangi bir şey yazmalısın.');
  if (mesaj > 100) return message.channel.send('**100 den fazla mesaj silemem!**')
  if (mesaj = 0) return message.channel.send('**1 ile 100 arası bir rakam yazmalısın**');
  message.channel.bulkDelete(mesaj + 1);
  message.channel.send(mesaj+" Adet Mesaj Siliyorum!")
  .then(m => {
        m.edit(mesaj+ " Adet Meaj Sildim.!İyi Günler",`<@${message.author.id}>`);
      });
        const embed = new Discord.RichEmbed()
        .setColor("RANDOM")
    .setTimestamp()
    .setAuthor(message.author.username, message.author.avatarURL)
  .addField('❯  Silinen Mesaj Sayısı',mesaj)
  .addField('❯  Yetkili',`<@${message.author.id}>`)
  .addField('❯  Sonuç','Sonuç Başarılıdır')

  return message.channel.sendEmbed(embed)
    message.bulkDelete(4);
};


exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ['temizle'],
  permLevel: 2
};

exports.help = {
  name: 'sil',
  description: 'Belirlenen miktar mesajı siler.',
  usage: 'sil <temizlenecek mesaj sayısı>'
};
