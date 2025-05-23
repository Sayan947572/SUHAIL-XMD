const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="saimsamsun789@gmail.com"
global.location="Accra,Ghana."


global.mongodb= process.env.MONGODB_URI || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Accra/Ghana";
global.github=process.env.GITHUB|| "https://github.com/GlobalTechInfo/SUHAIL-XMD";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/TgwRyHR/Ephoto360-com-166de101e03cd7.jpg" || "https://i.ibb.co/TqtqWTB/Ephoto360-com-166de104a10faf.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "© GlobalTechInfo" 


global.devs = "" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "233247923525";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "233247923525";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "true"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "true" : "true" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 2
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "true" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://telegra.ph/file/82336d4b04ac81b77e18e.jpg" // "image" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "online" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "true"
global.readmessage = process.env.READ_MESSAGE || "true"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "true"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923444844060,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_17_16_05_20_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNjQsXG4gICAgICAgIDM5LFxuICAgICAgICA0NCxcbiAgICAgICAgMTg4LFxuICAgICAgICA1MSxcbiAgICAgICAgNzYsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMTY4LFxuICAgICAgICAxMDgsXG4gICAgICAgIDIsXG4gICAgICAgIDE1LFxuICAgICAgICAxMDAsXG4gICAgICAgIDIxNixcbiAgICAgICAgMTAwLFxuICAgICAgICAyOSxcbiAgICAgICAgNDEsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMTk1LFxuICAgICAgICAxMTgsXG4gICAgICAgIDE4OSxcbiAgICAgICAgNDQsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMTEzLFxuICAgICAgICAxMzgsXG4gICAgICAgIDkzLFxuICAgICAgICAyMzcsXG4gICAgICAgIDE4MyxcbiAgICAgICAgNzMsXG4gICAgICAgIDk5LFxuICAgICAgICAxMDQsXG4gICAgICAgIDQ4LFxuICAgICAgICA5OVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA0NixcbiAgICAgICAgNjQsXG4gICAgICAgIDE2MCxcbiAgICAgICAgOTEsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMTQsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMzYsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMTA4LFxuICAgICAgICAxNjksXG4gICAgICAgIDU1LFxuICAgICAgICAxOSxcbiAgICAgICAgMTA2LFxuICAgICAgICA1MCxcbiAgICAgICAgODIsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMTY3LFxuICAgICAgICA2OSxcbiAgICAgICAgNzYsXG4gICAgICAgIDE0LFxuICAgICAgICAxMjUsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMTg3LFxuICAgICAgICAxMDMsXG4gICAgICAgIDMzLFxuICAgICAgICAxNDIsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMTksXG4gICAgICAgIDIxMyxcbiAgICAgICAgMTYxLFxuICAgICAgICAxNlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgOCxcbiAgICAgICAgMTgzLFxuICAgICAgICAxMzEsXG4gICAgICAgIDE0LFxuICAgICAgICAxLFxuICAgICAgICA2OCxcbiAgICAgICAgMjE1LFxuICAgICAgICAxNjMsXG4gICAgICAgIDIwOCxcbiAgICAgICAgODYsXG4gICAgICAgIDYxLFxuICAgICAgICAxODQsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMzMsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMTYxLFxuICAgICAgICA0OSxcbiAgICAgICAgOTEsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMjQ5LFxuICAgICAgICAxNDgsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMjExLFxuICAgICAgICAxMDAsXG4gICAgICAgIDEzMixcbiAgICAgICAgMjQ5LFxuICAgICAgICA1LFxuICAgICAgICAxODgsXG4gICAgICAgIDIyNSxcbiAgICAgICAgNDQsXG4gICAgICAgIDc3LFxuICAgICAgICA4NlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMzAsXG4gICAgICAgIDY5LFxuICAgICAgICAyMzMsXG4gICAgICAgIDQ3LFxuICAgICAgICA4OCxcbiAgICAgICAgMTQwLFxuICAgICAgICA2NyxcbiAgICAgICAgMTIyLFxuICAgICAgICAzNixcbiAgICAgICAgMTU2LFxuICAgICAgICAxOCxcbiAgICAgICAgNDMsXG4gICAgICAgIDcwLFxuICAgICAgICAxOTgsXG4gICAgICAgIDE3MCxcbiAgICAgICAgODAsXG4gICAgICAgIDExOSxcbiAgICAgICAgMTIyLFxuICAgICAgICA4NCxcbiAgICAgICAgMTM4LFxuICAgICAgICAyNTUsXG4gICAgICAgIDExNSxcbiAgICAgICAgNjIsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMjQ1LFxuICAgICAgICAzNixcbiAgICAgICAgMjExLFxuICAgICAgICA2NSxcbiAgICAgICAgMzMsXG4gICAgICAgIDM3LFxuICAgICAgICA3NyxcbiAgICAgICAgMTAxXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMDAsXG4gICAgICAgIDIyNCxcbiAgICAgICAgNDYsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMTI3LFxuICAgICAgICAxNSxcbiAgICAgICAgMjE2LFxuICAgICAgICAzNixcbiAgICAgICAgODcsXG4gICAgICAgIDIyNyxcbiAgICAgICAgNDUsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMTY4LFxuICAgICAgICAxNyxcbiAgICAgICAgMjI0LFxuICAgICAgICA3MixcbiAgICAgICAgMTI4LFxuICAgICAgICAxMyxcbiAgICAgICAgNjMsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMTE2LFxuICAgICAgICA3OCxcbiAgICAgICAgMjA5LFxuICAgICAgICAxNTcsXG4gICAgICAgIDM4LFxuICAgICAgICAxMDAsXG4gICAgICAgIDUzLFxuICAgICAgICAzMyxcbiAgICAgICAgMTQ0LFxuICAgICAgICAxNDksXG4gICAgICAgIDExMixcbiAgICAgICAgMTA3XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIyMSxcbiAgICAgICAgNTEsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMjE2LFxuICAgICAgICA2NSxcbiAgICAgICAgNTQsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMjI0LFxuICAgICAgICAyNTIsXG4gICAgICAgIDY2LFxuICAgICAgICA5NyxcbiAgICAgICAgMTkyLFxuICAgICAgICAxOSxcbiAgICAgICAgMTUwLFxuICAgICAgICAyMDMsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMTcxLFxuICAgICAgICAyOSxcbiAgICAgICAgMTMsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMTk3LFxuICAgICAgICA3MyxcbiAgICAgICAgMTgwLFxuICAgICAgICAyNTUsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMTM0LFxuICAgICAgICAyNSxcbiAgICAgICAgMTUxLFxuICAgICAgICA5MCxcbiAgICAgICAgMjQzLFxuICAgICAgICA0LFxuICAgICAgICA2NlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAyNDAsXG4gICAgICAgICAgOTksXG4gICAgICAgICAgMTc5LFxuICAgICAgICAgIDMwLFxuICAgICAgICAgIDIwMSxcbiAgICAgICAgICAxOCxcbiAgICAgICAgICAyMDMsXG4gICAgICAgICAgMzIsXG4gICAgICAgICAgMTAwLFxuICAgICAgICAgIDEwMyxcbiAgICAgICAgICAyMTEsXG4gICAgICAgICAgMjEsXG4gICAgICAgICAgMTIxLFxuICAgICAgICAgIDM4LFxuICAgICAgICAgIDE3OSxcbiAgICAgICAgICA0NixcbiAgICAgICAgICAzNixcbiAgICAgICAgICAyOCxcbiAgICAgICAgICAyMTcsXG4gICAgICAgICAgMTQsXG4gICAgICAgICAgMjUxLFxuICAgICAgICAgIDEyNSxcbiAgICAgICAgICAxOTksXG4gICAgICAgICAgMTMsXG4gICAgICAgICAgMTk4LFxuICAgICAgICAgIDU1LFxuICAgICAgICAgIDIxMSxcbiAgICAgICAgICAxNTgsXG4gICAgICAgICAgMTIwLFxuICAgICAgICAgIDEyNSxcbiAgICAgICAgICAxNjAsXG4gICAgICAgICAgMTE1XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUwLFxuICAgICAgICAgIDE4MyxcbiAgICAgICAgICAxNTMsXG4gICAgICAgICAgMzksXG4gICAgICAgICAgMTQ1LFxuICAgICAgICAgIDcyLFxuICAgICAgICAgIDc0LFxuICAgICAgICAgIDIzNixcbiAgICAgICAgICAyMCxcbiAgICAgICAgICAzNSxcbiAgICAgICAgICAxNixcbiAgICAgICAgICAxMTgsXG4gICAgICAgICAgMTE5LFxuICAgICAgICAgIDc5LFxuICAgICAgICAgIDAsXG4gICAgICAgICAgMTE5LFxuICAgICAgICAgIDEwOCxcbiAgICAgICAgICAyNCxcbiAgICAgICAgICAzNyxcbiAgICAgICAgICAxNzMsXG4gICAgICAgICAgODcsXG4gICAgICAgICAgMjMwLFxuICAgICAgICAgIDIxMyxcbiAgICAgICAgICA0NSxcbiAgICAgICAgICA0NSxcbiAgICAgICAgICAxMzEsXG4gICAgICAgICAgMTQ4LFxuICAgICAgICAgIDI5LFxuICAgICAgICAgIDcsXG4gICAgICAgICAgNzMsXG4gICAgICAgICAgMTQzLFxuICAgICAgICAgIDMxXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgODMsXG4gICAgICAgIDc1LFxuICAgICAgICAxMTksXG4gICAgICAgIDg1LFxuICAgICAgICAxMTcsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMTQ3LFxuICAgICAgICAxOSxcbiAgICAgICAgMTc4LFxuICAgICAgICAyNDYsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMjQwLFxuICAgICAgICAyMTksXG4gICAgICAgIDE2NCxcbiAgICAgICAgNTAsXG4gICAgICAgIDUsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMTc1LFxuICAgICAgICAyMDcsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMTI4LFxuICAgICAgICA0NixcbiAgICAgICAgMTgzLFxuICAgICAgICA1NSxcbiAgICAgICAgNjgsXG4gICAgICAgIDM1LFxuICAgICAgICAxOTksXG4gICAgICAgIDE3MCxcbiAgICAgICAgMTgsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMjMzLFxuICAgICAgICAyMjAsXG4gICAgICAgIDk4LFxuICAgICAgICAwLFxuICAgICAgICAxNDYsXG4gICAgICAgIDEsXG4gICAgICAgIDExNSxcbiAgICAgICAgODMsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMjQ0LFxuICAgICAgICAxMjcsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMjI2LFxuICAgICAgICA1NyxcbiAgICAgICAgNzEsXG4gICAgICAgIDE3LFxuICAgICAgICAxMDksXG4gICAgICAgIDIwOCxcbiAgICAgICAgMTc4LFxuICAgICAgICA0OSxcbiAgICAgICAgMTY0LFxuICAgICAgICA4NCxcbiAgICAgICAgMTI3LFxuICAgICAgICAxODEsXG4gICAgICAgIDE1MixcbiAgICAgICAgNDAsXG4gICAgICAgIDQyLFxuICAgICAgICA0OSxcbiAgICAgICAgMTQyLFxuICAgICAgICA5MSxcbiAgICAgICAgMTU4LFxuICAgICAgICAxMDQsXG4gICAgICAgIDQ5LFxuICAgICAgICAxMzNcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDcwLFxuICBcImFkdlNlY3JldEtleVwiOiBcInIwMVJBcThVbys0Y2lQMVNNRk9venRQV1JpSitLdWJORSs4RnY4YTQ1N0E9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIkVpbDkyNVUxU3VtbXNTVWRZQnJ4cGdcIixcbiAgXCJwaG9uZUlkXCI6IFwiODA4MzNkMzUtMzgyMi00YmM5LTljMTctYjQwOTYzODM1ZTJjXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDQxLFxuICAgICAgMTAsXG4gICAgICAxOTMsXG4gICAgICAxNjMsXG4gICAgICAxMTcsXG4gICAgICAxMTksXG4gICAgICAxMzAsXG4gICAgICAxMTYsXG4gICAgICAxMzgsXG4gICAgICA5NCxcbiAgICAgIDUxLFxuICAgICAgMjMyLFxuICAgICAgOTYsXG4gICAgICAxNjksXG4gICAgICAxNDEsXG4gICAgICAyNSxcbiAgICAgIDEzMCxcbiAgICAgIDI1NCxcbiAgICAgIDEwLFxuICAgICAgODRcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiBmYWxzZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDc4LFxuICAgICAgMTE2LFxuICAgICAgMTc4LFxuICAgICAgMjMyLFxuICAgICAgMjQxLFxuICAgICAgNDMsXG4gICAgICAxMzIsXG4gICAgICAyMTEsXG4gICAgICAxODcsXG4gICAgICAxNjQsXG4gICAgICAzNyxcbiAgICAgIDI0MyxcbiAgICAgIDY4LFxuICAgICAgNDIsXG4gICAgICAxNjQsXG4gICAgICA0MixcbiAgICAgIDkzLFxuICAgICAgMTk1LFxuICAgICAgNTksXG4gICAgICAxMjBcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNOVzQ2YUFERU43eHNzRUdHQUVnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcInVXVlJOWGttYnRHdW84ajUrMlpoN0wwdndjQXJiSU1JczRybXhNa1JPbkE9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiWVJWdU42dTc5KzNCR1l4WlQ5bGdGOExmNEMyZHczd09HVmw2NXpXblV4QUtXd2RYa2pFMVIzTmZTREVIaWFRUU9UTlZtOTcxQ2sxZjdVbDdjdUpLQ2c9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiNlRLa2xCT0tBZW9XcTA2NGR3T2JjMno4VEFLMUhSeUFRYUY2dHNZRFYvaVF1MllJRXB5aGxzbk9tMlhjZ3d0SzIwVXJ3MHJ1UlNtOVg3dW5jRFIyaVE9PVwiXG4gIH0sXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCI5MTk4ODM1NjU1NjM6MzdAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjI0OTgxNzI1OTMxNTI0MTozN0BsaWRcIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjkxOTg4MzU2NTU2MzozN0BzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDE4NSxcbiAgICAgICAgICAxMDEsXG4gICAgICAgICAgODEsXG4gICAgICAgICAgNTMsXG4gICAgICAgICAgMTIxLFxuICAgICAgICAgIDM4LFxuICAgICAgICAgIDExMCxcbiAgICAgICAgICAyMDksXG4gICAgICAgICAgMTc0LFxuICAgICAgICAgIDE2MyxcbiAgICAgICAgICAyMDAsXG4gICAgICAgICAgMjQ5LFxuICAgICAgICAgIDI1MSxcbiAgICAgICAgICAxMDIsXG4gICAgICAgICAgOTcsXG4gICAgICAgICAgMjM2LFxuICAgICAgICAgIDE4OSxcbiAgICAgICAgICA0NyxcbiAgICAgICAgICAxOTMsXG4gICAgICAgICAgMTkyLFxuICAgICAgICAgIDQzLFxuICAgICAgICAgIDEwOCxcbiAgICAgICAgICAxMzEsXG4gICAgICAgICAgOCxcbiAgICAgICAgICAxNzksXG4gICAgICAgICAgMTM4LFxuICAgICAgICAgIDIzMCxcbiAgICAgICAgICAxOTYsXG4gICAgICAgICAgMjAxLFxuICAgICAgICAgIDE3LFxuICAgICAgICAgIDU4LFxuICAgICAgICAgIDExMlxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzQ3NzYxMzc3LFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBTWdBXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFNZisuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJ3bzd2M1Buamo4ckk1VVhaY045SmNqdlU4WWg5L05Cd2o1Y21IRFRFc1dVPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjg3NDE0MjgwMSxcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIwXCJ9IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBTWY2Lmpzb24iOiAie1wia2V5RGF0YVwiOlwicDh5YWJ0LzRmcXlhWWZXT3Z6UVRDdG5lUU1FM2Z0ankzSHgvbHpFWXdKZz1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjo4NzQxNDI3OTksXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMFwifSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQU1mNy5qc29uIjogIntcImtleURhdGFcIjpcIlh4MDRtQVg4Q3M3T0liYmhoRG1OU1RHWHIzVGUyRVNWc2tsUXdQeHU2S0k9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6ODc0MTQyNzk5LFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMF19LFwidGltZXN0YW1wXCI6XCIxNzQ3MTU0NDYxNzk4XCJ9IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBTWY4Lmpzb24iOiAie1wia2V5RGF0YVwiOlwiUXgyMEJ0YjhMNy9TRFRhOUY5dFVFSnVIQktad0ZKVXpZdjhMcWFnK08yYz1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjo4NzQxNDI4MDAsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMFwifSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQU1mOS5qc29uIjogIntcImtleURhdGFcIjpcIlFxTk5FZkJMNU5WUnJKQTF1ZkpCY2p1M2V0M3NzeTdMRU9xTmJVK0NwT2M9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6ODc0MTQyODAwLFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMF19LFwidGltZXN0YW1wXCI6XCIxNzQ3MzMxODU1MDEwXCJ9IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBTWZfXy5qc29uIjogIntcImtleURhdGFcIjpcIklOYUh2eG9qQXNCS1hoellmYVdYMmpjOWI2UGwxT2x2R2xqc2RENnVWZ2M9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6ODc0MTQyODAxLFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMF19LFwidGltZXN0YW1wXCI6XCIxNzQ3MzgxNDEzMDM2XCJ9IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBTWdBLmpzb24iOiAie1wia2V5RGF0YVwiOlwiV3hySCtlSHpIcWFLM0FadENia1BqUXkyQkVOc3ZiR2hqL25EU1QwbFE2Zz1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjo4NzQxNDI4MDIsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMFwifSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQU1nQi5qc29uIjogIntcImtleURhdGFcIjpcIis4ckkvNldmZGNRWk8rM0gyV2huWmJrVGZMdnBucHZTR0d2QUIxYkVyM1k9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6ODc0MTQyODAyLFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMF19LFwidGltZXN0YW1wXCI6XCIxNzQ3NDY2ODY4MzUwXCJ9IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBTWdDLmpzb24iOiAie1wia2V5RGF0YVwiOlwiV0pHUlI3N3VlM2JNTURsZmJXcU1HVk51Vng0aEpvZUorWHF5eU9TTngxND1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjo4NzQxNDI4MDMsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMFwifSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQU1nRC5qc29uIjogIntcImtleURhdGFcIjpcImVWUTRKOE1mODBiT2xGZ0VuZWxqU2dpVFVnZFdjNGVFZFFqaU5PRjM0SGs9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6ODc0MTQyODAzLFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMF19LFwidGltZXN0YW1wXCI6XCIxNzQ3NjYzNjkxMjI1XCJ9IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBTWdFLmpzb24iOiAie1wia2V5RGF0YVwiOlwiTWdNS1oyMVpac1pXaXY4d2lYUG85eEpQSEgzZHBCOXA1d0FheGtFR2p1UT1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjo4NzQxNDI4MDQsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMFwifSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQU1nRi5qc29uIjogIntcImtleURhdGFcIjpcIjVHU1UrOEFUN1VmZGwxTGtacE1sSTFTS3NjWmFnUFBSZkczZDErb0pkY0E9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6ODc0MTQyODA0LFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMF19LFwidGltZXN0YW1wXCI6XCIxNzQ3NzQ3MTE3ODUyXCJ9Igp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "MRWILL-available",
  packname: process.env.PACK_NAME || "MRWILL-available",
  botname : process.env.BOT_NAME  || "MRWILL-available",
  ownername:process.env.OWNER_NAME|| "MRWILL-available",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "yepeTQaFk7r9ymusihgXYvdN",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "0cdb1aed858329b9793413672094ce0d";
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
