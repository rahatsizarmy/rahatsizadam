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
client.on("guildCreate", guild => {
    client.user.setPresence({ game: { name: '' + prefix + 'yardım | ' + client.guilds.size + ' sunucu | V.2.0.1', type: 0 } });
    client.channels.get("438704752633577482").sendMessage(`**--------------------------------------------------------------------------**\n__**SUNUCUYA KATILDIM**__\n\n   **Sunucu Adı**\n    ${guild.name}\n   **Sunucu ID**\n    ${guild.id}\n   **Sahibi**\n    ${guild.owner.user.tag}\n   **Sahip ID**\n    ${guild.owner.user.id}\n**--------------------------------------------------------------------------**`);
});

client.on("ready", guild => {
    client.user.setPresence({ game: { name: '' + prefix + 'yardım | ' + client.guilds.size + ' sunucu | V.2.0.1', type: 3 } });
	
});
client.on("ready", guild => {
    client.user.setPresence({ game: { name: '' + prefix + 'yardım | ' + client.guilds.size + ' sunucu | V.2.0.0', type: 3 } });
	
});
client.on("ready", guild => {
    client.user.setPresence({ game: { name: '' + prefix + 'yardım | ' + client.guilds.size + ' sunucu | V.2.0.2', type: 3 } });
	
});
client.on("guildDelete", guild => {
    client.user.setPresence({ game: { name: '' + prefix + 'yardım | ' + client.guilds.size + ' sunucu | V.2.0.1', type: 0 } });
    client.channels.get("438704752633577482").sendMessage(`**--------------------------------------------------------------------------**\n__**SUNUCUDAN AYRILDIM**__\n\n   **Sunucu Adı**\n    ${guild.name}\n   **Sunucu ID**\n    ${guild.id}\n   **Sahibi**\n    ${guild.owner.user.tag}\n   **Sahip ID**\n    ${guild.owner.user.id}\n**--------------------------------------------------------------------------**`);
});

client.commands = new Discord.Collection();
client.aliases = new Discord.Collection();
fs.readdir('./komutlar/', (err, files) => {
  if (err) console.error(err);
  log(`${files.length} Komut Hazırlanacak.`);
  files.forEach(f => {
    let props = require(`./komutlar/${f}`);
    log(`Hazır Komut  : ${props.help.name}.`);
    client.commands.set(props.help.name, props);
    props.conf.aliases.forEach(alias => {
      client.aliases.set(alias, props.help.name);
    });
  });
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
client.on("message", message => {

  const kufur = ["amk", "aq","oç","şerefsiz","orruspu çocuğu",",sikik","sex","31 çekelim","aq","piç"];
  if (kufur.some(word => message.content.includes(word)) ) {
      message.reply("**Küfür Etme! Yasak** :rage:")
      message.delete()
  }
});
client.login(ayarlar.token);
