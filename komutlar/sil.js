const Discord = require('discord.js');
exports.run = function(client, message, args) {

  if (!message.guild) {
    return message.author.send('`sil` komutu sadece sunucularda kullanılabilir.');
  }
  let mesajsayisi = parseInt(args.join(' '));
  if (mesajsayisi.length < 1) return message.channel.send('**1 ile 100 arası bir rakam yazmalısın**')
  if (mesajsayisi > 100) return message.channel.send('**100 den fazla mesaj silemem!**');
  message.channel.bulkDelete(mesajsayisi + 2);
  message.channel.send(mesajsayisi+" Adet Mesaj Siliyorum!")
  .then(m => {
        m.edit(mesajsayisi+ " Adet Meaj Sildim.!İyi Günler",`<@${message.author.id}>`);
      });
        const embed = new Discord.RichEmbed()
        .setColor("RANDOM")
    .setTimestamp()
    .setAuthor(message.author.username, message.author.avatarURL)
  .addField('❯  Silinen Mesaj Sayısı',mesajsayisi)
  .addField('❯  Yetkili',`<@${message.author.id}>`)
  .addField('❯  Sonuç','Sonuç Başarılıdır')

  return message.channel.sendEmbed(embed)
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
