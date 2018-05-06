const Discord = require("discord.js");
const moment = require("moment");
require("moment-duration-format");

exports.run = (client, message, args) => { 
    let guild = message.guild 
    let reason = args.slice(1).join(' ');
    let user = message.mentions.users.first();
    let modlog = guild.channels.find('name', 'çağrılar');
    if (!modlog) return message.reply('`çağrılar` kanalını bulamıyorum.');
    if (reason.length < 1) return message.reply('Bildirmek İstediğiniz Şeyi  Yazmalısın');


    guild.channels.get(modlog.id).send("@here **Yeni Bildiri Var!**") 
    const embed = new Discord.RichEmbed()
      .setColor("RANDOM")
      .setTimestamp()
      .addField('Uyanın Yeni Çağrı Geldi','Hadi Hadi Hadi! ')
      .addField('Çağıran:', `${message.author.username}#${message.author.discriminator}`)
      .addField('Taleb:', reason);
    return guild.channels.get(modlog.id).sendEmbed(embed);
  };

  exports.conf = {
    enabled: true,
    guildOnly: true,
    aliases: ['destek'],
    permLevel: 0
  };
  
  exports.help = {
    name: 'bildir',
    description: 'Desteği Çağırır',
    usage: 'bildir <bildiriniz>'
  };
