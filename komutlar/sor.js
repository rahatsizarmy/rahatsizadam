const Discord = require('discord.js');
const client = new Discord.Client();
const Cleverbot = require('cleverbot-node');
const clbot = new Cleverbot;

exports.run = (client, message, args) => {
          var sans = ["Bilmemki", "Sen Ne Diyorsun Sabık","Neden olmasın","Olur","Tamam","Annene Sor","Otur Otur Oturduğun Yere","Sanane","He,He İnandım İnandım"];
          var sonuc = sans[Math.floor((Math.random() * sans.length))];
          const embed = new Discord.RichEmbed()
          .addField(`***___Sonuç___***`, `${sonuc}`)
          .setColor("RANDOM")
          return message.channel.sendEmbed(embed);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['s', 'konuş', 'sohbet', 'ask'],
  permLevel: 0
};

exports.help = {
  name: 'sor',
  description: 'Soru sormaya yarar.',
  usage: 'sor <soru>'
};
