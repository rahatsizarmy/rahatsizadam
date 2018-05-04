const Discord = require('discord.js');

exports.run = (client, message, args) => {
    let mesaj = args.slice(0).join(' ');
    if (mesaj.length < 1) return message.reply('Yazmam İçin Birşey Yazmalısın!');
    message.channel.send("@here")
const embed = new Discord.RichEmbed()
.setColor('RANDOM')
    .setFooter(message.author.username, message.author.avatarURL)
.setDescription(mesaj)
.setAuthor(message.guild.name,message.guild.iconURL)
message.channel.send(embed).then(msg => {

  msg.react('✔').then(r => {
    msg.react('❌')
  })
})
};


exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ["anket","oylama"],
    permLevel: 2
  };
  
  exports.help = {
    name: 'anketaç',
    description: 'Anket Açar.',
    usage: 'anket <anketiniz>'
  };    
