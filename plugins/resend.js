let { MessageType } = require('@adiwajshing/baileys')

let handler = async (m, { conn, text, participants }) => {
  if (!m.quoted) throw 'Responde el mensaje que deseas reenviar'
  let q = m.quoted 
  let c = m.quoted 
  let msg = conn.cMod(
    m.chat,
    conn.prepareMessageFromContent(
      m.chat,
      { [q.mtype]: c.toJSON() },
      {
        quoted: m
      }
    ),
    'Mensaje reenviado exitósamente'
  )
  await conn.relayWAMessage(msg)
}
handler.help = ['resend']
handler.tags = ['group']
handler.command = /^(resend)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = true
handler.private = false
handler.botAdmin = false

handler.fail = null
handler.limit = true

module.exports = handler
