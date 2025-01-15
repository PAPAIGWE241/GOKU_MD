/*created by Kgtech 🕵
contact dev1 237656520674 ♻️
contact dev2 237650564445 ♻️
© Copy coder alert ⚠
*/






const config = require('../config')
const {cmd , commands} = require('../command')
cmd({
    pattern: "script",
    alias: ["sc","repo","info"],
    desc: "bot repo",
    react: "🫧",
    category: "main",
    filename: __filename
},
async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
let repo =`
🌟𝐇𝐢 👋 𝐈’𝐦 𝐠𝐨𝐤𝐮 𝐲𝐨𝐮 𝐭𝐲𝐩𝐞 .𝐫𝐞𝐩𝐨 ?? 𝐋𝐞𝐭 𝐦𝐞 𝐬𝐡𝐨𝐰 𝐲𝐨𝐮 𝐦𝐲 𝐫𝐞𝐩𝐨 ⭐️
*╭──────────────●*
> *BOT OWNER:*
*|* *IGWE*

> *GOKU_MD REPO:*
*|* *https://github.com/DADDY-IGWE/GOKU_MD*

> *SUPPORT CHANNEL:*
*|* *https://whatsapp.com/channel/0029Vb2VplFFCCoQsZKtVV24*
*╰──────────────●*

`
await conn.sendMessage(from, { text: repo ,
  contextInfo: {
    mentionedJid: [ '' ],
    groupMentions: [],
    forwardingScore: 999,
    isForwarded: false,
    forwardedNewsletterMessageInfo: {
      newsletterJid: '120363321386877609@newsletter',
      newsletterName: "goku script",
      serverMessageId: 999
    },
externalAdReply: { 
title: 'goku_md',
body: `${pushname}`,
mediaType: 1,
sourceUrl: "https://github.com/DADDY-IGWE/GOKU_MD" ,
thumbnailUrl: "https://files.catbox.moe/1qgfiv.jpg" ,
renderLargerThumbnail: true,
showAdAttribution: true
}
}}, { quoted: mek})}catch(e){
console.log(e)
reply(`${e}`)
}
});
