const Discord = require("discord.js");
const moment = require("moment");
require("moment-duration-format");

exports.run = (client, message, args) => {
    if (!message.guild) {
    const embed = new Discord.RichEmbed() 

    .addField('Merak Etme Yakında Destke Ekibimiz Burada')
    
    .setColor("RANDOM")
    return message.channel.sendEmbed(embed); } 
    let guild = message.guild 
    let reason = args.slice(1).join(' ');
    let user = message.mentions.users.first();
    let modlog = guild.channels.find('name', 'bot-güncellemeler');
    if (!modlog) return message.reply('`bot-güncellemeler` kanalını bulamıyorum.');

    guild.channels.get(modlog.id).send("@here **Bana Güncel Geldi**") 
    const embed = new Discord.RichEmbed()
    .setColor("RANDOM")
      .setTimestamp()
      .addField('❯ Yeni Komut','`r,taş-kağıt-makas`')
      .addField('❯ Teşekkürler', `<@${message.author.id}>`)
    return guild.channels.get(modlog.id).sendEmbed(embed);
  };

  exports.conf = {
    enabled: true,
    guildOnly: true,
    aliases: ['b-g'],
    permLevel: 4
  };
  
  exports.help = {
    name: 'b-g',
    description: 'Bot Güncelini Kanala atar',
    usage: 'b-g'
  };
