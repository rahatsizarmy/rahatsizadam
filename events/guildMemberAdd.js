module.exports = member => {
  const channel = member.guild.channels.find('name', 'giriş-çıkış');
  if (!channel) return;
  channel.send(`:outbox_tray: **|${member} sunucuya katıldı.`);
};
