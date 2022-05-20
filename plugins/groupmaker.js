let handler  = async (m, { conn, text }) => {
   let [namagc, partici] = text.split('|')
   let name = conn.getName(conn.user.jid)
   const petik = '```'
   if (!namagc) throw 'ERROR. Por favor, indique el nombre del grupo después del comando. Ejemplo: .creategp Hora de Aventura'
   if (!partici) partici = `@${m.sender.split('@')[0]}`
   if (!namagc) namagc = text
   ha = await conn.groupCreate(namagc, conn.parseMention(partici))
   m.reply(`${petik}El grupo a sido creado exitosamente @${m.sender.replace(/@.+/, '')}${petik}\n\n*Link GC : https://chat.whatsapp.com/${await conn.groupInviteCode(ha.gid)}*`)
  }
handler.help = ['creargp']
handler.tags = ['owner']
handler.command = /^(creargp)$/i

handler.premium = true

module.exports = handler
