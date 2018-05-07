const Discord = require('discord.js');
exports.run = function(client, message, args) {

    let dmkisi = message.mentions.users.first();
    if (!dmkisi) return message.channel.send(':x: **Kimi uyaracağımı Seçmelisin**');
    let dm = args.slice(1).join(' ');
    if (!dm) return message.channel.send(':x: **Neden uyaracağımı yazıyı unuttun!**');
    message.delete();
    const dmat = new Discord.RichEmbed()
    .setColor('RANDOM')
    .setTimestamp()
    .setAuthor(message.author.username,message.author.avatarURL)
   .setDescription(`**${message.author.username}#${message.author.discriminator}** tarafından** ${message.guild.name}** sunucuda **${message.channel.name}** kanalından uyarıldın'\nUyarılma Sebebin:\n${dm}`)
    .setFooter('DM | Warriors')
    dmkisi.sendEmbed(dmat);
    const dmtamam = new Discord.RichEmbed()
    .setColor('RANDOM')
    .setTimestamp()
    .setTitle('İşlem Tamamlandı :white_check_mark:')
    .setFooter('DM | Warriors')
    message.channel.sendEmbed(dmtamam);
};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ['uyar'],
  permLevel: 2
};

exports.help = {
  name: 'uyar',
  description: 'Botun Pingini GÃ¶sterir.',
  usage: 'ping'
};
