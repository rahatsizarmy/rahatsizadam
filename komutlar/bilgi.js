const Discord = require('discord.js');
const client = new Discord.Client();
const ayarlar = require('../ayarlar.json');

exports.run = (client, message) => {
  if (message.channel.type !== 'dm') {
    const ozelmesajkontrol = new Discord.RichEmbed()
    .setColor("RANDOM")
    .setTimestamp()
    .setAuthor(message.author.username, message.author.avatarURL)
    .setDescription('Özel mesajlarını kontrol et. :postbox:');
    message.channel.sendEmbed(ozelmesajkontrol) }
	const pingozel = new Discord.RichEmbed()
    .setColor("RANDOM")
    .setTimestamp()
    .setAuthor(message.author.username, message.author.avatarURL)
    .addField('Hakkımda   ::','Ben Önce Rahatsız Adam Sunucusunda Kullanılacaktım Fakat Yapımcım Şuna Karar verdi:Neden Botu Herkes kullanmasın? Ve bunun sonucuyla sizlerleyim.Hergün geliştirilmeye devam ediyorum!')
    .addField('Yapımcım   ::',"@ßatu Murt#7406")
    .addField('Linkler    ::','[Destek Sunucum](https://discord.gg/9f82q)\n[Davet Linkim](https://discordapp.com/oauth2/authorize?client_id=434771960849760258&scope=bot&permissions=2146958591)\n\n© 2018 Rahatsız Adam')
    return message.author.sendEmbed(pingozel)
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['bot bilgi', 'botbilgi', 'bb', 'botb', 'bbot', 'hakkında', 'bot hakkında', 'bothakkında'],
  permLevel: 0
};

exports.help = {
  name: 'bilgi',
  description: 'Bot ile ilgili bilgi verir.',
  usage: 'bilgi'
};
