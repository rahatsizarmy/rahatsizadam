const Discord = require('discord.js');
const client = new Discord.Client();
const ayarlar = require('./ayarlar.json');
const chalk = require('chalk');
const fs = require('fs');
const moment = require('moment');
require('./util/eventLoader')(client);

var prefix = ayarlar.prefix;

const log = message => {
  console.log(`[${moment().format('YYYY-MM-DD HH:mm:ss')}] ${message}`);
};

client.commands = new Discord.Collection();
client.aliases = new Discord.Collection();
fs.readdir('./komutlar/', (err, files) => {
  if (err) console.error(err);
  log(`${files.length} komut yüklenecek.`);
  files.forEach(f => {
    let props = require(`./komutlar/${f}`);
    log(`Yüklenen komut: ${props.help.name}.`);
    client.commands.set(props.help.name, props);
    props.conf.aliases.forEach(alias => {
      client.aliases.set(alias, props.help.name);
    });
  });
});
 client.on("message", message => {
    const dmchannel = client.channels.find("id", "443761073443831809");
  if (message.channel.type === "dm") {
   const embed = new Discord.RichEmbed()
      if (message.author.id === client.user.id) return;
      dmchannel.sendMessage("", {embed: {
              color: 3447003,
              title: `Bana dm mesaj atıldı.`,
                description: `Dm'yi atan: ${message.author.tag}\n\nDm mesaj: ${message.content}`
              }})
             }})
client.on('guildCreate', guild => {

  const embed = new Discord.RichEmbed()
  .setColor('RANDOM')
  .setTitle('Sunucuya katıldım;')
  .setDescription(`${guild.name} adlı sunucuya eklendim \n[${guild.memberCount} üye]!\n[${guild.id}]\nSunucu sahibi:${guild.owner} (${guild.owner.id})`)
  .setFooter('Rahatsız Adam', client.user.avatarURL)
  .setTimestamp()
  client.channels.get('443761073443831809').send(embed);
});

client.on('guildDelete', guild => {
  const embed = new Discord.RichEmbed()
  .setColor('RANDOM')
  .setTitle('Sunucudan atıldım;')
  .setDescription(`${guild.name} adlı sunucudan atıldım \n[${guild.memberCount} üye]!\n[${guild.id}]`)
  .setFooter('Rahatsız Adam', client.user.avatarURL)
  .setTimestamp()
  client.channels.get('443761073443831809').send(embed);
});
client.on('guildMemberAdd', member => {
  const hg = new Discord.RichEmbed()
  .setThumbnail(client.user.avatarURL)
  .setDescription(`${member.guild.name} Sunucuya hoşgeldin!\nBu sunucuda **Rahatsız Adam** sistemi kullanılmakta.\n\n\n__Linkler:__\n[Sende Beni Eklemek İçin Tıkla](https://discordapp.com/oauth2/authorize?client_id=434771960849760258&scope=bot&permissions=2146958591)\n[Sende Destek Sunucumuza Gelmek İçin Tıkla](https://discord.gg/tn4nPxh)`)
  .setFooter(`© Rahatsız Adam`)
  .setColor('RANDOM')
  member.send(hg);
});

client.on('guildMemberRemove', member => {
  const bb = new Discord.RichEmbed()
  .setAuthor(client.user.username, client.user.avatarURL)
  .setThumbnail(client.user.avatarURL)
  .setDescription(`${member.guild.name} sunucusundan ayrıldın.Seni özliyeceğiz.\nBu sunucuda **Rahatsız Adam** sistemi kullanılmaktadır.\n\n\n__Linkler:__\n[Sende Beni Eklemek İçin Tıkla](https://discordapp.com/oauth2/authorize?client_id=434771960849760258&scope=bot&permissions=2146958591)\n[Sende Destek Sunucumuza Gelmek İçin Tıkla](https://discord.gg/tn4nPxh)`)
  .setFooter(`© Rahatsız Adam`)
  .setTimestamp()
  .setColor('RANDOM')
  member.send(bb);
});
client.reload = command => {
  return new Promise((resolve, reject) => {
    try {
      delete require.cache[require.resolve(`./komutlar/${command}`)];
      let cmd = require(`./komutlar/${command}`);
      client.commands.delete(command);
      client.aliases.forEach((cmd, alias) => {
        if (cmd === command) client.aliases.delete(alias);
      });
      client.commands.set(command, cmd);
      cmd.conf.aliases.forEach(alias => {
        client.aliases.set(alias, cmd.help.name);
      });
      resolve();
    } catch (e){
      reject(e);
    }
  });
};

client.load = command => {
  return new Promise((resolve, reject) => {
    try {
      let cmd = require(`./komutlar/${command}`);
      client.commands.set(command, cmd);
      cmd.conf.aliases.forEach(alias => {
        client.aliases.set(alias, cmd.help.name);
      });
      resolve();
    } catch (e){
      reject(e);
    }
  });
};

client.unload = command => {
  return new Promise((resolve, reject) => {
    try {
      delete require.cache[require.resolve(`./komutlar/${command}`)];
      let cmd = require(`./komutlar/${command}`);
      client.commands.delete(command);
      client.aliases.forEach((cmd, alias) => {
        if (cmd === command) client.aliases.delete(alias);
      });
      resolve();
    } catch (e){
      reject(e);
    }
  });
};
client.on('message', msg => {
  if (!msg.content.startsWith(prefix)) {
    console.log(`[${msg.author.tag}]  : ${msg.content}`);
    return;
  }
});
client.on('message', msg => {
  if (msg.content.toLowerCase() === 'sa') {
    setTimeout(() => {
	msg.react('🇦');
	},500);
	setTimeout(() => {
	msg.react('🇸');
	},1000);

	}
	});
client.elevation = message => {
  if(!message.guild) {
	return; }
  let permlvl = 0;
  if (message.member.hasPermission("BAN_MEMBERS")) permlvl = 2;
  if (message.member.hasPermission("ADMINISTRATOR")) permlvl = 3;
  if (message.author.id === ayarlar.sahip) permlvl = 4;
  return permlvl;
};

var regToken = /[\w\d]{24}\.[\w\d]{6}\.[\w\d-_]{27}/g;
// client.on('debug', e => {
//   console.log(chalk.bgBlue.green(e.replace(regToken, 'that was redacted')));
// });

client.on('warn', e => {
  console.log(chalk.bgYellow(e.replace(regToken, 'that was redacted')));
});

client.on('error', e => {
  console.log(chalk.bgRed(e.replace(regToken, 'that was redacted')));
});

client.login(ayarlar.token);
