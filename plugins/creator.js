function handler(m) {
  this.sendContact(m.chat, '50257681618', '๐๐ก๐ฎ๐ฌ๐ณแ  แทฆรอร', m)
  this.sendContact(m.chat, '50230118401', '๐๐ค๐ฉ๐๐๐ช๐ฏแ  แทฆรอร', m)
  }
handler.help = ['contacto']
handler.tags = ['info']
 
handler.command = /^(contacto|owner|creator|creador|propietario|dueรฑo)$/i

module.exports = handler
