const Discord = require('discord.js');

exports.run = (client, message, args) => {
	  if (message.author.id === ayarlar.sahip){
	let twitchtitle = args.slice(0).join(' ');
	if (twitchtitle.length < 1) return message.reply('Yayın için herhangi bir başlık yazmalısın.');
  message.delete();
  client.user.setStatus("");
  client.user.setGame(`${twitchtitle}`, 'https://www.twitch.tv/batumurt11');
  message.channel.send(`:white_check_mark: Twitch basligi: **${twitchtitle}** olarak deyiştirildi.`);
	      } else {
        message.channel.send(':x: **Üzgünüm Ama Bu Komutu Şimdilik Kullanamazsınız!**');
    }
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['yayin+', 'twitch-on', 'yayin-ac', 'yayın'],
  permLevel: 0
};

exports.help = {
  name: 'yayin-yap',
  description: 'Botun yayin basligini gösterir.',
  usage: 'yayin-yap <twitch basligi>'
};
