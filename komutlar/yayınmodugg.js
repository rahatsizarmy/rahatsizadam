const Discord = require('discord.js');

exports.run = (client, message, args) => {
    if (message.author.id === "430723591223640064") {
  message.delete();
  client.user.setStatus("");
  client.user.setGame(`r,yardım | r,uyar | ${client.guilds.size} sunucu ✨`, "https://www.twitch.tv/batumurt11");
  message.channel.send(`:white_check_mark: Botun yayın modu kapatıldı.`);
      } else {
        message.channel.send(':x: **Üzgünüm Ama Bu Komutu Şimdilik Kullanamazsınız!**');
    }
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['yayin', 'twitch-off', 'off'],
  permLevel: 0
};

exports.help = {
  name: 'yayin-kapat',
  description: 'Botun yayın modunu kapatır.',
  usage: 'yayin-kapat'
};
