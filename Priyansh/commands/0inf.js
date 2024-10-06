module.exports.config = {
	name: "info",
	version: "1.0.1", 
	hasPermssion: 0,
	credits: "𝐏𝐫𝐢𝐲𝐚𝐧𝐬𝐡 𝐑𝐚𝐣𝐩𝐮𝐭",
	description: "Admin and Bot info.",
	commandCategory: "...",
	cooldowns: 1,
	dependencies: 
	{
    "request":"",
    "fs-extra":"",
    "axios":""
  }
};
module.exports.run = async function({ api,event,args,client,Users,Threads,__GLOBAL,Currencies }) {
const axios = global.nodemodule["axios"];
const request = global.nodemodule["request"];
const fs = global.nodemodule["fs-extra"];
const time = process.uptime(),
		hours = Math.floor(time / (60 * 60)),
		minutes = Math.floor((time % (60 * 60)) / 60),
		seconds = Math.floor(time % 60);
const moment = require("moment-timezone");
var juswa = moment.tz("Asia/Dhaka").format("『D/MM/YYYY』 【HH:mm:ss】");
var link =                                     
["https://imgur.com/a/yeqrC9l"];
var callback = () => api.sendMessage({body:` ╾━╤デ╦︻(▀̿Ĺ̯▀̿ ̿)🇮🇳 𝐀𝐃𝐌𝐈𝐍 𝐀𝐍𝐃 𝐁𝐎𝐓 𝐈𝐍𝐅𝐎𝐑𝐌𝐀𝐓𝐈𝐎𝐍 🇮🇳 
(⌐▀͡ ̯ʖ▀)︻̷┻̿═━一-

☄️𝐁𝐎𝐓 𝐍𝐀𝐌𝐄☄️  ${global.config.BOTNAME}

🔥𝐁𝐎𝐓 𝐀𝐃𝐌𝐈𝐍🔥☞︎︎︎☜︎︎︎✰ 𝕍𝔸ℝ𝕌ℕ 𝔻ℍ𝔸𝕎𝔸𝕃💔🥀

🙈𝐁𝐎𝐓 𝐀𝐃𝐌𝐈𝐍 𝐎𝐖𝐍𝐄𝐑 𝐅𝐀𝐂𝐄𝐁𝐎𝐎𝐊 𝐈𝐃 𝐋𝐈𝐍𝐊🙈➪ www.facebook.com/varundhawal752588 💞🕊️

👋𝐅𝐎𝐑 𝐀𝐍𝐘 𝐊𝐈𝐍𝐃 𝐎𝐅 𝐇𝐄𝐋𝐏 𝐂𝐎𝐍𝐓𝐀𝐂𝐓 𝐎𝐍 𝐖𝐇𝐀𝐓𝐒𝐀𝐏𝐏 𝐍𝐔𝐌𝐁𝐄𝐑👉 +919569900949😇

✧══════•❁❀❁•══════✧

🌸𝐁𝐎𝐓 𝐏𝐄𝐑𝐅𝐈𝐗🌸☞︎︎︎☜︎︎︎✰ ${global.config.PREFIX}

♥️𝐁𝐎𝐓 𝐎𝐖𝐍𝐄𝐑♥️ ☞︎︎︎☜︎︎︎✰ 𝐕𝐀𝐑𝐔𝐍 𝐃𝐇𝐀𝐖𝐀𝐋

🥳UPTIME🥳

🌪️𝐓𝐎𝐃𝐀𝐘 𝐈𝐒🌪️ ☞︎︎︎☜︎︎︎✰ ${juswa} 

⚡𝐁𝐎𝐓 𝐔𝐒 𝐑𝐔𝐍𝐍𝐈𝐍𝐆⚡ ${hours}:${minutes}:${seconds}.

✅𝐓𝐇𝐀𝐍𝐊𝐒 𝐅𝐎𝐑 𝐔𝐒𝐈𝐍𝐆 ${global.config.BOTNAME} Bot🖤


🦢🍒•••ꞪɛᏒɛ ɪʂ ɮ❍┼ ❍ωɳɜɽ ɳaʍɜ•••🌷💞 𝐕𝐚𝐫𝐮𝐧 𝐃𝐡𝐚𝐰𝐚𝐥🥀🌺


`,attachment: fs.createReadStream(__dirname + "/cache/fb.JPG")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/fb.JPG")); 
      return request(encodeURI(link[Math.floor(Math.random() * link.length)])).pipe(fs.createWriteStream(__dirname+"/cache/fb.JPG")).on("close",() => callback());
   };
