const fs = require("fs");
module.exports.config = {
	name: "sub",
    version: "1.0.1",
	hasPermssion: 0,
	credits: "𝐏𝐫𝐢𝐲𝐚𝐧𝐬𝐡 𝐑𝐚𝐣𝐩𝐮𝐭", 
	description: "hihihihi",
	commandCategory: "no prefix",
	usages: "sub",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("Varun Dhawal")==0 || event.body.indexOf("sub")==0 || event.body.indexOf("subscribe")==0 || event.body.indexOf("Varun")==0) {
		var msg = {
				body: "👋For Any Kind Of Help Contact On WhatsApp Number 👉 +919569900949😇",
				attachment: fs.createReadStream(__dirname + `/noprefix/sub.mp3`)
			}
			api.sendMessage(msg, threadID, messageID);
    api.setMessageReaction("🔔", event.messageID, (err) => {}, true)
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

  }
