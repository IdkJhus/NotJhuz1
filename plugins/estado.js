let fetch = require('node-fetch')
let handler = async (m, { conn, command, text, usedPrefix }) => {
  await conn.send3Button(m.chat, `
*ℚ𝕦𝕖 𝕠𝕟𝕕𝕒 𝕡𝕒𝕡𝕦*

*ミEstado del Bot彡*
*=> Bot activo ✔️*
*=> Bot uso público ✔️*
`.trim(), '©𝐉𝐡𝐮𝐬𝐳ᙆ  ᷦ×͜×', '𝕄𝔼ℕ𝕌', `${usedPrefix}menu`, '𝕐𝕆𝕌𝕋𝕌𝔹𝔼', `${usedPrefix}ytowner`, '𝕀ℕ𝕊𝕋𝔸𝔾ℝ𝔸𝕄', `${usedPrefix}igofc`)
}
handler.command = /^(estado|status|estate|state|stado|stats)$/i

handler.exp = 0

module.exports = handler
