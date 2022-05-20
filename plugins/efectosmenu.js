let fs = require('fs')
let fetch = require('node-fetch')
let moment = require('moment-timezone')
let path = require('path')
let util = require('util')
let handler = async (m, { conn, usedPrefix }) => {
let pp = './Menu2.jpg'
let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
let username = conn.getName(who)
//let vn = './media/mariana.mp3'
let menu =`
*Que onda, ${username}*

»𝐀𝐪𝐮𝐢́ 𝐞𝐧𝐜𝐨𝐧𝐭𝐫𝐚𝐫𝐚́𝐬 𝐥𝐨𝐬 𝐝𝐢𝐬𝐭𝐢𝐧𝐭𝐨𝐬 𝐜𝐨𝐦𝐚𝐧𝐝𝐨𝐬 𝐝𝐢𝐬𝐩𝐨𝐧𝐢𝐛𝐥𝐞𝐬«
╔════════════════╗
🎤.𝐛𝐚𝐬𝐬
🎤.𝐝𝐞𝐞𝐩
🎤.𝐞𝐚𝐫𝐫𝐚𝐩𝐞
🎤.𝐟𝐚𝐬𝐭
🎤.𝐟𝐚𝐭
🎤.𝐧𝐢𝐠𝐡𝐭𝐜𝐨𝐫𝐞
🎤.𝐫𝐞𝐯𝐞𝐫𝐬𝐞
🎤.𝐫𝐨𝐛𝐨𝐭
🎤.𝐬𝐥𝐨𝐰
🎤.𝐬𝐦𝐨𝐨𝐭𝐡
🎤.𝐯𝐢𝐛𝐫𝐚𝐜𝐢𝐨𝐧 *𝐜𝐚𝐧𝐭𝐢𝐝𝐚𝐝*
╚════════════════╝
»𝐂𝐎𝐌𝐀𝐍𝐃𝐎𝐒 𝐃𝐄 𝐄𝐅𝐄𝐂𝐓𝐎𝐒 𝐃𝐄 𝐀𝐔𝐃𝐈𝐎 𝐏𝐀𝐑𝐀 𝐔𝐒𝐎 𝐆𝐄𝐍𝐄𝐑𝐀𝐋. 𝐏𝐎𝐑 𝐅𝐀𝐕𝐎𝐑 𝐄𝐕𝐈𝐓𝐀𝐑 𝐄𝐋 𝐒𝐏𝐀𝐌«
`.trim()
let mentionedJid = [who]
conn.send3ButtonImg(m.chat, pp, menu, '©𝐉𝐡𝐮𝐬𝐳ᙆ  ᷦ×͜×', '𝕄𝔼ℕ𝕌 ℙℝ𝕀ℕℂ𝕀ℙ𝔸𝕃 ', `#menu`, '𝕐𝕆𝕌𝕋𝕌𝔹𝔼', `#ytowner`, '𝕀ℕ𝕊𝕋𝔸𝔾ℝ𝔸𝕄', `#igowner`, m, false, { contextInfo: { mentionedJid }})   
//await await await await await await conn.sendFile(m.chat, vn, 'mariana.mp3', null, m, true, {
//type: 'audioMessage', 
//ptt: true 
//})
}
handler.command = /^(efectosmenu|menuefectos|efectosm|em)$/i
handler.fail = null
module.exports = handler
