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
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923184474176";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_05_20_07_18_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQsXG4gICAgICAgIDQ4LFxuICAgICAgICAxOTAsXG4gICAgICAgIDE2LFxuICAgICAgICAxMjYsXG4gICAgICAgIDEyLFxuICAgICAgICAxOTksXG4gICAgICAgIDIyNCxcbiAgICAgICAgNjcsXG4gICAgICAgIDQ5LFxuICAgICAgICAzMCxcbiAgICAgICAgMjYsXG4gICAgICAgIDgxLFxuICAgICAgICAxMDksXG4gICAgICAgIDkzLFxuICAgICAgICAyNSxcbiAgICAgICAgMTQsXG4gICAgICAgIDEyNixcbiAgICAgICAgNCxcbiAgICAgICAgODcsXG4gICAgICAgIDE4NixcbiAgICAgICAgMTk0LFxuICAgICAgICAxMTIsXG4gICAgICAgIDczLFxuICAgICAgICAxMzIsXG4gICAgICAgIDIxMixcbiAgICAgICAgNSxcbiAgICAgICAgODUsXG4gICAgICAgIDgwLFxuICAgICAgICAxMCxcbiAgICAgICAgOTMsXG4gICAgICAgIDY2XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDksXG4gICAgICAgIDEwNSxcbiAgICAgICAgNDEsXG4gICAgICAgIDI0NixcbiAgICAgICAgMjA1LFxuICAgICAgICAyNDksXG4gICAgICAgIDcsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMTcwLFxuICAgICAgICAyNDksXG4gICAgICAgIDU4LFxuICAgICAgICA5MCxcbiAgICAgICAgMjQ1LFxuICAgICAgICAyNTEsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMjIxLFxuICAgICAgICAxNjUsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMjMxLFxuICAgICAgICAxMzAsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMjU0LFxuICAgICAgICAyNSxcbiAgICAgICAgMTQ5LFxuICAgICAgICAyMjYsXG4gICAgICAgIDExMCxcbiAgICAgICAgMTQyLFxuICAgICAgICAxNTEsXG4gICAgICAgIDE3NixcbiAgICAgICAgMTcxLFxuICAgICAgICAxOTQsXG4gICAgICAgIDg0XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMTYsXG4gICAgICAgIDU4LFxuICAgICAgICAyNDIsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMjM3LFxuICAgICAgICA4NCxcbiAgICAgICAgMTM1LFxuICAgICAgICAxNjQsXG4gICAgICAgIDY1LFxuICAgICAgICA4NyxcbiAgICAgICAgNjUsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMjMzLFxuICAgICAgICA0NCxcbiAgICAgICAgMyxcbiAgICAgICAgNTksXG4gICAgICAgIDMwLFxuICAgICAgICAxOCxcbiAgICAgICAgNixcbiAgICAgICAgMjQ5LFxuICAgICAgICA2NCxcbiAgICAgICAgNzcsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMjE3LFxuICAgICAgICA1MSxcbiAgICAgICAgNDIsXG4gICAgICAgIDE5OCxcbiAgICAgICAgOTYsXG4gICAgICAgIDUsXG4gICAgICAgIDM3LFxuICAgICAgICAyMDEsXG4gICAgICAgIDEyNVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA2NSxcbiAgICAgICAgMjM2LFxuICAgICAgICA5MyxcbiAgICAgICAgMjMxLFxuICAgICAgICAyMzYsXG4gICAgICAgIDEzLFxuICAgICAgICAyMzEsXG4gICAgICAgIDE4MyxcbiAgICAgICAgNDQsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMTk3LFxuICAgICAgICAyMDUsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMzQsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMTU4LFxuICAgICAgICAxNzQsXG4gICAgICAgIDE5MixcbiAgICAgICAgMTIzLFxuICAgICAgICAyMzIsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMjUxLFxuICAgICAgICAxMDEsXG4gICAgICAgIDE1MixcbiAgICAgICAgOTQsXG4gICAgICAgIDE3NixcbiAgICAgICAgMjAxLFxuICAgICAgICA3OSxcbiAgICAgICAgMjUsXG4gICAgICAgIDg2LFxuICAgICAgICAyNTUsXG4gICAgICAgIDIxXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMDAsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMjE1LFxuICAgICAgICA1OSxcbiAgICAgICAgMTgxLFxuICAgICAgICAyNixcbiAgICAgICAgMzAsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMTE5LFxuICAgICAgICAyOSxcbiAgICAgICAgMjE0LFxuICAgICAgICAxOTgsXG4gICAgICAgIDkzLFxuICAgICAgICA3MixcbiAgICAgICAgNzEsXG4gICAgICAgIDEwLFxuICAgICAgICAxMyxcbiAgICAgICAgNzMsXG4gICAgICAgIDMzLFxuICAgICAgICAxNDMsXG4gICAgICAgIDksXG4gICAgICAgIDE1NSxcbiAgICAgICAgMjA4LFxuICAgICAgICAxNDksXG4gICAgICAgIDE2MyxcbiAgICAgICAgMTc2LFxuICAgICAgICAxMjMsXG4gICAgICAgIDkzLFxuICAgICAgICAxNzYsXG4gICAgICAgIDQ2LFxuICAgICAgICAxMTEsXG4gICAgICAgIDEyNlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMzUsXG4gICAgICAgIDIxMCxcbiAgICAgICAgNDksXG4gICAgICAgIDk5LFxuICAgICAgICA5MSxcbiAgICAgICAgMjA1LFxuICAgICAgICA3MCxcbiAgICAgICAgMjMxLFxuICAgICAgICAzOSxcbiAgICAgICAgOTUsXG4gICAgICAgIDc1LFxuICAgICAgICAxMzMsXG4gICAgICAgIDI0NixcbiAgICAgICAgMTAzLFxuICAgICAgICAyNDQsXG4gICAgICAgIDI0NixcbiAgICAgICAgMjU0LFxuICAgICAgICA4OCxcbiAgICAgICAgMjU0LFxuICAgICAgICAyMzIsXG4gICAgICAgIDIwOSxcbiAgICAgICAgNTEsXG4gICAgICAgIDE0LFxuICAgICAgICA2NCxcbiAgICAgICAgMjMsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMTE3LFxuICAgICAgICAxMyxcbiAgICAgICAgMTExLFxuICAgICAgICA2NSxcbiAgICAgICAgMTc0LFxuICAgICAgICAyXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDk2LFxuICAgICAgICAgIDEwLFxuICAgICAgICAgIDM4LFxuICAgICAgICAgIDE4MCxcbiAgICAgICAgICAxNDQsXG4gICAgICAgICAgMjM5LFxuICAgICAgICAgIDE0LFxuICAgICAgICAgIDIxOSxcbiAgICAgICAgICA3NixcbiAgICAgICAgICAxMjgsXG4gICAgICAgICAgMTIsXG4gICAgICAgICAgMTA5LFxuICAgICAgICAgIDIzMixcbiAgICAgICAgICAxOTEsXG4gICAgICAgICAgMTgsXG4gICAgICAgICAgMjIxLFxuICAgICAgICAgIDIyNSxcbiAgICAgICAgICAxOCxcbiAgICAgICAgICAyMDYsXG4gICAgICAgICAgMTYwLFxuICAgICAgICAgIDQ2LFxuICAgICAgICAgIDI0OCxcbiAgICAgICAgICAxNDQsXG4gICAgICAgICAgMjA5LFxuICAgICAgICAgIDE0MSxcbiAgICAgICAgICA2MSxcbiAgICAgICAgICAxODAsXG4gICAgICAgICAgMjAyLFxuICAgICAgICAgIDE1MCxcbiAgICAgICAgICAxMSxcbiAgICAgICAgICA5NSxcbiAgICAgICAgICAxMDhcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTY5LFxuICAgICAgICAgIDEwNixcbiAgICAgICAgICAyMzAsXG4gICAgICAgICAgMTEyLFxuICAgICAgICAgIDIxLFxuICAgICAgICAgIDE2MixcbiAgICAgICAgICAyNDYsXG4gICAgICAgICAgMjYsXG4gICAgICAgICAgMTMyLFxuICAgICAgICAgIDYsXG4gICAgICAgICAgMTE0LFxuICAgICAgICAgIDIwOSxcbiAgICAgICAgICAxMDMsXG4gICAgICAgICAgMjQ3LFxuICAgICAgICAgIDEyMSxcbiAgICAgICAgICA4NCxcbiAgICAgICAgICAxODUsXG4gICAgICAgICAgMzIsXG4gICAgICAgICAgMjEwLFxuICAgICAgICAgIDg1LFxuICAgICAgICAgIDY2LFxuICAgICAgICAgIDE5MyxcbiAgICAgICAgICAxMzQsXG4gICAgICAgICAgMTYzLFxuICAgICAgICAgIDUxLFxuICAgICAgICAgIDMyLFxuICAgICAgICAgIDIzMyxcbiAgICAgICAgICA4LFxuICAgICAgICAgIDExLFxuICAgICAgICAgIDM0LFxuICAgICAgICAgIDU4LFxuICAgICAgICAgIDUxXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTAxLFxuICAgICAgICA1OCxcbiAgICAgICAgMjQ5LFxuICAgICAgICAyMixcbiAgICAgICAgMjAxLFxuICAgICAgICA4MyxcbiAgICAgICAgMTMzLFxuICAgICAgICAxOTAsXG4gICAgICAgIDUxLFxuICAgICAgICA4MixcbiAgICAgICAgMjAzLFxuICAgICAgICA4OSxcbiAgICAgICAgMTAyLFxuICAgICAgICAyMzIsXG4gICAgICAgIDk5LFxuICAgICAgICAxNzMsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMTE4LFxuICAgICAgICAyNyxcbiAgICAgICAgMTczLFxuICAgICAgICA3NSxcbiAgICAgICAgMTg4LFxuICAgICAgICA4MyxcbiAgICAgICAgMTIzLFxuICAgICAgICAxNCxcbiAgICAgICAgMjAxLFxuICAgICAgICA0NCxcbiAgICAgICAgMjQwLFxuICAgICAgICAyMDIsXG4gICAgICAgIDI0OSxcbiAgICAgICAgNzMsXG4gICAgICAgIDYyLFxuICAgICAgICAzNixcbiAgICAgICAgMjQ5LFxuICAgICAgICA1LFxuICAgICAgICAxOTIsXG4gICAgICAgIDg5LFxuICAgICAgICA3MixcbiAgICAgICAgMTM3LFxuICAgICAgICAxMzUsXG4gICAgICAgIDU3LFxuICAgICAgICAyMjUsXG4gICAgICAgIDEwMixcbiAgICAgICAgMTg0LFxuICAgICAgICA2MSxcbiAgICAgICAgMTM2LFxuICAgICAgICA4OSxcbiAgICAgICAgMzksXG4gICAgICAgIDU3LFxuICAgICAgICAyNTAsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMjM2LFxuICAgICAgICAxMDksXG4gICAgICAgIDg0LFxuICAgICAgICAxNDksXG4gICAgICAgIDM5LFxuICAgICAgICAxNzcsXG4gICAgICAgIDIzNCxcbiAgICAgICAgNjAsXG4gICAgICAgIDQ2LFxuICAgICAgICA1OCxcbiAgICAgICAgMzQsXG4gICAgICAgIDMxLFxuICAgICAgICAxMzBcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDEyNixcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCI5eUdURU9YWU5SMk1GUDNOYmVMbjFmSGduTFZOZzBDQ3VIZXJjbFVRQk1FPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJfcTZZX0wwLVJJcXJLQmFsazg0WmJBXCIsXG4gIFwicGhvbmVJZFwiOiBcIjE2NDIzODRkLTE2YmItNDFkMi04YTEzLWM0MmJhMmFjYTdkNVwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxOTUsXG4gICAgICA5NCxcbiAgICAgIDEzLFxuICAgICAgMTE5LFxuICAgICAgMTQ0LFxuICAgICAgMTE2LFxuICAgICAgMjEyLFxuICAgICAgMjQzLFxuICAgICAgOTUsXG4gICAgICAyMjcsXG4gICAgICAxNjcsXG4gICAgICAyMDAsXG4gICAgICAzMyxcbiAgICAgIDQyLFxuICAgICAgOTQsXG4gICAgICAxMTQsXG4gICAgICAxMDEsXG4gICAgICA0LFxuICAgICAgMTc2LFxuICAgICAgMjQwXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDE1NyxcbiAgICAgIDE5NSxcbiAgICAgIDIwNixcbiAgICAgIDIyLFxuICAgICAgMjQwLFxuICAgICAgMTIsXG4gICAgICAyMDYsXG4gICAgICAxMTIsXG4gICAgICAyMzEsXG4gICAgICAxOTAsXG4gICAgICAyNCxcbiAgICAgIDE5OCxcbiAgICAgIDIxNixcbiAgICAgIDIxNCxcbiAgICAgIDE1MCxcbiAgICAgIDI1LFxuICAgICAgMTc3LFxuICAgICAgOTEsXG4gICAgICAyMzMsXG4gICAgICA5OVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJBMkdDVkpIOVwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiOTQ3NzU4MTA2MDY6N0BzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibmFtZVwiOiBcIvCdmbPwnZqK8J2al/CdmorwnZqX8J2ak/CdmorwnZqi8J2ailwiLFxuICAgIFwibGlkXCI6IFwiMTc3MjAyMjEzNzMyNTczOjdAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDTEdlbGwwUXBNeml0QVlZQWlBQUtBQT1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJENEdUZEtCejJobzBsWTRuNit6L0w1bWdxWmxQWlIzQVExRWhuREpodFFnPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcInFmY1NtS1NCQStRcWFPbHZaUWxHMllIV0lvdno1ZTRLVFJEdWdQWmlmNzhSeXhkLzNWNUJML2s1UVJLMW5SanpoeDdGZThYUnpNWVRhMFA0TUFhWkNnPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIkZRTjc0cXFlb0d6ODlYQ1l1dGs3OVhnM2VEZVMwbWI2ODVBUW1UbEt6TENnczBleGtaT2RKSUlWMHhvcCtUUmpSakMvTjN5UzRNYWxaMkg5dEhsQWd3PT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjk0Nzc1ODEwNjA2OjdAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxNSxcbiAgICAgICAgICAxMjksXG4gICAgICAgICAgMTQ3LFxuICAgICAgICAgIDExNixcbiAgICAgICAgICAxNjAsXG4gICAgICAgICAgMTE1LFxuICAgICAgICAgIDIxOCxcbiAgICAgICAgICAyNixcbiAgICAgICAgICA1MixcbiAgICAgICAgICAxNDksXG4gICAgICAgICAgMTQyLFxuICAgICAgICAgIDM5LFxuICAgICAgICAgIDIzNSxcbiAgICAgICAgICAyMzYsXG4gICAgICAgICAgMjU1LFxuICAgICAgICAgIDQ3LFxuICAgICAgICAgIDE1MyxcbiAgICAgICAgICAxNjAsXG4gICAgICAgICAgMTY5LFxuICAgICAgICAgIDE1MyxcbiAgICAgICAgICA3OSxcbiAgICAgICAgICAxMDEsXG4gICAgICAgICAgMjksXG4gICAgICAgICAgMTkyLFxuICAgICAgICAgIDY3LFxuICAgICAgICAgIDgxLFxuICAgICAgICAgIDMzLFxuICAgICAgICAgIDE1NixcbiAgICAgICAgICA1MCxcbiAgICAgICAgICA5NyxcbiAgICAgICAgICAxODEsXG4gICAgICAgICAgOFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwic21iYVwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzIxMjgwMDM5LFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBS2hiXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFLaGIuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJyTWZ4YWIyYk1CNnoyeXE3YXZMNmowWGFpTWtKaEJNZkVldSsrN3ZkVFg4PVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjE5NTM5OTQ3MyxcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIxNzIxMTI2NTU0ODg3XCJ9Igp9"  // PUT your SESSION_ID 


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
