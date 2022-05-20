function handler(m) {
  this.sendContact(m.chat, '50257681618', '𝐉𝐡𝐮𝐬𝐳ᙆ  ᷦ×͜× - CREADOR - OFICIAL', m)
  this.sendContact(m.chat, '50230118401', '𝙉𝙤𝙩𝙅𝙝𝙪𝙯ᙆ  ᷦ×͜× - CREADOR - BOT', m)
  }
handler.help = ['contacto']
handler.tags = ['info']
 
handler.command = /^(contacto|owner|creator|creador|propietario|dueño)$/i

module.exports = handler
