const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

exports.run = (client, message, params) => {
    var sans = ["https://media3.giphy.com/media/fTI9mBoWLef8k/giphy.gif", "https://media2.giphy.com/media/NCh5G1KuRsXPa/giphy.gif","https://media3.giphy.com/media/PfHrNe1cSKAjC/giphy.gif","https://media0.giphy.com/media/LiOS57ojyxAGc/giphy.gif"];
    var sonuc = sans[Math.floor((Math.random() * sans.length))];
    const embed = new Discord.RichEmbed()
    .setImage(`${sonuc}`)
    .setColor("RANDOM")
    return message.channel.sendEmbed(embed);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'merhaba',
  description: 'Size Merhaba Gifi Atar',
  usage: 'merhaba'
};