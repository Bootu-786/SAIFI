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
global.owner= process.env.OWNER_NUMBER ?,0795 010788 process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "0795 010788";




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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_10_16_07_09_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgOTYsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMTczLFxuICAgICAgICA5LFxuICAgICAgICAxNTAsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMjE4LFxuICAgICAgICA5NSxcbiAgICAgICAgODAsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMTA5LFxuICAgICAgICAyNDgsXG4gICAgICAgIDQ0LFxuICAgICAgICA3NCxcbiAgICAgICAgMTA5LFxuICAgICAgICAxNDMsXG4gICAgICAgIDk0LFxuICAgICAgICAxMzUsXG4gICAgICAgIDM1LFxuICAgICAgICAyMTAsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMTQwLFxuICAgICAgICAxNzYsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMzAsXG4gICAgICAgIDEyOCxcbiAgICAgICAgNjcsXG4gICAgICAgIDc5LFxuICAgICAgICAxMjcsXG4gICAgICAgIDExMSxcbiAgICAgICAgODYsXG4gICAgICAgIDg4XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE0LFxuICAgICAgICAyMTEsXG4gICAgICAgIDIxLFxuICAgICAgICAxNTIsXG4gICAgICAgIDIwNyxcbiAgICAgICAgOTgsXG4gICAgICAgIDg3LFxuICAgICAgICA3OSxcbiAgICAgICAgMjMsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMjUxLFxuICAgICAgICAxOTksXG4gICAgICAgIDI4LFxuICAgICAgICAyMjYsXG4gICAgICAgIDYzLFxuICAgICAgICAxMTcsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMTkwLFxuICAgICAgICAyMzMsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMTA1LFxuICAgICAgICA0OCxcbiAgICAgICAgMTY5LFxuICAgICAgICAyMTgsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMTk3LFxuICAgICAgICAxNjYsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMTQxLFxuICAgICAgICAxMTEsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMTEyXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMzIsXG4gICAgICAgIDUsXG4gICAgICAgIDcxLFxuICAgICAgICA3MSxcbiAgICAgICAgMTI5LFxuICAgICAgICAxNDIsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMTMzLFxuICAgICAgICAxMCxcbiAgICAgICAgOTAsXG4gICAgICAgIDM1LFxuICAgICAgICAxODQsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMjIyLFxuICAgICAgICA2LFxuICAgICAgICAyMDksXG4gICAgICAgIDE2MyxcbiAgICAgICAgMTA5LFxuICAgICAgICA4MixcbiAgICAgICAgNDQsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMyxcbiAgICAgICAgMTcwLFxuICAgICAgICAyNSxcbiAgICAgICAgNDIsXG4gICAgICAgIDExNyxcbiAgICAgICAgMTk5LFxuICAgICAgICA5NyxcbiAgICAgICAgMTMzLFxuICAgICAgICAxMjcsXG4gICAgICAgIDIwNixcbiAgICAgICAgODNcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTMwLFxuICAgICAgICAyMTAsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMTQyLFxuICAgICAgICAxNTUsXG4gICAgICAgIDE5OSxcbiAgICAgICAgNzksXG4gICAgICAgIDE2MCxcbiAgICAgICAgMTA3LFxuICAgICAgICAyNCxcbiAgICAgICAgMTMsXG4gICAgICAgIDQ3LFxuICAgICAgICAxMDYsXG4gICAgICAgIDUwLFxuICAgICAgICAyMjQsXG4gICAgICAgIDU4LFxuICAgICAgICA5MSxcbiAgICAgICAgMTQ2LFxuICAgICAgICA5MixcbiAgICAgICAgMTIxLFxuICAgICAgICAyMDksXG4gICAgICAgIDIyOSxcbiAgICAgICAgMTczLFxuICAgICAgICAxODUsXG4gICAgICAgIDk0LFxuICAgICAgICAyMTgsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMTc2LFxuICAgICAgICA3NixcbiAgICAgICAgNDksXG4gICAgICAgIDE2NyxcbiAgICAgICAgMTI3XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMTIsXG4gICAgICAgIDczLFxuICAgICAgICAzOCxcbiAgICAgICAgMjYsXG4gICAgICAgIDEzMixcbiAgICAgICAgMjM1LFxuICAgICAgICAxMTAsXG4gICAgICAgIDgwLFxuICAgICAgICAxNjEsXG4gICAgICAgIDU3LFxuICAgICAgICAzNSxcbiAgICAgICAgNTcsXG4gICAgICAgIDIxNixcbiAgICAgICAgMjUxLFxuICAgICAgICAxMDIsXG4gICAgICAgIDE1MyxcbiAgICAgICAgNCxcbiAgICAgICAgOTYsXG4gICAgICAgIDg2LFxuICAgICAgICAzNixcbiAgICAgICAgMTQwLFxuICAgICAgICA1NSxcbiAgICAgICAgMzYsXG4gICAgICAgIDQ5LFxuICAgICAgICAxOTEsXG4gICAgICAgIDExMSxcbiAgICAgICAgNjEsXG4gICAgICAgIDE5NyxcbiAgICAgICAgNTgsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMTI3LFxuICAgICAgICAxMTdcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjAsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMTI2LFxuICAgICAgICAxNjIsXG4gICAgICAgIDM0LFxuICAgICAgICAyOSxcbiAgICAgICAgMjQxLFxuICAgICAgICA1MCxcbiAgICAgICAgOTAsXG4gICAgICAgIDE4MixcbiAgICAgICAgMTU5LFxuICAgICAgICAxODEsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMjMsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMjIzLFxuICAgICAgICAyMTAsXG4gICAgICAgIDE5LFxuICAgICAgICAxNTcsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMjIsXG4gICAgICAgIDIyMCxcbiAgICAgICAgODAsXG4gICAgICAgIDE3LFxuICAgICAgICAxNjMsXG4gICAgICAgIDMzLFxuICAgICAgICA3NyxcbiAgICAgICAgNjYsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMTU0LFxuICAgICAgICA5MSxcbiAgICAgICAgNjBcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTUyLFxuICAgICAgICAgIDM2LFxuICAgICAgICAgIDEzNyxcbiAgICAgICAgICA5OSxcbiAgICAgICAgICAxNDEsXG4gICAgICAgICAgMjQwLFxuICAgICAgICAgIDY5LFxuICAgICAgICAgIDIxNSxcbiAgICAgICAgICAxODEsXG4gICAgICAgICAgNzIsXG4gICAgICAgICAgNjIsXG4gICAgICAgICAgMTUyLFxuICAgICAgICAgIDUyLFxuICAgICAgICAgIDMsXG4gICAgICAgICAgMTIxLFxuICAgICAgICAgIDIzNSxcbiAgICAgICAgICAxMzcsXG4gICAgICAgICAgMjIwLFxuICAgICAgICAgIDMsXG4gICAgICAgICAgNjMsXG4gICAgICAgICAgMjQ1LFxuICAgICAgICAgIDE2NSxcbiAgICAgICAgICAxODgsXG4gICAgICAgICAgMTU0LFxuICAgICAgICAgIDI0MixcbiAgICAgICAgICAxMyxcbiAgICAgICAgICAxNTUsXG4gICAgICAgICAgMjQ1LFxuICAgICAgICAgIDYwLFxuICAgICAgICAgIDIzMyxcbiAgICAgICAgICAyMjIsXG4gICAgICAgICAgMTI3XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDIyNSxcbiAgICAgICAgICAxMjIsXG4gICAgICAgICAgOTgsXG4gICAgICAgICAgMTgwLFxuICAgICAgICAgIDExMixcbiAgICAgICAgICAxOTgsXG4gICAgICAgICAgMzYsXG4gICAgICAgICAgOSxcbiAgICAgICAgICAxODksXG4gICAgICAgICAgOCxcbiAgICAgICAgICA1MixcbiAgICAgICAgICAyNDUsXG4gICAgICAgICAgMTc2LFxuICAgICAgICAgIDE3MCxcbiAgICAgICAgICA1NSxcbiAgICAgICAgICA3NSxcbiAgICAgICAgICAyNTIsXG4gICAgICAgICAgNzMsXG4gICAgICAgICAgMjMzLFxuICAgICAgICAgIDExMixcbiAgICAgICAgICA4LFxuICAgICAgICAgIDEwLFxuICAgICAgICAgIDI4LFxuICAgICAgICAgIDE5MixcbiAgICAgICAgICAyMjYsXG4gICAgICAgICAgMjQzLFxuICAgICAgICAgIDMsXG4gICAgICAgICAgOTgsXG4gICAgICAgICAgMTc1LFxuICAgICAgICAgIDYxLFxuICAgICAgICAgIDI3LFxuICAgICAgICAgIDEzXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQ4LFxuICAgICAgICA5NSxcbiAgICAgICAgMTk4LFxuICAgICAgICAxMTQsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMTU0LFxuICAgICAgICAxMzksXG4gICAgICAgIDEwLFxuICAgICAgICA2OSxcbiAgICAgICAgMTY4LFxuICAgICAgICAzMCxcbiAgICAgICAgMjE0LFxuICAgICAgICAxMjUsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMTg3LFxuICAgICAgICA4OSxcbiAgICAgICAgMzgsXG4gICAgICAgIDI0MCxcbiAgICAgICAgNjMsXG4gICAgICAgIDgyLFxuICAgICAgICA4MSxcbiAgICAgICAgNDgsXG4gICAgICAgIDMyLFxuICAgICAgICAxMjEsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMjQzLFxuICAgICAgICAyMDMsXG4gICAgICAgIDIxLFxuICAgICAgICAxMDcsXG4gICAgICAgIDI1MixcbiAgICAgICAgMTQxLFxuICAgICAgICAyMzMsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMjQ1LFxuICAgICAgICA4NCxcbiAgICAgICAgNTQsXG4gICAgICAgIDE1NixcbiAgICAgICAgMTk3LFxuICAgICAgICAxODYsXG4gICAgICAgIDIyLFxuICAgICAgICA0LFxuICAgICAgICAxMDIsXG4gICAgICAgIDEzMCxcbiAgICAgICAgNTAsXG4gICAgICAgIDQ3LFxuICAgICAgICAyMjQsXG4gICAgICAgIDIwNixcbiAgICAgICAgOTYsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMTEsXG4gICAgICAgIDIwLFxuICAgICAgICAzOCxcbiAgICAgICAgMjI4LFxuICAgICAgICAxNTQsXG4gICAgICAgIDc0LFxuICAgICAgICA2MyxcbiAgICAgICAgMjM0LFxuICAgICAgICAxNzEsXG4gICAgICAgIDc2LFxuICAgICAgICAyMzUsXG4gICAgICAgIDgyLFxuICAgICAgICAxMixcbiAgICAgICAgMTc4LFxuICAgICAgICAxMzVcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDY2LFxuICBcImFkdlNlY3JldEtleVwiOiBcIktaQTdDdUtTMUxEcDhJbEZzcUZVUGkzZmFzNktSbklkbE1JZFdYZS80L0U9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIkhOXzNtNTZaUjN1WGwxMXkyWU85WmdcIixcbiAgXCJwaG9uZUlkXCI6IFwiNGFkODhjZjQtMWY0My00YzRkLWE3OTktYjA0MzVlNDdmZmVhXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDc3LFxuICAgICAgMjM4LFxuICAgICAgMjAsXG4gICAgICAyNDEsXG4gICAgICA1NyxcbiAgICAgIDYzLFxuICAgICAgMjQ2LFxuICAgICAgMzYsXG4gICAgICAxNzEsXG4gICAgICAxMDIsXG4gICAgICA4MixcbiAgICAgIDYzLFxuICAgICAgMjE4LFxuICAgICAgMjU1LFxuICAgICAgMjIxLFxuICAgICAgMTExLFxuICAgICAgODQsXG4gICAgICAxMTMsXG4gICAgICAxNDcsXG4gICAgICAyOVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyMDYsXG4gICAgICAyMjQsXG4gICAgICA2NixcbiAgICAgIDE1MixcbiAgICAgIDEyLFxuICAgICAgMTMwLFxuICAgICAgMjQ0LFxuICAgICAgMjM4LFxuICAgICAgMTk4LFxuICAgICAgMTYwLFxuICAgICAgMTU0LFxuICAgICAgMTM5LFxuICAgICAgMTc1LFxuICAgICAgMTgxLFxuICAgICAgMTI0LFxuICAgICAgMjQ5LFxuICAgICAgMjQ1LFxuICAgICAgMTI3LFxuICAgICAgMTY0LFxuICAgICAgMTAwXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIlNTVjJYRkc5XCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyNTQ3OTUwMTA3ODg6NjBAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcIm5hbWVcIjogXCLwnZiE8J2XufCdl7kg8J2XmvCdl67wnZiD8J2XtlwiLFxuICAgIFwibGlkXCI6IFwiMTE2MDQxOTI5NzYwNzg2OjYwQGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ0kvZ2dxWUZFT21idExRR0dBRWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiTE81Rm13ODhlN2ZOUXRrU0tDa1U3VjlMdTRIOUZZNEN0VXU2VmRTZHV5bz1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJlYXcyQmM3Vjg1WUxCSnRibXFqeFVsSnF6OFM1Q3JFVHdsMEtERTROdVBrY3ppNFgxRG9qUWJCUTBzdzRGa1NLb3YrUmsrampJblJKY21NeTB0TjVDdz09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJPWDcwTzN3NHNFSGQ5Z3ZxSWhSa0c4QTMzVlk2YUVMaHJJTVAyNy8zbGh2MmZ0SXJ2cmQxeXNoUDFoYlU3SnlGSVRFWk1IaTRtL3ZQVU9BazQ4Zzlndz09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyNTQ3OTUwMTA3ODg6NjBAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICA0NCxcbiAgICAgICAgICAyMzgsXG4gICAgICAgICAgNjksXG4gICAgICAgICAgMTU1LFxuICAgICAgICAgIDE1LFxuICAgICAgICAgIDYwLFxuICAgICAgICAgIDEyMyxcbiAgICAgICAgICAxODMsXG4gICAgICAgICAgMjA1LFxuICAgICAgICAgIDY2LFxuICAgICAgICAgIDIxNyxcbiAgICAgICAgICAxOCxcbiAgICAgICAgICA0MCxcbiAgICAgICAgICA0MSxcbiAgICAgICAgICAyMCxcbiAgICAgICAgICAyMzcsXG4gICAgICAgICAgOTUsXG4gICAgICAgICAgNzUsXG4gICAgICAgICAgMTg3LFxuICAgICAgICAgIDEyOSxcbiAgICAgICAgICAyNTMsXG4gICAgICAgICAgMjEsXG4gICAgICAgICAgMTQyLFxuICAgICAgICAgIDIsXG4gICAgICAgICAgMTgxLFxuICAgICAgICAgIDc1LFxuICAgICAgICAgIDE4NixcbiAgICAgICAgICA4NSxcbiAgICAgICAgICAyMTIsXG4gICAgICAgICAgMTU3LFxuICAgICAgICAgIDE4NyxcbiAgICAgICAgICA0MlxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwic21iYVwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzIwNTIwMTczLFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBRzRHXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFHNEcuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCI5VWJnRDZjVnZMRnRDaURTV1pzV0NOMFVWZUNPTkFMdVFYR2NhTWJ3WUhrPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjE0MjE5MTQxMDQsXCJjdXJyZW50SW5kZXhcIjo1LFwiZGV2aWNlSW5kZXhlc1wiOlswLDVdfSxcInRpbWVzdGFtcFwiOlwiMFwifSIKfQ=="  // PUT your SESSION_ID 


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
