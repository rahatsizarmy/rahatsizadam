const Discord = require('discord.js');
const Jimp = require('jimp'); 

exports.run = (client, message, args) => {
      message.channel.send("...")
      .then(nmsg => nmsg.edit(new Discord.RichEmbed().setColor('RANDOM').setDescription(`:ping_pong: Mesaj Gecikmesi: ${message.createdTimestamp} ms. Normal Gecikme: ${client.ping}`)))
        };
message: 'b-g'
  };
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'ping',
  description: 'Botun pingini gösterir.',
  usage: 'ping'
};
