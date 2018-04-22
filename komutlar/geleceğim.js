const Discord = require('discord.js');
const client = new Discord.Client();
const Cleverbot = require('cleverbot-node');
const clbot = new Cleverbot;

exports.run = (client, message, args) => {

var sans = [":speech_balloon: | Valla birşey yok.",":speech_balloon: | Düşümmem gerek.",":speech_balloon: | Çok güzel bir aşk bekliyor.",":speech_balloon: | Arkana bak.",":speech_balloon: | Çok pis daya yiyeceksin",":speech_balloon: | Çok güzel bir İşinsanı olacaksın.",":speech_balloon: | Çok iyi bir `işcisin`."];
var sonuc = sans[Math.floor((Math.random() * sans.length))];
const embed = new Discord.RichEmbed()
.addField(`***___Geleceğin___***`, `${sonuc}`)
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
    name: 'geleceğim',
    description: 'Bot geleceğinizi söyler',
    usage: 'geleceğim'
  };