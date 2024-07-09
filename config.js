const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/c9c6dc21b3733e773d1d8.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ?,0757856882 process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ?,0795 010788 process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "254 795 010788";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "true"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "true"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "true";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "true"
global.disablegroup = process.env.DISABLE_GROUPS || "true", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "true" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "true"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_09_59_07_09_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTYwLFxuICAgICAgICA5MSxcbiAgICAgICAgODUsXG4gICAgICAgIDE2NixcbiAgICAgICAgMTY4LFxuICAgICAgICAyNDUsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMjMzLFxuICAgICAgICAyNDEsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMTI4LFxuICAgICAgICAzOSxcbiAgICAgICAgOTIsXG4gICAgICAgIDMwLFxuICAgICAgICAyMjgsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMjIxLFxuICAgICAgICAyMTMsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMjMsXG4gICAgICAgIDI2LFxuICAgICAgICAxMjAsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMjUxLFxuICAgICAgICAxNixcbiAgICAgICAgMjMxLFxuICAgICAgICAzNCxcbiAgICAgICAgNDMsXG4gICAgICAgIDIzLFxuICAgICAgICAxNTAsXG4gICAgICAgIDQ0LFxuICAgICAgICAxMDFcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjEzLFxuICAgICAgICAxMTAsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMzUsXG4gICAgICAgIDE2NyxcbiAgICAgICAgODIsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMjMzLFxuICAgICAgICA1NSxcbiAgICAgICAgNzAsXG4gICAgICAgIDg0LFxuICAgICAgICAxODMsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMTg0LFxuICAgICAgICAxNDgsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMTM5LFxuICAgICAgICAxOTAsXG4gICAgICAgIDIzLFxuICAgICAgICAxNjUsXG4gICAgICAgIDgzLFxuICAgICAgICAxMTAsXG4gICAgICAgIDksXG4gICAgICAgIDIyMSxcbiAgICAgICAgMjcsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMjQ3LFxuICAgICAgICAxODIsXG4gICAgICAgIDIxLFxuICAgICAgICAyMTAsXG4gICAgICAgIDcsXG4gICAgICAgIDgxXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA0MCxcbiAgICAgICAgMTMyLFxuICAgICAgICA4OSxcbiAgICAgICAgNTgsXG4gICAgICAgIDYzLFxuICAgICAgICAyNTEsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMjEzLFxuICAgICAgICAyMTIsXG4gICAgICAgIDE5MyxcbiAgICAgICAgNjMsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMjIyLFxuICAgICAgICAyNTUsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMTA0LFxuICAgICAgICAzNyxcbiAgICAgICAgMTMwLFxuICAgICAgICA1OSxcbiAgICAgICAgMjE3LFxuICAgICAgICAxMTMsXG4gICAgICAgIDIzMSxcbiAgICAgICAgODcsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMSxcbiAgICAgICAgMzUsXG4gICAgICAgIDIzOSxcbiAgICAgICAgNDIsXG4gICAgICAgIDI1MCxcbiAgICAgICAgNzksXG4gICAgICAgIDE1MCxcbiAgICAgICAgNjVcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjE3LFxuICAgICAgICAxNzksXG4gICAgICAgIDIxLFxuICAgICAgICA1MSxcbiAgICAgICAgMTc2LFxuICAgICAgICAxMSxcbiAgICAgICAgMTMzLFxuICAgICAgICAzOSxcbiAgICAgICAgMTY3LFxuICAgICAgICAxOCxcbiAgICAgICAgMTgyLFxuICAgICAgICAyMTQsXG4gICAgICAgIDQ1LFxuICAgICAgICA4OCxcbiAgICAgICAgMTEsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMTQ5LFxuICAgICAgICA0MSxcbiAgICAgICAgMTM5LFxuICAgICAgICAwLFxuICAgICAgICAxOCxcbiAgICAgICAgNDksXG4gICAgICAgIDgwLFxuICAgICAgICA0MCxcbiAgICAgICAgMjA4LFxuICAgICAgICAxMTIsXG4gICAgICAgIDE2NyxcbiAgICAgICAgNzksXG4gICAgICAgIDE0NixcbiAgICAgICAgNzcsXG4gICAgICAgIDQ3LFxuICAgICAgICA3NFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNjQsXG4gICAgICAgIDcxLFxuICAgICAgICAyMTIsXG4gICAgICAgIDMsXG4gICAgICAgIDEzMixcbiAgICAgICAgMTU3LFxuICAgICAgICA1MixcbiAgICAgICAgMjUyLFxuICAgICAgICAxOTAsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMTcxLFxuICAgICAgICAxMzgsXG4gICAgICAgIDEyOCxcbiAgICAgICAgNDAsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMTc4LFxuICAgICAgICAxOTUsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMTE1LFxuICAgICAgICAxNzQsXG4gICAgICAgIDEzLFxuICAgICAgICA5MSxcbiAgICAgICAgMTY2LFxuICAgICAgICAxMDYsXG4gICAgICAgIDU4LFxuICAgICAgICAxMjgsXG4gICAgICAgIDI1MixcbiAgICAgICAgMTQyLFxuICAgICAgICAyNTIsXG4gICAgICAgIDExOCxcbiAgICAgICAgNzIsXG4gICAgICAgIDgwXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE0OSxcbiAgICAgICAgMTIzLFxuICAgICAgICAzNCxcbiAgICAgICAgMTc0LFxuICAgICAgICAzLFxuICAgICAgICAyNDYsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMjUwLFxuICAgICAgICAyMjIsXG4gICAgICAgIDExNyxcbiAgICAgICAgNDEsXG4gICAgICAgIDkxLFxuICAgICAgICA5OSxcbiAgICAgICAgMTgyLFxuICAgICAgICA1MixcbiAgICAgICAgMTI3LFxuICAgICAgICAxOCxcbiAgICAgICAgMTExLFxuICAgICAgICAxLFxuICAgICAgICAxNDQsXG4gICAgICAgIDIxNixcbiAgICAgICAgMjA5LFxuICAgICAgICAxNjgsXG4gICAgICAgIDg4LFxuICAgICAgICA2NyxcbiAgICAgICAgNjAsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMjA1LFxuICAgICAgICA5MSxcbiAgICAgICAgMTE5LFxuICAgICAgICAxNTIsXG4gICAgICAgIDEwN1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxOTIsXG4gICAgICAgICAgMTM1LFxuICAgICAgICAgIDIwNSxcbiAgICAgICAgICAyMTUsXG4gICAgICAgICAgMzAsXG4gICAgICAgICAgOSxcbiAgICAgICAgICAyLFxuICAgICAgICAgIDE3MCxcbiAgICAgICAgICA5LFxuICAgICAgICAgIDkwLFxuICAgICAgICAgIDI4LFxuICAgICAgICAgIDIxNixcbiAgICAgICAgICAxMjgsXG4gICAgICAgICAgMzEsXG4gICAgICAgICAgMjAsXG4gICAgICAgICAgMjUxLFxuICAgICAgICAgIDgzLFxuICAgICAgICAgIDEzNyxcbiAgICAgICAgICAxMjEsXG4gICAgICAgICAgMTUyLFxuICAgICAgICAgIDg0LFxuICAgICAgICAgIDIzLFxuICAgICAgICAgIDQ4LFxuICAgICAgICAgIDEyMCxcbiAgICAgICAgICAyMDMsXG4gICAgICAgICAgMjgsXG4gICAgICAgICAgMjAxLFxuICAgICAgICAgIDEzOSxcbiAgICAgICAgICAxMDksXG4gICAgICAgICAgMjE2LFxuICAgICAgICAgIDE2MCxcbiAgICAgICAgICAxMDlcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTQwLFxuICAgICAgICAgIDE0MSxcbiAgICAgICAgICAyMDQsXG4gICAgICAgICAgMzcsXG4gICAgICAgICAgNzksXG4gICAgICAgICAgMTQ2LFxuICAgICAgICAgIDc1LFxuICAgICAgICAgIDE2NSxcbiAgICAgICAgICAyLFxuICAgICAgICAgIDIxNCxcbiAgICAgICAgICAxMDAsXG4gICAgICAgICAgMjAzLFxuICAgICAgICAgIDcyLFxuICAgICAgICAgIDYzLFxuICAgICAgICAgIDg1LFxuICAgICAgICAgIDMxLFxuICAgICAgICAgIDExOSxcbiAgICAgICAgICAxOTYsXG4gICAgICAgICAgODEsXG4gICAgICAgICAgMTIsXG4gICAgICAgICAgMTU2LFxuICAgICAgICAgIDM4LFxuICAgICAgICAgIDIwMSxcbiAgICAgICAgICA2MCxcbiAgICAgICAgICAxMDgsXG4gICAgICAgICAgMTk0LFxuICAgICAgICAgIDIwNixcbiAgICAgICAgICAxOTQsXG4gICAgICAgICAgMjIyLFxuICAgICAgICAgIDM4LFxuICAgICAgICAgIDIyMCxcbiAgICAgICAgICA3NVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIzLFxuICAgICAgICAyMTQsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMTg4LFxuICAgICAgICAxMDEsXG4gICAgICAgIDIzLFxuICAgICAgICA3MixcbiAgICAgICAgNDMsXG4gICAgICAgIDI1MSxcbiAgICAgICAgNjUsXG4gICAgICAgIDEyLFxuICAgICAgICA0MCxcbiAgICAgICAgMjQ3LFxuICAgICAgICAxOSxcbiAgICAgICAgMjgsXG4gICAgICAgIDExOSxcbiAgICAgICAgMTEzLFxuICAgICAgICAxMTcsXG4gICAgICAgIDMxLFxuICAgICAgICA2LFxuICAgICAgICAxNzcsXG4gICAgICAgIDE1NCxcbiAgICAgICAgOTUsXG4gICAgICAgIDkxLFxuICAgICAgICAxODQsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMjIsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMTA5LFxuICAgICAgICAyNTAsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMTcwLFxuICAgICAgICAxNTMsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMTY2LFxuICAgICAgICAyMTYsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMjYsXG4gICAgICAgIDE4LFxuICAgICAgICAxNzIsXG4gICAgICAgIDc5LFxuICAgICAgICA4MixcbiAgICAgICAgMjQ0LFxuICAgICAgICA4NCxcbiAgICAgICAgNzIsXG4gICAgICAgIDYzLFxuICAgICAgICAyNyxcbiAgICAgICAgMTM2LFxuICAgICAgICAzOCxcbiAgICAgICAgNjYsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMTI2LFxuICAgICAgICA3NCxcbiAgICAgICAgMTAsXG4gICAgICAgIDgwLFxuICAgICAgICAxOTUsXG4gICAgICAgIDEyNixcbiAgICAgICAgMTY1LFxuICAgICAgICAxMCxcbiAgICAgICAgMTY3LFxuICAgICAgICA0NCxcbiAgICAgICAgMjE4LFxuICAgICAgICA0MCxcbiAgICAgICAgMTNcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDUyLFxuICBcImFkdlNlY3JldEtleVwiOiBcIlBjK1lTRXFQcWt4c3d0K1UzenFlRlZla0VBMmRVZzNRL3RkdzNZK3Q3QUE9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiMjU0NzE5NjQ2ODM3QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCI3RjlCOUI3MkMzM0E1MjBGQ0E2NEFCRDQ0OTc2OTVBNVwiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MjA1MTkxNjJcbiAgICB9LFxuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCIyNTQ3MTk2NDY4MzdAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIkMwRTIxOTc4MjU5QjZFMzkyMjQ1MzBBRUQzNkU1RDQxXCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTcyMDUxOTE2MlxuICAgIH1cbiAgXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDEsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJKeGVPREJhOFNKMlU0RW1YZmF3VWV3XCIsXG4gIFwicGhvbmVJZFwiOiBcIjIwMTg5ZjRjLTIxYjctNGJhYy05MTgzLWIzNTIzODQwNzYxZlwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxODUsXG4gICAgICAxOCxcbiAgICAgIDUyLFxuICAgICAgMzAsXG4gICAgICAyMDMsXG4gICAgICAyNCxcbiAgICAgIDIyMyxcbiAgICAgIDE5MCxcbiAgICAgIDE5NyxcbiAgICAgIDEwOCxcbiAgICAgIDMzLFxuICAgICAgMTYzLFxuICAgICAgMTQ4LFxuICAgICAgMjMzLFxuICAgICAgNjAsXG4gICAgICAxOTgsXG4gICAgICAxMDUsXG4gICAgICAyMDYsXG4gICAgICAyMCxcbiAgICAgIDQxXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDEyNSxcbiAgICAgIDE4NixcbiAgICAgIDEyNyxcbiAgICAgIDEzMCxcbiAgICAgIDYxLFxuICAgICAgMzksXG4gICAgICA4LFxuICAgICAgMTAzLFxuICAgICAgMjYsXG4gICAgICAyMzAsXG4gICAgICAyNDIsXG4gICAgICAyNDUsXG4gICAgICA2LFxuICAgICAgMjE0LFxuICAgICAgNTcsXG4gICAgICAxMzcsXG4gICAgICA0MyxcbiAgICAgIDEwMSxcbiAgICAgIDE1MCxcbiAgICAgIDEwNVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJIM0pXOE1BUlwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjU0NzE5NjQ2ODM3OjgxQHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCIxNDAyMzU0NDY5ODA2MTI6ODFAbGlkXCIsXG4gICAgXCJuYW1lXCI6IFwiSkFDRUxPV1wiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ0ovZzZNd0VFUEtUdExRR0dBRWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiaXAxaHB3TnZvaGQ1SE9XQmlCUzVyeFJwNHd2b0l0aW5TNHIvWjlwakxEaz1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJvd0pMUlJESFAybWFQdXIvK2ZjZmJMc3BlSmlHMWRlRS8yQjd2dDQ5YVZiNWNTTlFoUkV5elQvWUpzVHo3VVNSa1JFd1QyYXdQS1pFODJYdzZGRElEUT09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJkQXd3MUJROEtOaHQ1dWRkd0xScWlXZWlhRk9yZ0pqdkNiaS9xcUo5b0tSK09UOFBiZE1IWjZQaWxibVUvTFpxSDloVG50bVpWaE9ja3pidDNwRUtDUT09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyNTQ3MTk2NDY4Mzc6ODFAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxMzgsXG4gICAgICAgICAgMTU3LFxuICAgICAgICAgIDk3LFxuICAgICAgICAgIDE2NyxcbiAgICAgICAgICAzLFxuICAgICAgICAgIDExMSxcbiAgICAgICAgICAxNjIsXG4gICAgICAgICAgMjMsXG4gICAgICAgICAgMTIxLFxuICAgICAgICAgIDI4LFxuICAgICAgICAgIDIyOSxcbiAgICAgICAgICAxMjksXG4gICAgICAgICAgMTM2LFxuICAgICAgICAgIDIwLFxuICAgICAgICAgIDE4NSxcbiAgICAgICAgICAxNzUsXG4gICAgICAgICAgMjAsXG4gICAgICAgICAgMTA1LFxuICAgICAgICAgIDIyNyxcbiAgICAgICAgICAxMSxcbiAgICAgICAgICAyMzIsXG4gICAgICAgICAgMzQsXG4gICAgICAgICAgMjE2LFxuICAgICAgICAgIDE2NyxcbiAgICAgICAgICA3NSxcbiAgICAgICAgICAxMzgsXG4gICAgICAgICAgMjU1LFxuICAgICAgICAgIDEwMyxcbiAgICAgICAgICAyMTgsXG4gICAgICAgICAgOTksXG4gICAgICAgICAgNDQsXG4gICAgICAgICAgNTdcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcyMDUxOTE1NyxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUxrWFwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBTGtYLmpzb24iOiAie1wia2V5RGF0YVwiOlwiMllGVk9kdlZneUpubUwvSUJpQ0lQRlFwcEpMM2hvQSsraWN0bERMOVlGZz1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoxMjM0ODQxNjI5LFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMF19LFwidGltZXN0YW1wXCI6XCIxNzIwNDcxMDExMzA4XCJ9Igp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "", so
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "wllgavi",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
