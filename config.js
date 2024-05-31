const fs = require('fs-extra')
if (fs.existsSync('config.env')) require('dotenv').config({ path: __dirname+'/config.env' })


//═══════[Required Variables]════════\\
global.owner = process.env.OWNER_NUMBER.split("2349121881343")
global.mongodb = process.env.MONGODB_URI || "mongodb+srv://malikmd:malikmd@cluster0.bfc7ce9.mongodb.net/"
global.port= process.env.PORT || 5000
global.email = 'cypherilerioluwaa@gmail.com'
global.github = 'https://github.com/arkhan998/MALIK-MD'
global.location = 'Nigeria'
global.gurl = 'Cypher-Ìléríolúwa' // add your username
global.sudo = process.env.SUDO || '2349151066117'
global.devs = '2349151066117';
global.website = 'https://github.com/arkhan998/MALIK-MD' //wa.me/+91000000000000
global.THUMB_IMAGE = process.env.THUMB_IMAGE || 'https://telegra.ph/file/ec6ea1aef6f229cf76909.mp4'
module.exports = {
  
  sessionName:  process.env.SESSION_ID ||  "MALIK-MD;;;eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiZUh4RkU5ME0xSzdQcUhtQWhaQkZSdWxPa3BKT0hqOUU0QnN5b0N2dkRsQT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiVTQxR1ZVVGhVa2d5cU13T1FHcDB5cFlSYkdPajJpSlhQN0w1T09lcnZubz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJpR3dreXN2bzlSQ21jWEZaS3R5SHVjd2ZhY3NRejBPMHBrcG52aS84Z0VJPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJkV09McUJjTXhPcTFmMVdma2pwL1JtVmlPdHprQUJwbDNxMThoWDdYSUc0PSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjBOSXpMaHdSOE5kOUpSTDlFaUxtRWkxUkhLdGlSZmdiRnM2K3JCWVRiMFE9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImdNUnVhVE1XZmdFdUJGcEd4dHdFOUc1VjZjMTQ3SVBBditrZkthZE1JWHc9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiUUpOMzNiUlVGK3hiWUhJTGgzdFA5VUhKZWdRSDRSemp1bzJlcHpQOWRXQT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoieVp3MHF2VUVhL2N4cFYxNFAyRjFqaWJ6RmdnTG9DeFR0ZjZPR3R2OU93Yz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InoxdUtueDY4cW5wenR3ckRmU3FwLytNbkxXV0pLenlyVVJtNmpNMkp4SFZwZjZPQU41angvWDU0bkk4eEdjTWppMU1hVExia3crZnhGZk9OczdGVUNnPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTU5LCJhZHZTZWNyZXRLZXkiOiJXY2FDQmJKOEVuV2NsMTRpT3NYU0lpYkRHYUE3c1E1VDA0L0h0bWJ5QUh3PSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W3sia2V5Ijp7InJlbW90ZUppZCI6IjIzNDkxNTEwNjYxMTdAcy53aGF0c2FwcC5uZXQiLCJmcm9tTWUiOnRydWUsImlkIjoiM0E2MzVDNzZFNzdENjRDNkQ0MkMifSwibWVzc2FnZVRpbWVzdGFtcCI6MTcxNzE2NTAzMH1dLCJuZXh0UHJlS2V5SWQiOjYxLCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZCI6NjEsImFjY291bnRTeW5jQ291bnRlciI6MSwiYWNjb3VudFNldHRpbmdzIjp7InVuYXJjaGl2ZUNoYXRzIjpmYWxzZX0sImRldmljZUlkIjoiZ0ZoSFlWLWhRV2FwRVlyeXpxRWJ2USIsInBob25lSWQiOiIyNjRhNDYxZC0wMmYwLTRjYjktODQxNy01NTAzNWJlMjA5NTQiLCJpZGVudGl0eUlkIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiVXJRMmpKcXdsemZWMXllUUYzdjVrajZERzdNPSJ9LCJyZWdpc3RlcmVkIjpmYWxzZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ6TjJIMVBSS2htckJLYjA0TWxSdGNpWjZRYk09In0sInJlZ2lzdHJhdGlvbiI6e30sImFjY291bnQiOnsiZGV0YWlscyI6IkNMTGo3RTBRMTdmbnNnWVlDU0FBS0FBPSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJTa2orYUd2N21CdFhEMVI5SkRabFk3T2k3eG1PNXhEVGpKT0JpaXZKOG1BPSIsImFjY291bnRTaWduYXR1cmUiOiI5VUVHbG05ekdsQnhMeFRLRzlsdjVMY1lDVDkwTEpWQis3ai9VbUxnZ2MrSHV2akUvb240cGwxMlRrV29wajlDdDFzK09jUW5TTGExQm1mMUJTOTdEQT09IiwiZGV2aWNlU2lnbmF0dXJlIjoiMnN4YytWeXpuMnI3bEdBcjk2RG42SmpOVlhhWVhVVW1jUElMN21oeHl5QXNJcElVQ0ZsenZaaHZLSFRvZjM1TmNrZENjSVJ6Y3dWL2gwcDJ0QTR0QkE9PSJ9LCJtZSI6eyJpZCI6IjIzNDkxNTEwNjYxMTc6MjhAcy53aGF0c2FwcC5uZXQiLCJuYW1lIjoiQ3lwaGVyIMOMbMOpcsOtb2zDundhIPCfjYDwn5KO4p2k77iP8J+TjCJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiIyMzQ5MTUxMDY2MTE3OjI4QHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQlVwSS9taHIrNWdiVnc5VWZTUTJaV096b3U4Wmp1Y1EwNHlUZ1lvcnlmSmcifX1dLCJwbGF0Zm9ybSI6ImlwaG9uZSIsImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTcxNzE2NTAyNywibXlBcHBTdGF0ZUtleUlkIjoiQUFBQUFLQ0sifQ==",
  botname:   process.env.BOT_NAME === undefined ? 'ÀKÀNDÉ-MIDÉ-BOT🤖🌹🍀' : process.env.BOT_NAME,
  ownername: process.env.OWNER_NAME === undefined ? 'Cypher-Ìléríolúwa🤖🌹🍀' : process.env.OWNER_NAME,
  author:  process.env.PACK_INFO === undefined ? 'bot' : process.env.PACK_INFO.split(";")[0],
  auto_read_status :  process.env.AUTO_READ_STATUS === undefined ? true : process.env.AUTO_READ_STATUS,
  packname:  process.env.PACK_INFO === undefined ? 'malik-Md' : process.env.PACK_INFO.split(";")[1],
  autoreaction:  process.env.AUTO_REACTION  === undefined ? false : process.env.AUTO_REACTION ,
  antibadword :  process.env.ANTI_BAD_WORD === undefined ? 'nigga' : process.env.ANTI_BAD_WORD,
  alwaysonline:  process.env.ALWAYS_ONLINE === undefined ? true : process.env.ALWAYS_ONLINE,
  typingprensence:  process.env.TYPING === undefined ? true : process.env.TYPING,
recordingpresence:  process.env.RECORDING === undefined ? false : process.env.RECORDING,	
  antifake : process.env.FAKE_COUNTRY_CODE === undefined ? '971' : process.env.FAKE_COUNTRY_CODE,
  readmessage:  process.env.READ_MESSAGE === undefined ? true : process.env.READ_MESSAGE,
  auto_status_saver: process.env.AUTO_STATUS_SAVER === undefined ? false : process.env.AUTO_STATUS_SAVER,
  HANDLERS:  process.env.PREFIX === undefined ? ',' : process.env.PREFIX,
  warncount : process.env.WARN_COUNT === undefined ? 3 : process.env.WARN_COUNT,
  disablepm:  process.env.DISABLE_PM === undefined ? false : process.env.DISABLE_PM,
  levelupmessage:  process.env.LEVEL_UP_MESSAGE === undefined ? true : process.env.LEVEL_UP_MESSAGE,
  antilink:  process.env.ANTILINK_VALUES === undefined ? 'chat.whatsapp.com' : process.env.ANTILINK_VALUES,
  antilinkaction: process.env.ANTILINK_ACTION === undefined ? 'remove' : process.env.ANTILINK_ACTION,
  BRANCH: 'main', 
  ALIVE_MESSAGE:  process.env.ALIVE_MESSAGE === undefined ? '.' : process.env.ALIVE_MESSAGE,
  afk:  process.env.AFK ||true,
  autobio:  process.env.AUTO_BIO === undefined ? '' : process.env.AUTO_BIO,
  OPENAI_API_KEY:  process.env.OPENAI_API_KEY === undefined ? false : process.env.OPENAI_API_KEY,
  heroku:  process.env.heroku === undefined ? false : process.env.heroku,
  HEROKU: {
    HEROKU: process.env.HEROKU ||false,
    API_KEY: process.env.HEROKU_API_KEY === undefined ? '' : process.env.HEROKU_API_KEY,
    APP_NAME: process.env.HEROKU_APP_NAME === undefined ? '' : process.env.HEROKU_APP_NAME
},
  VERSION: process.env.VERSION === undefined ? 'v.0.0.3' : process.env.VERSION,
  LANG: process.env.THEME|| 'MALIK',
  WORKTYPE: process.env.WORKTYPE === undefined ? 'private' : process.env.WORKTYPE
};


let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(`Update'${__filename}'`)
    delete require.cache[file]
	require(file)
})
