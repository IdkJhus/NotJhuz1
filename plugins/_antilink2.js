let handler = m => m

let linkRegex = /https:/i
handler.before = async function (m, { user, isBotAdmin, isAdmin }) {
  if ((m.isBaileys && m.fromMe) || m.fromMe || !m.isGroup) return true
  let chat = global.DATABASE.data.chats[m.chat]
  let isGroupLink = linkRegex.exec(m.text)

  if (chat.antiLink2 && isGroupLink) {
    await m.reply(`*「❗️ANTI LINKS❗️」*\n*¿Pero que haces pedaso de trolo?, ${await this.getName(m.sender)} Eso no se hace*`)
    await m.reply(`*Picá de acá salame qliao*`)
    if (isAdmin) return m.reply('*A pvtito no te puedo eliminar por que sos admin, te salvaste wachin*') 
    if (!isBotAdmin) return m.reply('*´Pedaso de gil, no te puedo eliminar por que no soy admin :,v*')
    let linkGC = ('https://chat.whatsapp.com/' + await this.groupInviteCode(m.chat))
    let isLinkThisGc = new RegExp(linkGC, 'i')
    let isgclink = isLinkThisGc.test(m.text)
    if (isgclink) return m.reply('*A perro tiraste el link de acá*')
    await this.groupRemove(m.chat, [m.sender])
  }
  return true
}

module.exports = handler 
