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
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ?,254 795 010788 process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "254 795 010788";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "true";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_08_15_07_06_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTg0LFxuICAgICAgICAzMCxcbiAgICAgICAgMjQwLFxuICAgICAgICA5MyxcbiAgICAgICAgMjQ3LFxuICAgICAgICAxMDcsXG4gICAgICAgIDY5LFxuICAgICAgICA1MyxcbiAgICAgICAgMTA2LFxuICAgICAgICAyNDQsXG4gICAgICAgIDM2LFxuICAgICAgICAxODksXG4gICAgICAgIDI0NSxcbiAgICAgICAgMTU5LFxuICAgICAgICA4NyxcbiAgICAgICAgOTYsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMTEzLFxuICAgICAgICAyMzIsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMjEzLFxuICAgICAgICAyNDgsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMjMxLFxuICAgICAgICAyOCxcbiAgICAgICAgODIsXG4gICAgICAgIDIyLFxuICAgICAgICA5MyxcbiAgICAgICAgMjIzLFxuICAgICAgICAxNTUsXG4gICAgICAgIDExOCxcbiAgICAgICAgMTIwXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEyLFxuICAgICAgICA0OCxcbiAgICAgICAgMjMyLFxuICAgICAgICAyMjIsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMTY2LFxuICAgICAgICAxNjgsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMjIsXG4gICAgICAgIDAsXG4gICAgICAgIDE3OCxcbiAgICAgICAgNTIsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMTIsXG4gICAgICAgIDI1LFxuICAgICAgICAyMDQsXG4gICAgICAgIDE1OSxcbiAgICAgICAgNDAsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMTk3LFxuICAgICAgICAyMjMsXG4gICAgICAgIDcwLFxuICAgICAgICAyNDcsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMTk4LFxuICAgICAgICAzMSxcbiAgICAgICAgMjcsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMTY0LFxuICAgICAgICAyMTUsXG4gICAgICAgIDE0LFxuICAgICAgICAxMTBcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIwMCxcbiAgICAgICAgMjA4LFxuICAgICAgICAxNDcsXG4gICAgICAgIDE4MixcbiAgICAgICAgMjQ2LFxuICAgICAgICAzNyxcbiAgICAgICAgOTUsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMTIyLFxuICAgICAgICA4MixcbiAgICAgICAgMTI4LFxuICAgICAgICAxMjUsXG4gICAgICAgIDEwOCxcbiAgICAgICAgNjcsXG4gICAgICAgIDExOSxcbiAgICAgICAgNzIsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMTY3LFxuICAgICAgICAxOTgsXG4gICAgICAgIDQsXG4gICAgICAgIDE1LFxuICAgICAgICAxOTEsXG4gICAgICAgIDE5MixcbiAgICAgICAgMTkwLFxuICAgICAgICA2OSxcbiAgICAgICAgMjE0LFxuICAgICAgICA5OCxcbiAgICAgICAgMjAsXG4gICAgICAgIDUyLFxuICAgICAgICAyMjUsXG4gICAgICAgIDE3OSxcbiAgICAgICAgOTdcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNzEsXG4gICAgICAgIDEzMCxcbiAgICAgICAgNDgsXG4gICAgICAgIDUwLFxuICAgICAgICAxMixcbiAgICAgICAgMTc3LFxuICAgICAgICAxNjYsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMjUwLFxuICAgICAgICAyNDcsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMTY1LFxuICAgICAgICAxMDMsXG4gICAgICAgIDE2MCxcbiAgICAgICAgNixcbiAgICAgICAgMTQwLFxuICAgICAgICAxMTcsXG4gICAgICAgIDg1LFxuICAgICAgICA4MSxcbiAgICAgICAgMTMsXG4gICAgICAgIDM0LFxuICAgICAgICAyMDIsXG4gICAgICAgIDIyNixcbiAgICAgICAgNDIsXG4gICAgICAgIDY4LFxuICAgICAgICAyNDAsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMTYsXG4gICAgICAgIDEsXG4gICAgICAgIDI0MSxcbiAgICAgICAgOTAsXG4gICAgICAgIDc0XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMjAsXG4gICAgICAgIDk3LFxuICAgICAgICA4NCxcbiAgICAgICAgNDQsXG4gICAgICAgIDM2LFxuICAgICAgICAxNjksXG4gICAgICAgIDEyOCxcbiAgICAgICAgNzAsXG4gICAgICAgIDksXG4gICAgICAgIDIyLFxuICAgICAgICA0OCxcbiAgICAgICAgMTczLFxuICAgICAgICAxNjgsXG4gICAgICAgIDg4LFxuICAgICAgICA4MSxcbiAgICAgICAgMjQyLFxuICAgICAgICAyNTEsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMjYsXG4gICAgICAgIDk4LFxuICAgICAgICA5MixcbiAgICAgICAgMTA2LFxuICAgICAgICAyNTIsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMjI3LFxuICAgICAgICAxOTAsXG4gICAgICAgIDcyLFxuICAgICAgICAyNDAsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMTY4LFxuICAgICAgICAxNjUsXG4gICAgICAgIDEyNlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxOTAsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMTIwLFxuICAgICAgICAxMzQsXG4gICAgICAgIDQsXG4gICAgICAgIDcwLFxuICAgICAgICAxNzQsXG4gICAgICAgIDIwLFxuICAgICAgICAxNDAsXG4gICAgICAgIDE0LFxuICAgICAgICAxNTMsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMjAzLFxuICAgICAgICAxNDUsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMTEwLFxuICAgICAgICAxOTAsXG4gICAgICAgIDk2LFxuICAgICAgICAxMjYsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMTUxLFxuICAgICAgICA0NyxcbiAgICAgICAgNDQsXG4gICAgICAgIDg5LFxuICAgICAgICAxMTMsXG4gICAgICAgIDQyLFxuICAgICAgICAxMzEsXG4gICAgICAgIDExMCxcbiAgICAgICAgMTU0LFxuICAgICAgICA4LFxuICAgICAgICAyNTQsXG4gICAgICAgIDExXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDE2LFxuICAgICAgICAgIDIxNyxcbiAgICAgICAgICA3OSxcbiAgICAgICAgICA4NSxcbiAgICAgICAgICAyMjksXG4gICAgICAgICAgMTg0LFxuICAgICAgICAgIDEwOCxcbiAgICAgICAgICAxMDIsXG4gICAgICAgICAgMTA3LFxuICAgICAgICAgIDc5LFxuICAgICAgICAgIDc4LFxuICAgICAgICAgIDE3MCxcbiAgICAgICAgICA0MixcbiAgICAgICAgICAxODAsXG4gICAgICAgICAgMjM1LFxuICAgICAgICAgIDI1NSxcbiAgICAgICAgICA5NCxcbiAgICAgICAgICAyNixcbiAgICAgICAgICAxOTUsXG4gICAgICAgICAgMzAsXG4gICAgICAgICAgMTUzLFxuICAgICAgICAgIDQzLFxuICAgICAgICAgIDEwLFxuICAgICAgICAgIDE0NCxcbiAgICAgICAgICAxOTEsXG4gICAgICAgICAgNTcsXG4gICAgICAgICAgMzksXG4gICAgICAgICAgMTQ4LFxuICAgICAgICAgIDc4LFxuICAgICAgICAgIDE4NixcbiAgICAgICAgICAxNjUsXG4gICAgICAgICAgNzVcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTYxLFxuICAgICAgICAgIDE1NyxcbiAgICAgICAgICAxNTcsXG4gICAgICAgICAgMTUxLFxuICAgICAgICAgIDE5NSxcbiAgICAgICAgICAwLFxuICAgICAgICAgIDY1LFxuICAgICAgICAgIDkyLFxuICAgICAgICAgIDk3LFxuICAgICAgICAgIDIzMyxcbiAgICAgICAgICAxNzUsXG4gICAgICAgICAgMzcsXG4gICAgICAgICAgMTMsXG4gICAgICAgICAgMTI0LFxuICAgICAgICAgIDIwMCxcbiAgICAgICAgICA4MixcbiAgICAgICAgICAyNDIsXG4gICAgICAgICAgMzgsXG4gICAgICAgICAgNDUsXG4gICAgICAgICAgODMsXG4gICAgICAgICAgODQsXG4gICAgICAgICAgNTksXG4gICAgICAgICAgMTMwLFxuICAgICAgICAgIDIyLFxuICAgICAgICAgIDE5NixcbiAgICAgICAgICAxMjAsXG4gICAgICAgICAgMTc2LFxuICAgICAgICAgIDEwMSxcbiAgICAgICAgICA3NSxcbiAgICAgICAgICA0NSxcbiAgICAgICAgICA3NyxcbiAgICAgICAgICA5N1xuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE4MSxcbiAgICAgICAgMTA3LFxuICAgICAgICAxMDgsXG4gICAgICAgIDIyNyxcbiAgICAgICAgNTYsXG4gICAgICAgIDM5LFxuICAgICAgICA5MixcbiAgICAgICAgMjM4LFxuICAgICAgICAxNjEsXG4gICAgICAgIDEwNixcbiAgICAgICAgNCxcbiAgICAgICAgMzAsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMjEwLFxuICAgICAgICAyMzgsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMjEwLFxuICAgICAgICA1OSxcbiAgICAgICAgODIsXG4gICAgICAgIDIyLFxuICAgICAgICA3OCxcbiAgICAgICAgNDksXG4gICAgICAgIDIzNSxcbiAgICAgICAgMTEyLFxuICAgICAgICAyMTgsXG4gICAgICAgIDE4NSxcbiAgICAgICAgNjgsXG4gICAgICAgIDkzLFxuICAgICAgICAxNSxcbiAgICAgICAgODMsXG4gICAgICAgIDEwNSxcbiAgICAgICAgNCxcbiAgICAgICAgNSxcbiAgICAgICAgMTkxLFxuICAgICAgICAxNCxcbiAgICAgICAgNjEsXG4gICAgICAgIDk4LFxuICAgICAgICAxNzksXG4gICAgICAgIDE0OSxcbiAgICAgICAgMTQ0LFxuICAgICAgICAyMzEsXG4gICAgICAgIDU0LFxuICAgICAgICA3NixcbiAgICAgICAgMzQsXG4gICAgICAgIDY3LFxuICAgICAgICAxMSxcbiAgICAgICAgMTEsXG4gICAgICAgIDc0LFxuICAgICAgICAxNjksXG4gICAgICAgIDE4NCxcbiAgICAgICAgMTQxLFxuICAgICAgICAxMzMsXG4gICAgICAgIDMyLFxuICAgICAgICAxOTIsXG4gICAgICAgIDE2OSxcbiAgICAgICAgODIsXG4gICAgICAgIDc2LFxuICAgICAgICAxOSxcbiAgICAgICAgMjM2LFxuICAgICAgICAxMTAsXG4gICAgICAgIDE3LFxuICAgICAgICAzOCxcbiAgICAgICAgNjIsXG4gICAgICAgIDE0XG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAxMDksXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiZVVXeDVyL1BJVS8zQk1FVTZ2bXNnSXFVMFpqVmFWY1Fsd0hhNWgwTTdzaz1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW1xuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCIyNTQ3MTk2NDY4MzdAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIkU4Q0NFNTE3NTYxMEU2RDk5MzlBNzdEODU0RjdENEZDXCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTcyMDI1MzczNFxuICAgIH0sXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjI1NDcxOTY0NjgzN0BzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiODQ2NzMxNzBGRjRDODM4NDhFMjY1NDZFMjA3NjcyMzlcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzIwMjUzNzM0XG4gICAgfVxuICBdLFxuICBcIm5leHRQcmVLZXlJZFwiOiA2MSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiA2MSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMSxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIjBBTzNFd0dHVFZhdzNTLWM3QUZBX3dcIixcbiAgXCJwaG9uZUlkXCI6IFwiNTZjOGJhZmEtMjcxYi00MTBjLWE2YjktMWIzNGFjYTI1MDdlXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDIyMyxcbiAgICAgIDY5LFxuICAgICAgMjM0LFxuICAgICAgMjE3LFxuICAgICAgMTIzLFxuICAgICAgNDksXG4gICAgICAxMDEsXG4gICAgICAxODIsXG4gICAgICAyMjYsXG4gICAgICAxNzUsXG4gICAgICAxODAsXG4gICAgICA5MSxcbiAgICAgIDEsXG4gICAgICAyMDcsXG4gICAgICA1MCxcbiAgICAgIDE2OSxcbiAgICAgIDc1LFxuICAgICAgOTAsXG4gICAgICAxODIsXG4gICAgICAxODJcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMjUsXG4gICAgICA5MSxcbiAgICAgIDY4LFxuICAgICAgMjQwLFxuICAgICAgMjE2LFxuICAgICAgOSxcbiAgICAgIDI1MCxcbiAgICAgIDE4MSxcbiAgICAgIDEyOCxcbiAgICAgIDkyLFxuICAgICAgMCxcbiAgICAgIDE3MyxcbiAgICAgIDIyMixcbiAgICAgIDE3NixcbiAgICAgIDE5OCxcbiAgICAgIDUxLFxuICAgICAgMTksXG4gICAgICAxMDQsXG4gICAgICAyMTgsXG4gICAgICAxMDhcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiSEtSSDYzTldcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjI1NDcxOTY0NjgzNzo0MkBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiMTQwMjM1NDQ2OTgwNjEyOjQyQGxpZFwiLFxuICAgIFwibmFtZVwiOiBcIkpBQ0VMT1dcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNQN2Y2TXdFRUovNm83UUdHQUVnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcImlwMWhwd052b2hkNUhPV0JpQlM1cnhScDR3dm9JdGluUzRyL1o5cGpMRGs9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiR2xZcEFvU25XT3Q3VXkzdThhNE95eUp1aGRVeTVYVmkwaUdSc01sc0t5OTBDb0FUNFFlVTM1aFd3VWlraG9UN29zYnlqTnhTemVESnFEQXhiKzcyQ2c9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiQ3U3TXNkYjE3ZWRCc1JrZ25JdWNxcXZ6Nm1reVRKL2wrL0EvbFFES1dxU1RsWFoydTY3SEtobWYyKzN6bEQxZklaWUJxNFY5L29XdG16T3orUVlZQWc9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjU0NzE5NjQ2ODM3OjQyQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMTM4LFxuICAgICAgICAgIDE1NyxcbiAgICAgICAgICA5NyxcbiAgICAgICAgICAxNjcsXG4gICAgICAgICAgMyxcbiAgICAgICAgICAxMTEsXG4gICAgICAgICAgMTYyLFxuICAgICAgICAgIDIzLFxuICAgICAgICAgIDEyMSxcbiAgICAgICAgICAyOCxcbiAgICAgICAgICAyMjksXG4gICAgICAgICAgMTI5LFxuICAgICAgICAgIDEzNixcbiAgICAgICAgICAyMCxcbiAgICAgICAgICAxODUsXG4gICAgICAgICAgMTc1LFxuICAgICAgICAgIDIwLFxuICAgICAgICAgIDEwNSxcbiAgICAgICAgICAyMjcsXG4gICAgICAgICAgMTEsXG4gICAgICAgICAgMjMyLFxuICAgICAgICAgIDM0LFxuICAgICAgICAgIDIxNixcbiAgICAgICAgICAxNjcsXG4gICAgICAgICAgNzUsXG4gICAgICAgICAgMTM4LFxuICAgICAgICAgIDI1NSxcbiAgICAgICAgICAxMDMsXG4gICAgICAgICAgMjE4LFxuICAgICAgICAgIDk5LFxuICAgICAgICAgIDQ0LFxuICAgICAgICAgIDU3XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MjAyNTM3MzEsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFHQTFcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUdBMS5qc29uIjogIntcImtleURhdGFcIjpcIk05ajFMS0FvT0hVaCsvN2tvdWU1dnhEZVB0emg5cGF4MDdpSGRUWldOTmc9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MTIzNDg0MTU5OCxcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIxNzIwMjUzNzM0NDI1XCJ9Igp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "Suhail",


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
