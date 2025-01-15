/*
_  ______   _____ _____ _____ _   _
| |/ / ___| |_   _| ____/___ | | | |
| ' / |  _    | | |  _|| |   | |_| |
| . \ |_| |   | | | |__| |___|  _  |
|_|\_\____|   |_| |_____\____|_| |_|

ANYWAY, YOU MUST GIVE CREDIT TO MY CODE WHEN COPY IT
CONTACT ME HERE +237656520674
YT: KermHackTools
Github: Kgtech-cmr
*/








const config = require('../config')
const {cmd , commands} = require('../command')
cmd({
    pattern: "creator",
    alias: "dev",
    react: "☄️",
    desc: "get owner dec",
    category: "main",
    filename: __filename
},
async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
let about = `*╭┈───────────────•*

*👋 HOAYO ${pushname}*
   *G͆O͆K͆U͆ M͆D͆ D͆E͆V͆🪐*

*╰┈───────────────•*
*╭┈───────────────•*
*│  ◦* *ᴄʀᴇᴀᴛor: IGWE*
*│  ◦* *ʀᴇᴀʟ ɴᴀᴍᴇ:David*
*│  ◦* *ᴀɢᴇ: 17*
*│  ◦* *ᴄɪᴛʏ:Gabon*
*│  ◦* *sɪᴍᴘʟᴇ ᴡʜᴀᴛsᴀᴘᴘ ᴅᴇᴠᴇʟᴘᴏʀ*
*╰┈───────────────•*

> © ᴘᴏᴡᴇʀᴇᴅ ʙʏ igwe
*•────────────•⟢*
`

await conn.sendMessage(from,{image:{url:config.ALIVE_IMG},caption:about},{quoted:mek})

}catch(e){
console.log(e)
reply(`${e}`)
}
})
