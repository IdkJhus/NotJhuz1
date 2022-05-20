let handler  = async (m, { conn, usedPrefix: _p }) => {
    let info = `
    *Hola 👋🏻, aquí encontrarás el Instagram oficial de mi owner*
*https://www.instagram.com/idk_jhuz*
    `.trim() 
    
    conn.fakeReply(m.chat, info, '0@s.whatsapp.net', '*🔥 𝐉𝐡𝐮𝐬𝐳ᙆ  ᷦ×͜× 🔥*', 'status@broadcast')
    }
    handler.command = /^(ig|igofc|instagramofc)$/i
    
    module.exports = handler
