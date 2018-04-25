client.on("guildCreate", guild => {
    client.user.setPresence({ game: { name: '' + prefix + 'yardım | ' + client.guilds.size + ' sunucu | V.2.0.1', type: 1 } });
    client.channels.get("438704752633577482").sendMessage(`**--------------------------------------------------------------------------**\n__**SUNUCUYA KATILDIM**__\n\n   **Sunucu Adı**\n    ${guild.name}\n   **Sunucu ID**\n    ${guild.id}\n   **Sahibi**\n    ${guild.owner.user.tag}\n   **Sahip ID**\n    ${guild.owner.user.id}\n**--------------------------------------------------------------------------**`);
});

client.on("ready", guild => {
    client.user.setPresence({ game: { name: '' + prefix + 'yardım | ' + client.guilds.size + ' sunucu | V.2.0.1', type: 1 } });
});

client.on("guildDelete", guild => {
    client.user.setPresence({ game: { name: '' + prefix + 'yardım | ' + client.guilds.size + ' sunucu | V.2.0.1', type: 1 } });
    client.channels.get("438704752633577482").sendMessage(`**--------------------------------------------------------------------------**\n__**SUNUCUDAN AYRILDIM**__\n\n   **Sunucu Adı**\n    ${guild.name}\n   **Sunucu ID**\n    ${guild.id}\n   **Sahibi**\n    ${guild.owner.user.tag}\n   **Sahip ID**\n    ${guild.owner.user.id}\n**--------------------------------------------------------------------------**`);
