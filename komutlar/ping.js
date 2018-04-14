const Discord = require('discord.js');
exports.run = function(client, message, args) {
  message.channel.send("Hesaplıyorum...")
  .then(m => {
        m.edit( '**Pingim : __'+ client.ping +'__ ms.**');
      });
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
