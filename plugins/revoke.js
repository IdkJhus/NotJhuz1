let handler = async (m, { conn, args, usedPrefix }) => {
  let res = await conn.revokeInvite(m.chat)
  //m.reply('Link Group Berhasil Direset!\n\nLink Baru:\nhttps://chat.whatsapp.com/' + res.code)
m.reply('Enlace de grupo restablecido con éxito.')
}
handler.help = ['resetlink']
handler.tags = ['group']
handler.command = /^re(set|link)(invite|link)?$/i
handler.group = true

handler.admin = true
handler.botAdmin = true

module.exports = handler
