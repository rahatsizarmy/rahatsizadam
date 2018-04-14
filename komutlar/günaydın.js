const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

exports.run = (client, message, params) => {
    var sans = ["https://media1.giphy.com/media/3oEdv9R4D62GPrVY4g/giphy.gif","https://media1.giphy.com/media/l1J9JPYPSOfp2OcM0/giphy.gif","https://media2.giphy.com/media/3oFzm1MXiHxBReOIAE/giphy.gif"];
    var sonuc = sans[Math.floor((Math.random() * sans.length))];
    const embed = new Discord.RichEmbed()
    .setImage(`${sonuc}`)
    .setColor("RANDOM")
    return message.channel.sendEmbed(embed);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['yardım'],
  permLevel: 0
};

exports.help = {
  name: 'günaydın',
  description: 'Size Günaydın Gifi Atar',
  usage: 'günaydın'
};