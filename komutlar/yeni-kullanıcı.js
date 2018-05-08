const Discord = require('discord.js');

exports.run = (client, message, args) => {
      let users = client.users;
      let searchTerm = args[0];
            if(!searchTerm) return message.channel.send(new Discord.RichEmbed().setColor('RANDOM').setTitle('Kullanıcı ara;').setDescription(message.author.tag + ', kullanım: r,üye-bul <üye ismi>.').setThumbnail(client.user.avatarURLL).setFooter('Rahatsız Adam', client.user.avatarURL).setTimestamp());
      let matches = users.filter(u => u.tag.toLowerCase().includes(searchTerm.toLowerCase()));
      message.channel.send(`Arama sonuçları;\n~》` + matches.map(u => u.tag || 'Yok').join(',\n~》 '));
        };

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['kbul','bul'],
  permLevel: 4
};

exports.help = {
  name: 'üye-bul',
  description: 'İstediğiniz şeyi bota yazdırır.',
  usage: 'yaz [yazdırmak istediğiniz şey]'
};
