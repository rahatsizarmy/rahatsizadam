const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

exports.run = (client, message, args) => {
    let type = args.slice(0).join(' ');
        if (type.length < 1) return message.channel.send(new Discord.RichEmbed().setColor('RANDOM').setTitle('Tavsiye komutu').setDescription(message.author.tag + ', kullanım şekli: r,tavsiye <tavsiyeniz>.').setFooter('Rahatsız Adam', client.user.avatarURL).setTimestamp());
    const embed = new Discord.RichEmbed()
    .setColor('RANDOM')
    .setTitle('Tavsiye;')
    .setDescription(message.author.tag + ', tavsiyeniz başarıyla gönderildi.Teşekkürler!')
    .setFooter('Rahatsız Adam', client.user.avatarURL)
    .setTimestamp()
    message.channel.send(embed);
    const embed2 = new Discord.RichEmbed()
    .setColor('RANDOM')
    .setDescription('***'+message.author.tag+'*** tavsiyede bulundu.')
    .addField('Kullanıcı bilgisi:','Kullanıcı ismi:\n'+ message.author.tag +'\nKullanıcı id:\n'+message.author.id, true)
    .addField('Kullanılan yer:', message.guild.name+' sunucusu\n**Ve**\n'+message.channel.name+' kanalında kullanıldı', true)
    .setFooter('Rahatsız Adam', client.user.avatarURL)
    .setThumbnail(message.author.avatarURL)
    .addField('Tavsiye:', type, true)
    .setTimestamp()
    client.channels.get('410451498259185667').send(embed2);
  };

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["tavsiye"],
  permLevel: 0
};

exports.help = {
  name: 'tavsiye',
  description: 'Yapımcıya tavsiye yollarsınız.',
  usage: 'tavsiye <tavsiyeniz>'
};
