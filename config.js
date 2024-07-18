const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="rehmanrajpoot644@gmail.com"
global.location="Rawalpindi,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/Bootu-786/PRINCE-HACKER";
global.gurl  =process.env.GURL  || "https://api.whatsapp.com/send?phone=+923145269482";
global.website=process.env.GURL || "https://api.whatsapp.com/send?phone=+923145269482" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "null" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "POWERED BY PRINCE" 


global.devs = "923145269482" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923491207003";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "true"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "true"
global.save_status = process.env.AUTO_SAVE_STATUS || "true"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "null";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_08_14_07_18_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTYsXG4gICAgICAgIDE2NixcbiAgICAgICAgNDksXG4gICAgICAgIDQwLFxuICAgICAgICA2NSxcbiAgICAgICAgMTU5LFxuICAgICAgICA1NCxcbiAgICAgICAgODUsXG4gICAgICAgIDEwMixcbiAgICAgICAgMjE5LFxuICAgICAgICAyMzAsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMTI1LFxuICAgICAgICAyOCxcbiAgICAgICAgMjQxLFxuICAgICAgICAxNjYsXG4gICAgICAgIDYxLFxuICAgICAgICAyMjYsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMTA1LFxuICAgICAgICAxNjAsXG4gICAgICAgIDk3LFxuICAgICAgICA5MyxcbiAgICAgICAgMTkyLFxuICAgICAgICAxMjgsXG4gICAgICAgIDAsXG4gICAgICAgIDM5LFxuICAgICAgICAyMDksXG4gICAgICAgIDIzNSxcbiAgICAgICAgMjI5LFxuICAgICAgICAxMDksXG4gICAgICAgIDEwMFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNjYsXG4gICAgICAgIDQ5LFxuICAgICAgICAxNzMsXG4gICAgICAgIDMwLFxuICAgICAgICAxNDIsXG4gICAgICAgIDE5NixcbiAgICAgICAgNzQsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMjQwLFxuICAgICAgICAyNDYsXG4gICAgICAgIDEzMyxcbiAgICAgICAgOTAsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMTA0LFxuICAgICAgICAxNzAsXG4gICAgICAgIDI4LFxuICAgICAgICAxNSxcbiAgICAgICAgMjUsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMTIwLFxuICAgICAgICA0MixcbiAgICAgICAgODIsXG4gICAgICAgIDk3LFxuICAgICAgICAxMTMsXG4gICAgICAgIDExOSxcbiAgICAgICAgMTY1LFxuICAgICAgICAxMjcsXG4gICAgICAgIDE0NixcbiAgICAgICAgMzksXG4gICAgICAgIDE3OCxcbiAgICAgICAgMjQsXG4gICAgICAgIDVcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDg4LFxuICAgICAgICA3MSxcbiAgICAgICAgNzUsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMjE3LFxuICAgICAgICA0MSxcbiAgICAgICAgMjUyLFxuICAgICAgICAyNDAsXG4gICAgICAgIDEwNixcbiAgICAgICAgMTk1LFxuICAgICAgICAxNDIsXG4gICAgICAgIDcyLFxuICAgICAgICA0OSxcbiAgICAgICAgMTQwLFxuICAgICAgICA2MCxcbiAgICAgICAgNTYsXG4gICAgICAgIDQzLFxuICAgICAgICAyNDQsXG4gICAgICAgIDI3LFxuICAgICAgICAxMzEsXG4gICAgICAgIDI0OCxcbiAgICAgICAgNTUsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMjUyLFxuICAgICAgICAxNjIsXG4gICAgICAgIDk3LFxuICAgICAgICAzMixcbiAgICAgICAgMjQ0LFxuICAgICAgICAxNTcsXG4gICAgICAgIDE1MixcbiAgICAgICAgNzYsXG4gICAgICAgIDEyMVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA4MCxcbiAgICAgICAgNTIsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMjMzLFxuICAgICAgICA0MyxcbiAgICAgICAgMjA0LFxuICAgICAgICA0MixcbiAgICAgICAgODMsXG4gICAgICAgIDM4LFxuICAgICAgICAxNjQsXG4gICAgICAgIDk3LFxuICAgICAgICAxMTIsXG4gICAgICAgIDE2MixcbiAgICAgICAgMTk3LFxuICAgICAgICA0NyxcbiAgICAgICAgMjA1LFxuICAgICAgICAyNDIsXG4gICAgICAgIDQzLFxuICAgICAgICAxNDEsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMzUsXG4gICAgICAgIDk2LFxuICAgICAgICA4OCxcbiAgICAgICAgNjcsXG4gICAgICAgIDYsXG4gICAgICAgIDI0OSxcbiAgICAgICAgNTIsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMjUxLFxuICAgICAgICA0NSxcbiAgICAgICAgMTA3LFxuICAgICAgICAxMDRcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDI0MCxcbiAgICAgICAgMTUyLFxuICAgICAgICAxMjcsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMTUyLFxuICAgICAgICAxMDYsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMTMwLFxuICAgICAgICAxNDUsXG4gICAgICAgIDU0LFxuICAgICAgICAxMjMsXG4gICAgICAgIDE3MixcbiAgICAgICAgMjAyLFxuICAgICAgICAyMTcsXG4gICAgICAgIDExMSxcbiAgICAgICAgNjksXG4gICAgICAgIDEzMyxcbiAgICAgICAgNjQsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMzIsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMTc1LFxuICAgICAgICAzOSxcbiAgICAgICAgMTM2LFxuICAgICAgICA1LFxuICAgICAgICAyNTMsXG4gICAgICAgIDQzLFxuICAgICAgICA4NCxcbiAgICAgICAgMTAzLFxuICAgICAgICAyNyxcbiAgICAgICAgMzUsXG4gICAgICAgIDY0XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDI1NSxcbiAgICAgICAgOTQsXG4gICAgICAgIDg0LFxuICAgICAgICA5NSxcbiAgICAgICAgOTAsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMjUsXG4gICAgICAgIDIwMSxcbiAgICAgICAgNjksXG4gICAgICAgIDIxNCxcbiAgICAgICAgMTU2LFxuICAgICAgICAxMDgsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMjQ1LFxuICAgICAgICAyNDMsXG4gICAgICAgIDI1LFxuICAgICAgICA1MCxcbiAgICAgICAgMTEzLFxuICAgICAgICA4LFxuICAgICAgICAyOSxcbiAgICAgICAgMTU1LFxuICAgICAgICAxNzMsXG4gICAgICAgIDk5LFxuICAgICAgICAxNzIsXG4gICAgICAgIDExNCxcbiAgICAgICAgMjUzLFxuICAgICAgICAxMjIsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMTE0LFxuICAgICAgICAyMzUsXG4gICAgICAgIDIyMixcbiAgICAgICAgOTVcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMjQsXG4gICAgICAgICAgMjE3LFxuICAgICAgICAgIDI1MyxcbiAgICAgICAgICA5MyxcbiAgICAgICAgICA4MSxcbiAgICAgICAgICAyMDksXG4gICAgICAgICAgMTU0LFxuICAgICAgICAgIDI3LFxuICAgICAgICAgIDE4NCxcbiAgICAgICAgICAxMTksXG4gICAgICAgICAgNzgsXG4gICAgICAgICAgOTAsXG4gICAgICAgICAgMTEsXG4gICAgICAgICAgMzQsXG4gICAgICAgICAgMzYsXG4gICAgICAgICAgMjIwLFxuICAgICAgICAgIDk2LFxuICAgICAgICAgIDk2LFxuICAgICAgICAgIDcwLFxuICAgICAgICAgIDkzLFxuICAgICAgICAgIDEyNSxcbiAgICAgICAgICAyMzEsXG4gICAgICAgICAgNzIsXG4gICAgICAgICAgMTQwLFxuICAgICAgICAgIDExMyxcbiAgICAgICAgICAyMDAsXG4gICAgICAgICAgMTcxLFxuICAgICAgICAgIDg1LFxuICAgICAgICAgIDEyNyxcbiAgICAgICAgICAyMDIsXG4gICAgICAgICAgOTQsXG4gICAgICAgICAgNzhcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMzIsXG4gICAgICAgICAgMTg2LFxuICAgICAgICAgIDM4LFxuICAgICAgICAgIDE5LFxuICAgICAgICAgIDExMixcbiAgICAgICAgICAxMDcsXG4gICAgICAgICAgMTkxLFxuICAgICAgICAgIDQ3LFxuICAgICAgICAgIDIzOSxcbiAgICAgICAgICA2NSxcbiAgICAgICAgICAxMzksXG4gICAgICAgICAgMTEyLFxuICAgICAgICAgIDE1MyxcbiAgICAgICAgICAyMzAsXG4gICAgICAgICAgMTQsXG4gICAgICAgICAgMjIzLFxuICAgICAgICAgIDEwLFxuICAgICAgICAgIDIzMCxcbiAgICAgICAgICAxNDEsXG4gICAgICAgICAgNTEsXG4gICAgICAgICAgMjMyLFxuICAgICAgICAgIDE5OSxcbiAgICAgICAgICAwLFxuICAgICAgICAgIDY3LFxuICAgICAgICAgIDExNyxcbiAgICAgICAgICA2NyxcbiAgICAgICAgICAxOTAsXG4gICAgICAgICAgMTQwLFxuICAgICAgICAgIDgwLFxuICAgICAgICAgIDI0NCxcbiAgICAgICAgICA0NixcbiAgICAgICAgICAxMDBcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMTgsXG4gICAgICAgIDE2MyxcbiAgICAgICAgNzEsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMjEsXG4gICAgICAgIDQwLFxuICAgICAgICAxMzcsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMTIsXG4gICAgICAgIDc1LFxuICAgICAgICA1MyxcbiAgICAgICAgMjM1LFxuICAgICAgICAyMzMsXG4gICAgICAgIDIzOCxcbiAgICAgICAgOTUsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMTIyLFxuICAgICAgICAxNDQsXG4gICAgICAgIDg2LFxuICAgICAgICAxMDUsXG4gICAgICAgIDEzNyxcbiAgICAgICAgNDEsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMTAsXG4gICAgICAgIDE0MixcbiAgICAgICAgMTc1LFxuICAgICAgICAyNDQsXG4gICAgICAgIDYwLFxuICAgICAgICAyNDksXG4gICAgICAgIDIwLFxuICAgICAgICAyMDUsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMTMsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMTYzLFxuICAgICAgICAxODksXG4gICAgICAgIDE4OSxcbiAgICAgICAgMixcbiAgICAgICAgOTMsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMTAsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMTMzLFxuICAgICAgICAxMzAsXG4gICAgICAgIDI0MixcbiAgICAgICAgNTUsXG4gICAgICAgIDUsXG4gICAgICAgIDg2LFxuICAgICAgICA5MixcbiAgICAgICAgMjExLFxuICAgICAgICA0MSxcbiAgICAgICAgMTA5LFxuICAgICAgICAxMjksXG4gICAgICAgIDQ4LFxuICAgICAgICAzNixcbiAgICAgICAgMTQyLFxuICAgICAgICAxMjMsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMTMyLFxuICAgICAgICAyNTUsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMjAsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMTM4XG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAxMjgsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiL0hIVkpPRHhvWEJEL0NPdnJBSTFMVjFFU2dCTE1tck51RTNpd2RESmJ6bz1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW1xuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCI5MjMyNzY1MzIyODFAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIkMyRDU3NzI2NjlGNENGQjAyM0FEQTQ5MjRBRjg1NkI4XCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTcyMTI5MDQ5MlxuICAgIH0sXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjkyMzI3NjUzMjI4MUBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiQjkwQkQ2MTFCRkNBMjgwN0VBNjYyMjcyQzYyMEY2NjhcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzIxMjkwNDkyXG4gICAgfVxuICBdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMSxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIlJhWkpyckJvUi1DVzA2OGhYUG55b1FcIixcbiAgXCJwaG9uZUlkXCI6IFwiNGZkMGU5YzAtZjNiZi00M2I4LWJlNGEtOWY0NmIyYzJlOGVmXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDIxNixcbiAgICAgIDcyLFxuICAgICAgMTczLFxuICAgICAgMzksXG4gICAgICAxMTIsXG4gICAgICAxMjQsXG4gICAgICAxMzksXG4gICAgICAzNCxcbiAgICAgIDYzLFxuICAgICAgMTYwLFxuICAgICAgMTU3LFxuICAgICAgODMsXG4gICAgICAxMixcbiAgICAgIDE5OSxcbiAgICAgIDI5LFxuICAgICAgMzIsXG4gICAgICAyMixcbiAgICAgIDIxOCxcbiAgICAgIDE1NCxcbiAgICAgIDE0NlxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IGZhbHNlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTUzLFxuICAgICAgNDYsXG4gICAgICAxOSxcbiAgICAgIDY2LFxuICAgICAgMTM2LFxuICAgICAgMjcsXG4gICAgICAxNjAsXG4gICAgICA0MCxcbiAgICAgIDI0OCxcbiAgICAgIDEzMCxcbiAgICAgIDIzMixcbiAgICAgIDUzLFxuICAgICAgMTg2LFxuICAgICAgMSxcbiAgICAgIDE2NCxcbiAgICAgIDI1LFxuICAgICAgMjM0LFxuICAgICAgNyxcbiAgICAgIDEwMSxcbiAgICAgIDkzXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDT1Q0dDlRSEVQYWQ0N1FHR0FFZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJWSjZnUkdmNWlyY29jREdabnVDTC9yQmlaVm1YR1dkQnZmdUxZZ3VRUEE0PVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcImw5MmNhTHpXSkpYeGRnSkFLdllDaEVwcUdZbDVUTk1hY2g3VUZKN0FKMXZNMkN5NTl6VmpvdnljdncvbExjWVdaWmJtMUlJK29ZZnBpbER6ZW4yVkR3PT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIklUc295TVJyczNBSjJTZDV1S3J4U0JWRHh0aWJRcmxUMVI1aGJ0RW5sdlo4VElDNGVxTzBOWmI4RFU2dFdZeVlrZ3pSMytnQ1FiZ2EwU25BeUptbWhRPT1cIlxuICB9LFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiOTIzMjc2NTMyMjgxOjFAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcIm5hbWVcIjogXCJTQUZJIEJVU0lORVNTXCIsXG4gICAgXCJsaWRcIjogXCIyNTI1NDkxMTA1Mzk0NToxQGxpZFwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiOTIzMjc2NTMyMjgxOjFAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICA4NCxcbiAgICAgICAgICAxNTgsXG4gICAgICAgICAgMTYwLFxuICAgICAgICAgIDY4LFxuICAgICAgICAgIDEwMyxcbiAgICAgICAgICAyNDksXG4gICAgICAgICAgMTM4LFxuICAgICAgICAgIDE4MyxcbiAgICAgICAgICA0MCxcbiAgICAgICAgICAxMTIsXG4gICAgICAgICAgNDksXG4gICAgICAgICAgMTUzLFxuICAgICAgICAgIDE1OCxcbiAgICAgICAgICAyMjQsXG4gICAgICAgICAgMTM5LFxuICAgICAgICAgIDI1NCxcbiAgICAgICAgICAxNzYsXG4gICAgICAgICAgOTgsXG4gICAgICAgICAgMTAxLFxuICAgICAgICAgIDg5LFxuICAgICAgICAgIDE1MSxcbiAgICAgICAgICAyNSxcbiAgICAgICAgICAxMDMsXG4gICAgICAgICAgNjUsXG4gICAgICAgICAgMTg5LFxuICAgICAgICAgIDI1MSxcbiAgICAgICAgICAxMzksXG4gICAgICAgICAgOTgsXG4gICAgICAgICAgMTEsXG4gICAgICAgICAgMTQ0LFxuICAgICAgICAgIDYwLFxuICAgICAgICAgIDE0XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJzbWJhXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MjEyOTA0OTAsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFIdGZcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUh0Zi5qc29uIjogIntcImtleURhdGFcIjpcIklTTHAyWER2Q0RjNm0wUXYxNU1PaCtVZUUxQzM4N1ZmSFFRRWJpKyt3ZnM9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MjA1NjEyNTU0MCxcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIxNzIxMjkwNDkxNTY1XCJ9Igp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: PRINCE Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || "$",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 POWERED BY PRINCE 』```",
 
  author : process.env.PACK_AUTHER|| "PRINCE",
  packname: process.env.PACK_NAME || "PRINCE",
  botname : process.env.BOT_NAME  || "PRINCE",
  ownername:process.env.OWNER_NAME|| "PRINCE",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "PRINCE"  ).toUpperCase(),



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
  //disablepm: process.env.DISABLE_PM || "true",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "true",
  //save_status: process.env.AUTO_SAVE_STATUS || "true",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
