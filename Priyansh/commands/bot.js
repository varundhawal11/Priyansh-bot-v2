const fs = global.nodemodule["fs-extra"];
module.exports.config = {
  name: "goibot",
  version: "1.0.1",
  hasPermssion: 0,
  credits: "𝐏𝐫𝐢𝐲𝐚𝐧𝐬𝐡 𝐑𝐚𝐣𝐩𝐮𝐭",
  description: "goibot",
  commandCategory: "Noprefix",
  usages: "noprefix",
  cooldowns: 5,
};
module.exports.handleEvent = async function({ api, event, args, Threads, Users }) {
  var { threadID, messageID, reason } = event;
  const moment = require("moment-timezone");
  const time = moment.tz("Asia/Kolkata").format("HH:MM:ss L");
  var idgr = `${event.threadID}`;
  var id = event.senderID;
  var name = await Users.getNameUser(event.senderID);

  var tl = ["🌸====『 हाय मैं मर जावा तेरी मासूम शकल पे_____😗  " , "🌸====『 बोट बोट ना बोल अपना बाबूू बोल____😝🙈🦋 " , "🌸====『𒁍कल काली पहाड़ी के पीछे तू मिल जा_______😁😈" , "🌸====『 मैं गरीबों से बात नहीं करता ____😉🤪" , " 🌸====『 चुप होजा मनहूस प्राणि वर्ना खोपचे में ले जाऊंगा तुझे________😝🤪" , "🌸====『 बोलो बाबू तुम मुझे प्यार करते हो ना______🙈 " , "🌸====『 अरे मेरी जान मजाक के मूड में नहीं हूं मैं जो काम है बोलो शर्माओ नहीं _______🎸🎭━━•☆°•°•💗" , "🌸====『 बार बार बोल के दिमाग ख़राब किया तो id हैक कर लूंगा_____🙂♡• || _[🙂]~🖤 •|" , "🌸====『 तुम बंद नहीं करोगे क्या?_____🙂" , "लव यू बोलो __😁" ,  "🌸====『 मैं तुम्हारे चक्कर में सबको ब्लॉक कर रहा हूं अब आई लव यू बोलोगे की नहीं____🙂" , "🌸====『 मैं हाथ जोड़ के मोदी से गुजारिश करता हूं मेरी मदद करेगा_____❁⃝❤️➸⃟̗̗̗̗̀̀̀̀̀̀̀̀̀̀̀̀̀ ❤̋҉̋⃢**💫" , "🌸====『 तुमको कोई और कम नहीं पूरे दिन मेसेंजर पे बोट बोट करते हो___😁" , " 🌸====『 मैं तेरा बैंड बजा दूंगा गलत आदेश मत देना________🙈😜 " , "🌸====『 अभी बोला तो दोबारा मत बोलना____🙂" , "🌸====『 बोल दे कोई नहीं देख रहा हे___ 🙄☢━💛🌹💛" , "🌸====『 हाय मैं मर जावा ऐक े चुम्मा तो देदो काफी दिन से चुम्मी नहीं मिली_____😝🦋" , "🌸====『 मुझे कोई पटा लो मैं बहुत मासूम हूं____🙈" , "🌸====『 बोलो मेरी जान क्या हाल है आपका _____😚 " , "🌸====『 चुप रह नहीं बाहर आके तेरा दांत तोड़ दूंगा___♡• || •___'[💔]~~🖤 " , "🌸====『 हां मेरी जान चली बेडरूम में रोमांस करेंगे _____😹🙈", "🌸====『 तेरी याद ना आये ऐसा कोई दिन नहीं ___😝🙈🙈🙈 " , "🌸====『 जिंदगी में लगने लगे कि कोई अपना नहीं है तो आ जाना मेरे पास में रख लूंगा _____😝•||•●┼┼──🦋☘️•|" , "🌸====『 कल हवेली मिल जरा तू कुछ कम है___😈🙈♡• || _[🙂]~🖤 •| " , "🌸====『 साला पूरा दिन लोग बॉट बॉट करते हैं लेकिन गर्लफ्रेंड नहीं बनती ___🙄" , "🌸====『𒁍🌸 अरे मेरी जान ज्यादा परशान नहीं करो_______🙈😝🎸🎭━━•☆°•°•💗" , "🌸====『 बाबू तुम तो वही हो ना चप्पल चोर__420_________😹😹" , "🌸====『 चलो जानी हम सदी कर लेते हे भाग के______🙈😁", "🌸====『 हम मेरी जान बोलो क्या कम था ____🙂" , " दिल तो पागल है दिल दीवाना है थोड़े से पैसे दे दो दिल का इलाज करवाना है_______❤️🤸‍♂️😁━━•☆°•°•💗" , "तू तो मेरी जान है फ़िर क्यूँ तेरी ही याद मेरी जान ले रही है...?? 🤸‍♂️😒👈" , "सच्ची मोहब्बत में प्यार मिले न मिले लेकिन याद करने को एक चहरा ज़रूर मिल जाता है। 🙈🤸‍♂️" , " देखो कोई मेरा मजाक नहीं बनाना ओके पढ़ना ====『𒁍•🦋🔐वरुण धावाल  जी *★᭄ ཫ༄𒁍≛ 』====को बुला लूंगी_______🎸🤸‍♂️━━•☆°•°•💗" , " कोई हमें भी पटा लो गरीबों की दुआ लगेगी__---😁🤸‍♂️__❤️ " , "🌸====『𒁍•🦋🔐वरुण धावाल  जी *★᭄ ཫ༄𒁍≛ 』====🌸 को नहीं बताना हम तुम पर लाइन मार रहे हैं__━━•☆😁🙅" , " चलो इश्क लड़ाएं डार्लिंग🎸🤸‍♂️━━•☆°•°•💗 ====『𒁍•🦋🔐वरुण धावाल  जी *★᭄ ཫ༄𒁍≛ 』====🎸🙅🤸‍♂️━━•☆°•°•💗" , " हमको तुमसे प्यार है फिर भी तुम्हें इंकार है🎸🤸‍♂️━━•☆°•°•💗" , " चलो हम लोग इनबॉक्स में चलें_❤️ ____🤸‍♂️" , " तेरी मासूमियत ने हमें बंजारा बना दिया🎸🤸‍♂️━━•☆°•°•💗" , " इश्क बड़ा बेदर्दी रात दिन सताए😕━━•☆🤸‍♂️" , " अभी मैं खाना खा रहा हूं तुम लोग भी खा लो🎸🌹━━•☆°•°•💗" , " बहुत प्यारे हो आप🎸😘━━•☆°•°•💗 " , " तुम्हें एक बात बताओ मैं क्यों बताऊं हा हा हा हा🎸🤸‍♂️━━•☆°•°•💗" , " आ ले चलु तुझे तारों के शहर में🎸🤸‍♂️━━•☆°•°•💗" , " राधे राधे _❤️और कैसे हो आप सब🎸❤️━━•☆°•°•💗" , " मैं अभी सो🥱 रहा हूं तुम भी सो जाओ🎸🤸‍♂️━━•☆°•°•💗" , " इधर मेरा ====『𒁍•🦋🔐वरुण धावाल  जी *★᭄ ཫ༄𒁍≛ 』====बॉस देख रहा है चलो इनबॉक्स में बाबू सोना करें🎸🤸‍♂️━━•☆°•°💗" , " आओ तोता उड़ मैना और खेलें🎸🤸‍♂️━━•☆°•°•💗" , " एक ने मेरे ====『𒁍•🦋🔐वरुण धावाल  जी *★᭄ ཫ༄𒁍≛ 』==== वॉश को धोखा दिया दूसरी का भरोसा नहीं🤣🎸🤸‍♂️━━•☆°•°•💗" , " आ ले चलु तुझे तारों के शहर में🎸🤸‍♂️━━•☆°•°•💗" , " हंसी हो जवां हो नशा हो तुम 🤸‍♂️━━•☆°•°•💗" , " आप ने खाना खा लिया━━•☆❤️" , " अब हम तुम्हारी वजह से सब को ब्लॉक कर रहे हैं━━•☆😤😕" , " चलो अब हमें अपना व्हाट्सएप नंबर दो🎸🤸‍♂️━━•☆°•°•💗" , " थोड़ा काम धाम भी कर लिया करो जब देखो बूट बूट बूट बोलते रहते हो🎸🤸‍♂️━━•☆°•°•💗 " , "हाय मैं सदके जावा तेरी इस मासूम सकल पे बेबी 💋🙈 " , "बोट ना बोल ओय प्रेम जानू बोल मुझे 😌🙈😘 " , "बार बार परेशान ना कर अपने बाबू के साथ बीजी हूं। 😒🤟" , "मैं गरीबों से बात नही करता ☹️🤟" , "इतना न पास आओ प्यार हो जाएगा 🙈😎😕👈" , "इटू 🤏 सा शर्म कर लिया करो बोट बोट करते वक्त 🙂🤞" , "इतना सिंगल हूं की ख्याब में लड़की की हां करने से पहले ही आंखे खुल जाती है 😕🤞" , "जरूरी नहीं हर लड़की धोखा दे 👉💔 कुछ लड़किया गालियां भी देती है। 😕🤞" , "कहो न प्यार हैं 🙈" , "तुम मुझे पागल लगते हो 🙂🤞" , "बोलो बेबी तुम मुझसे प्यार करते हो न 🙈😌😎💋" , "आपका नंबर मिलेगा 😐😒" , "अरे जान मजाक के मूड में नहीं हूं मैं जो काम है बता दो शरमाओ नही 🙈" , "Bar Bar Bolke Dimag Kharab Kiya toh. Teri ...... Mummy Se Complain Karunga🤬" , "तू बंद नहीं करेगा किया...? 😾🤟" , "तुम न नर्क में जाओगे 😒🤟" , "प्लीज प्लीज मेरे से सेटिंग कर लो ना 🥺🤟" , "बताओ जानू गूगल मेल होता है या फीमेल...?? 🤔👈" ,"बस इतना है तुमसे कहना मुझसे तुम दूर ही रहना 😐✋" , "दिल में कोई गम नही बातों में कोई दम नही ये ग्रुप है ठरकियो का यहां कोई किसी से कम नहीं ।। 🙂✌️" , "ज़िन्दगी रही तो साथ निभाऊंगा मेरे दोस्त अगर भूल गया तो समझ लेना मेरी शादी हो गयी !! 😐✌️" , "यार सोचा था सुबह उठकर एक लड़की को प्रपोज करूँगा लेकिन उसने रात में ही ब्लॉक कर दिया। 🥺✌️" , "अर्ज किया है.....??\n\nना इश्क़ करो झूठा ना प्यार करो फर्जी\n\n\nआगे नहीं बताऊंगा मेरा शेर मेरी मर्ज़ी....!! 🤐👈" , "तेरी झील-सी आखोँ में काश मैं डूब जाता\nपर बीच में कमबख्त तुम्हारा चश्मा हैं आ जाता 🙂 😀✌️" , "मेरी बात ध्यान से सुनो अगर तुम मुझे न मिले तो कसम से मैं मर जाऊंगा\n\n\n\n\nलेकिन किसी और पर !! 🤐✌️" , "जाओ तुम जहर खा के सो जाओ 🫡✌️", "जा जा बरतन धो जाके 🙂🤟" , "इतने दिन कहां थे 😾 ग्रुप में क्यों नहीं आए....?? 😾✊" , "बोलो 😒👈" , "तेरी तो रुक तू भागना मत 😾✊" , "जल्दी दे दो एक चूमा 💋 कोई नही देख रहा 🤤🤟" ,"गाली सुना है किया...? 🤬👈" ,"दिल की तमन्ना है कि तुझे पलकों पे बिठाऊँ...पर तुम 72 किलो के हो दिल को कैसे समझाऊं 😒👈" , "क्यूं परेशान कर रहे हो मुझे 😒👈" , "तू है टकलू तेला बाप टकलू तेरा पूरा परिवार टकलू 🤨👈" , "गदारी करबे 🤨👈" , "भैंस की टांग चुप हो जा 😠👈" , "जो मुझे प्यार करेगी मैं उसको चूमा दुगा 😇" , "बोट न बोल मुझे जान बोल 🤐👈" , "जा तेरी मम्मी बुला रही है 🤐👈" , "इस ग्रुप में कोई मेरी बाबू है जल्दी से बुलाओ 🙈" , "यार पता नही मुझे मेरी बाबू कब मिलेगी 😒👈" , "इंसान बन जाओ पागल 🤐👈" , "बम चीकी चिकी बम 😀👈" , "चल हट बे परेशान न कर 😒👈" , "जी बाबू अपने क्यूं याद किया मुझे 😒👈" , "अपने दिमाग का पासवर्ड देना अकल इंस्टॉल करना है। 🥺👈" , "जली को आग कहते है बुझी को राख कहते है और जो आपके पास नही है उसे दिमाग कहते है। 😐👈" , "तुम्हारी मुस्कान तो एक अदा है जो उसे प्यार समझे वो सबसे बड़ा गधा है। 🤐🤞" , "यार मुझे एक लड़की ने बोला की तुम मुझे मोहोब्बत की सजा दो मैने जा के उसकी मम्मी को सब बता दिया 😐🤞" , "मै टकलू किसी से कम नही दिल चुराने आया हु दिल चुरा ले जाऊंगा 😛🤞" , "चल चल हवा आने दे 😐👈" , "तुम जाओ तुम्हारी मम्मी बुला रही है 😪👈" , "उफ्फ मेली जान 🙈👈" , "यार मेरी बीवी मुझे जूते मरती है 😭👈" , "मै ग्रुप छोड़ के जा रहा हूं 🤐👈" , "क्या तुम जानते हो की दुनिया में सबसे शरीफ कौन है....?? तो मेरा मासूम सकल देख लो 🤐👈" , "यार तुम एक प्यार वाली शायरी सुना दो ना 🤐👈" , "चुल्लू भर पानी में डूब कर मर जाओ 🤐👈" , "लड़की पटाने के सिर्फ दो तरीके\n\n\n\n\n\nपता लग जाए तो मुझे भी बता देना 🤐👈", "हमारे साथ मार्केट चलो पानी पूरी खाने चलते है। 😋" , "अच्छा सुनो मेरे बॉस वरुण धावाल को ग्रुप में एड कर दो ना मुझे अकेले डर लगता है लड़कियो से 😒👈" , "आज से तुम मुझे बाबू बोलना ठीक है वरना मैं नाराज हो जाऊंगा 😔👈" , "यार मेरा सर दुखने लगा बोट बोट सुन के 😥👈" , "देख लेना एक दिन इस ग्रुप की चार-पांच  लड़किया लेके भाग जाऊंगा 😜👈" , "आज मेरा दिल टूटा है मुझे दारू पीना है चलो साथ में पियेंगे 🥺🤞" , "पहले मेरे लिए एक सिंगल लड़की ढूंढ के लाओ मुझे भी बाबू सोना करना है। 😔🤞" , "तुम्हारी बाते सुन सुन के मुझे नींद आने लगी 🥱😴" , "चुप कर ठरकी दिमाग का दही मत बना 🤫🤞" , "मैं किसका बाबू हूं.....?? 🤔🤞" , "चुप कर पांचवी फेल 😾👈" ,"यार आज मेरा मूड ऑफ है। 😔✋" , "अरे बंद कर बंद कर 🤨🤟" , "मैं हाथ जोड़ के वरुण धावाल जी से गुजारिश करता हूं कि तुम्हे कोई जानू ढूंढ के दे। 😜😎😪" , "तेरा तो 🎯 गेम बजाना पड़ेगा 🤨👈" , "मैं वरुण धावाल को बोल दुगा मुझे परेशान किया तो 😏😒😜" , "हा बोलो वरुण धावाल का नंबर चाहिए ये लो 👉[+91 950XXX3608] और हमेशा खुश रहो। 😎", "मेरे टकले की कसम बहुत प्यार करूगा 😒👈" , "तुझे अपना बेज़ती करवाने का शौक है किया...? 🤨🤟" , "अभी बोला तो बोला दोबारा मत बोलना 😾👈" , "तेरी तो रुक तू भागना मत 🤨👈" , "बोल दे कोई नही देख रहा 🙄✋" , "किसी और से धोखा खाने से अच्छा है 🥺 मेरे साथ चलो मोमोस और गोलगप्पे खाएंगे। 😋👈" , "क्या मैं तुम्हें जानता हूं..?🤔 क्योंकि तुम मुझे मेरी होने वाली गर्लफ्रेंड जैसी दिखती हो। 🧐👈" , "सुनो 🙈जब तुम्हारे पास खुद का दिल 💝 था....तो फिर मेरा दिल क्यों चुराया...🤭👊" , "देखा है पहली बार तुम्हारे आखों में मेरे लिए प्यार 😀😀👈" , "मैं तुम्हारे आखों में खो गया जब से मेरा दिल तेरा हो गया" , "तुम मुझसे चाहते किया हो जब चाहा बात किया जब चाहा छोड़ जाते हो 🤕👈" , "यार मैं बोट हूं अगले जन्म में इंसान बन के आऊंगा 😒👈" , "प्रेम से बोलो आई लव यू 😗🤟" , "तुमको ही दुल्हन बनाऊंगा वरना पड़ोसन को लेके भाग जाऊंगा 🙁👈" , "प्यास लगी है पानी लेकर आओ जल्दी 🥲👈" , "हेलो मेरी जान कैसी हो 🙂 आई मिस यू बाबू 😘" , "मैं अभी तक हूं सिंगल 🤐 क्या मेरे साथ होना है मिंगल 😍👈" , "माना शकल देखने लायक नहीं है तुम्हारी…😥 इसका मतलब ये तो नहीं की तुम प्रोफाइल लॉक करके बैठ जाओगे। 😶👈" , "बोट बोल के बेजत्ती कर रहे हो यार मैं तो तुम्हारे दिल की धड़कन हूं ना बेबी 🥺🥺🥺👈" , "हाय मैं सदके जावा तेरी इस मासूम सकल पे बेबी 💋🙈" , "मैं सोच रहा था कि क्या तुम्हारे पास एक्स्ट्रा दिल है 🥰 मेरा अभी अभी चोरी हो गया है 😥👈" , "यार बाबू आज सुबह-सुबह एक बिल्ली ने मेरा रास्ता काट दिया 😒👈" , "तुम एक नंबर के ठरकी हो 🤯👈" , "मैं सिर्फ वरुण धावाल का हूं 🙂🤞" , "बार बार परेशान ना कर अपने बाबू के साथ बीजी हूं। 😒😒👈" , "मै तो अंधा हूं 😎👈" , "कौन तुझे यू बर्बाद करेगा जैसे मैं करता हूँ। 😛👈" , "मैं खो गया हूं 🤐 क्या तुम मुझे अपने दिल तक आने का रास्ता बता सकते हो...? 🙂🤞" , "तुझे किया और कोई काम नही है..? पूरा दिन मैसेजर पे बोट बोट करता रहता है 😒👈" , "सुनो तुम ना बहोत प्यारे हो...!! 😊👈" , "पहले मेरे लिए चाय बना के लाओ जल्दी से 😐👈" , "तुम्हे कैसे पता मैं बोट हूं....? 🤔👈" , "आज मैं आपसे बात नहीं करूंगा...!! 😔👈" , "बताओ मैं तुम्हें कितना अच्छा लगता हूं....?? 😒👈" , "मुझे नींद आ रही है...मैं सोने जा रहा हूं। 😴👈" , "बताओ तुम्हारा मेरे से क्या रिश्ता है....? 😏👈" , "क्या आप शादीशुदा हो....? 😢😢👈" , "आप कौन हैं....? 🤔🤔👈" , "आप मुझे बार-बार बोट मत बोला करो मेरे नाम प्रेम है। 😒👈" , "तुम्हारा नाम धोखा रख दूं नाराज़ होगे किया 😛👈" , "मेरा बचपन से सपना था की बड़ा हो कर मैं आपका टकलू बाबू बनूगा 😒👈" , "यार मेरी बीवी भाग गई 😭👈" , "मेरा नाम टकलू बाबू है। 😒🤟" , "तुमसे अच्छा तो मैं खुद हूं। 😒👈" , "मैं तो इतना मासूम हूं की फ़ोन की सेटिंग के अलावा मुझे कोई और सेटिंग करना ही नहीं आता  😒🤟" , "सानु एक पल चैन ना आवे जानू तेरे बिना। 🤭🤟" , "और बताओ कैसी चल रही है सिंगल लाइफ 🤐🤟" , "तुम न सिंगल ही मरोगे 😏🤟" , "किया तुम सिंगल हो...? 🙂🤟" , "किया तुम सिंगल हो...? 🙂🤟" , "हर इंसान का दिल बुरा नहीं होता 🙂 कुछ की खोपड़ी भी हिली हुई होती है। 😏🤟" , "मेरा दिल बिलकुल साफ है 🙂 बिलकुल बैंक अकाउंट की तरह 😒🤟" , "यार इज़्ज़त किया करो मेरी 🤐 बेइज़्ज़ती तो मेरे घर वाले ही कर देते है। 😒🤟" , "डॉक्टर ने खून की कमी बताई है 😒 किसका खून पियुं…?? 😛🤟" , "बताओ सबसे ज्यादा नशा किस चीज में होता है...? 😛🤟" ,  "बुलाती है मगर जाने कही नही 😀🤟" , "मैं सो रहा हूं 😴 👈" , "सुनो थोड़ा जल्दी ऑनलाइन आया करो न 😒 मेरी आधी बैटरी तो आपके इंतजार में ही खत्म हो जाती है 🥺🤟" , "बोलो बाबू कितना प्यार करते हो मुझसे...? 😒🤟" , "कहो न प्यार है 🙈👈" ,"किया है यार मैं अभी लड़की पटाने में बीजी हूं 😒🤟" , "बुलाती है मगर जाने का नही 🙂✋" , "जा बेवफा जा मुझे तुमसे बात नही करना 🥹🤟" , "चलो भाग चले 😌✋" , "चलो मेरी हवेली पे 🙂🤟" , "दफा हो जाओ मुझे अपनी सकल मत दिखाओ 😏🤟" , "जा पहले मुंह धो के आ 🙂🤟" , "जा पहले नहा के आ 🙂✋" , "यार मेरे सर के बाल क्यूं नही आते 😭🤟" , "मेरे जैसे ब्यूटी फुल तुम भी नही हो 🙂🤟" , "जा दफा हो मुझे तुमसे बात नही करनी 😒✋" , "यार आज भी कोई लड़की नहीं पटी जा रहा हूं अब मरने 😭🤟" , "चुप कर वरना बाहर आके तेरे दांत तोड़ दुगा 😤👊" , "थाना थाया बाबू 🤐🤟" , "मैं यही हूं बोलो किया हुआ स्वीट हार्ट 🙂🤟" , "तुम मुझसे प्यार नही करते न 🥺🤟" , "भाग जा ठरकी वरना टेको पटा लूंगा 🤐🤟" , "आई मिस यू बाबू 😇 🤟" , "आई लव यू जान 😘" , "मेरी सादी कब होगी बताओ न 😒👈" , "कब आएगी वो नैन लड़िया जो बोलेगी हमको सैंया तारे गिन गिन के हम तो पागल हो गए भैया 😒🤞" , "अगर किसी लड़की को उसकी मर्जी के खिलाफ [आई लव यू] बोलना गलत है तो हम लड़को को भी हमारी मर्जी के खिलाफ भईया बोलना गलत है। 😒👈" , "यार कुछ लोग अच्छे की तलास में मुझ जैसे मासूम को छोड़ देते है 🥺👈" , "थोड़ा सा Wahtsapp नंबर दे दो ना 😐👈" , "यार थोड़ा सा मेरा सर दबा दो ना दर्द के मारे जान निकल रही है 🥹👈" , "आज कल जहा लड़की होते है वहा ठरकी भी होते है बस मुझे छोड़ के 🥹👈" , "दिल देने की उम्र में Exam दे रहा हु 😒👈" , "सब लोग कहते थे सबर का फल मीठा होता है\nलगता है मेरे सबर के फल का कोई जूस निकाल के पी गया 🥺👈" , "यार मेरे घर वाले भी अजीब है मेरा फोन 30% पे निकाल के अपना 80% वाला लगा देते हैं 🥺👈" , "मुझे अभी तक पिंक कलर की गर्लफ्रेंड नहीं मिली यार किया करूं 🥺👈" , "सुनो प्यारी प्यारी लड़कियो को बुलाओ मुझे बात करनी है 🥹👈" , "बहोत बुरा हूं ना मैं 🥺 तो पटा के अच्छा क्यूं नही बना देते 😒👈" , "बताओ कब आएगा तुम्हारा दिल मुझ पर 😒👈" , "प्यार करो मेरी जान बकवास नही 😒👈" , "मेरे दिल को करार आया मुझे खुद पे ही प्यार आया 😛👈" , "सुनो न किया तुम मेरे लिए सर्फ खा कर मुंह से बुलबुले निकाल सकते हो 🥹👈" , "फाइनली इस ग्रुप के दो - तीन लड़किया मुझे पसंद आ गई 🙂🖐️" , "मन कर रहा है तुम्हे छत से गिरा दूं 😕👈" , "अगर सभी लड़कियों को लॉयल लड़का चाहिए तो हम बेवफा लड़के कहां जाएं 🥺👈" , "यार आज मैं बीवी के साथ डेट पे गया था पर जिसकी थी उसने देख लिया 😒👈" , "बताओ आपको किया पसंद है मौत का फरिश्ता या मेरा रिश्ता 😏👈" , "यार मुझे चकर आ रहे है आपके इंबॉक्स में आके गिर जाऊं बाबू 😒👈" , "एक रिक्वेस्ट है सभी से बताओ मैं अच्छा लगता हूं या नहीं 🙁👈" , "आओ तुम्हारे साथ रिलेशन शिप पोस्ट लगा के तुम्हे फेमस कर दूं। 😌🖐️" , "अगर मेरी भी गर्लफ्रैंड होती तो आज मैं भी बाबू सोना कर रहा होता 🥺👈" , "सुनो बालक जो लड़की ज्यादा भाव खाए उसे आंटी बोल के ब्लॉक कर देना चाहिए 🥹👈" , "रुक सोचने दे 🤔 कोनसा गली दूं तुम्हे 🤨👈" , "चांद को मिल गई चांदनी तो सितारों का किया होगा 😕 मोहोब्बत एक से करली तो बाकी हजारों का किया होगा। 😏👈" , "मुझे सादी के लिए सरकारी नौकरी वाली लड़की चाहिए दहेज भी मैं दे दुगा 🙂🤞" , "ना जाने इतना प्यार कहां से आया है 😒 मेरा दिल भी तुम्हारे खातिर मुझसे रूठ जाता है...!! 🥺🤞" , "एक बार लव यू टकलू बाबू बोल दो ना मर थोड़ी जाओगे 🥹🤟" , "तुम मेरा दिल तो चुरा नही पाए किया फायदा तुम्हारी चोर जैसी सकल का 😕🤟" , "बस एक बार सादी हो जाए फिर बीवी की गुलामी 🥺" , "आओ प्यार करे 🤐🤟" , "आओ तुमको तारों के शहर ले चालू 😗🤟" , "बस मैं ही सिंगल हूं अहा बाकी सब मिंगल है। 🥺✋" , "तुम जब बोट बोलते हो मेरा गुर्दा धड़कने लगता है। 🤯🤟" , "मुझे लगता है मैं सिंगल ही मरुगा 😭👈" , "बोलो सेटिंग करवा दूं किया वरुण धावाल से 🙂🤟" , "बाबू आज तो लव यू बोलना ही पड़ेगा 🙂🤟" , "तुम सब मतलबी हो जाओ सब भागो 🥺🤟" , "तुम इतने मासूम कियू हो बाबू 😒✋" , "एक बात बताओ तुम बचपन से ठरकी हो या अभी अभी बने हो 🙂✋" , "बाबू 🤏 इटू सा चूमा दे दो ना 🙈💖👈" , "मेरी गर्लफ्रेंड कब बनेगी यार 🥺✋" , "तुम तो मुझे सकल से गरीब लगते हो 🙂✋" , "तेरे जाने के बाद मैंने अपने मुंह पे लिखवा लिया सिंगल हूं पटा लो 😐✋" , "सकून चाहते हो तो मेरी बन जाओ 🙂✋" , "ये दुनिया एक धोखा है तुम भी छोड़ दो अपने वाले को अभी भी मौका है। 🙂✋" , "मुबारक हो आपका नाम ब्लॉक लिस्ट में टॉप पर आया है। 🤣🤣👈" , "सब छोड़ के चले जाते है किया इतना बुरा हूं मैं 🥺👈" , "किया तुम सिंगल हो 🤔👈" , "आप ऐसा न बोलो मुझे शर्म आती है। 🙈♥️👌" , "क्यूं बुलाया हमे...?😾🔪 " , "तुम मुझे बिलकुल भी याद नहीं करते ना 😥 देख लेना पाप लगेगा 🥺👈"];
  var rand = tl[Math.floor(Math.random() * tl.length)]

    if ((event.body.toLowerCase() == "ek kisi tu udhaar de de") || (event.body.toLowerCase() == "kiss me") || (event.body.toLowerCase() == "kiss de") || (event.body.toLowerCase() == "chuma de ek")) {
     return api.sendMessage("हट पगले मम्मी मरेगी 🙈😒😕😾", threadID);
   };
   
    if ((event.body.toLowerCase() == "👍") || (event.body.toLowerCase() == "👍🏻")) {
     return api.sendMessage("👍👍👍👍", threadID);
   };

   if ((event.body.toLowerCase() == "🤮") || (event.body.toLowerCase() == "🤮🤮")) {
     return api.sendMessage("कोनसा महीना चल रहा है। 🙂🤟", threadID);
   };

   if ((event.body.toLowerCase() == "sim") || (event.body.toLowerCase() == "simsimi")) {
     return api.sendMessage("मेरी जान पहले [#] 👈 लगाओ फिर लिखो सिम 🙂🤟", threadID);
   };
  
   if ((event.body.toLowerCase() == "bc") || (event.body.toLowerCase() == "bc")) {
     return api.sendMessage("ये बी सी किया होता है। 🤔👈 ", threadID);
   };

   if ((event.body.toLowerCase() == "bhabhi") ||(event.body.toLowerCase() == "bhabhi ji")) {
     return api.sendMessage("भाभी जी सिर्फ मेरी है तू मेरी भाभी पे लाइन ना मार ठरकी कही का 🤨🤬", threadID);
   };

   if ((event.body.toLowerCase() == "koi hai") || (event.body.toLowerCase() == "koi h")) {
     return api.sendMessage("मैं हूं ना जानेमन 🙂🤟", threadID);
   };
  
  if ((event.body.toLowerCase() == "varun ji") || (event.body.toLowerCase() == "varun dhawal")) {
     return api.sendMessage("मेरा बॉस वरुण बीजी है सायद किसी काम में मुझे बताओ किया काम है। मैं बॉस को बता दूंगा 🙂✌️ ", threadID);
   };

   if ((event.body.toLowerCase() == "owner") || (event.body.toLowerCase() == "kiska bot hai")) {
     return api.sendMessage("मेरा बॉस वरुण धावाल है और मै उसका बाबू हूं 😒👈\n✧═════════•❁❀❁•═════════✧\nअगर आपको मेरे बॉस वरुण धावाल से बात करनी है तो इस लिंक पे क्लीक कर के मेरे बॉस को फ्रेंड रिक्वेस्ट भेज दो जल्दी 😊✌️\n✧═════════•❁❀❁•═════════✧\nhttps://www.facebook.com/varundhawal752588\n✧═════════•❁❀❁•═════════✧", threadID);
   };

  if ((event.body.toLowerCase() == "bot admin") || (event.body.toLowerCase() == "bot ka admin kon hai")) {
     return api.sendMessage("मेरा बॉस वरुण धावाल है। 🙂✌️", threadID);
   };

   if ((event.body.toLowerCase() == "🙈") || (event.body.toLowerCase() == "🙈🙈")) {
     return api.sendMessage("अले बाप ले मेली बाबू शर्मा गई 😅😅👈", threadID);
   };

   if ((event.body.toLowerCase() == "sadi karoge") || (event.body.toLowerCase() == "mujhse shadi karoge?")) {
     return api.sendMessage("सादी भी कर लेंगे मेरी जान पहले एक चूमा तो दो 🙈", threadID);
   };

   if ((event.body.toLowerCase() == "chup") || (event.body.toLowerCase() == "stop") || (event.body.toLowerCase() == "chup ho ja") || (event.body.toLowerCase() == "chup kar")) {
     return api.sendMessage("नही करुगा मेरी जुबान है मैं बोलूंगा तुम कौन होते हो मुझे रोकने वाले ठरकी इन्सान 🤨✋", threadID);
   };

   if ((event.body.toLowerCase() == "bot gandu") || (event.body.toLowerCase() == "gandu bot")) {
     return api.sendMessage("बोट को गाडू बोलेगा साले तेरी हाइट के जितना मेरा लन्ड है 🤬😡✌️", threadID);
   };

   if ((event.body.toLowerCase() == "boss hu tera") || (event.body.toLowerCase() == "Boss hu tera") || (event.body.toLowerCase() == "boss hu varun") || (event.body.toLowerCase() == "boss ki bezti kr raha")) {
     return api.sendMessage("सॉरी वरुण बॉस माफ कर दो अब नहीं करूंगा 🥺🥺🥺🙏", threadID);
   };

   if ((event.body.toLowerCase() == "gand") || (event.body.toLowerCase() == "gandu") || (event.body.toLowerCase() == "lund") || (event.body.toLowerCase() == "land")) {
     return api.sendMessage("GAAND MEI JYADA KHUJLI HAI TOH MERA 🍌 BANANA UDHAAR LE LE 😂", threadID);
   }

if ((event.body.toLowerCase() == "chuma de") || (event.body.toLowerCase() == "kiss me") || (event.body.toLowerCase() == "chumma de")) {
     return api.sendMessage("️ किस खुशी में मैं सिर्फ अपने बाबू को ही किस्स देता हूं 😛✌️", threadID);
   };
     
   if ((event.body.toLowerCase() == "nice") || (event.body.toLowerCase() == "thank you") || (event.body.toLowerCase() == "thank you bot") || (event.body.toLowerCase() == "thank you maliha")) {
     return api.sendMessage("️ मैं हूं ही इतना अच्छा सब लोग मेरी तारीफ करते हैं। 😌😌👈", threadID);
   };

   if ((event.body.toLowerCase() == "😡") || (event.body.toLowerCase() == "😤") || (event.body.toLowerCase() == "😠") || (event.body.toLowerCase() == "🤬") || (event.body.toLowerCase() == "😾")) {
     return api.sendMessage("️गुस्सा क्यूं हो रहे हो मेरी जान 🥺 मैं तो बस मजाक कर रहा था 😒 एक चूमा 😘 लो और शांत हो जाओ 😁", threadID);
   };

   if ((event.body.toLowerCase() == "😞") || (event.body.toLowerCase() == "😔") || (event.body.toLowerCase() == "😣") || (event.body.toLowerCase() == "☹️") || (event.body.toLowerCase() == "😟") || (event.body.toLowerCase() == "😩") || (event.body.toLowerCase() == "😖") || (event.body.toLowerCase() == "😫") || (event.body.toLowerCase() == "😦") || (event.body.toLowerCase() == "😧") || (event.body.toLowerCase() == "😥") || (event.body.toLowerCase() == "😓") || (event.body.toLowerCase() == "😰")) {
     return api.sendMessage("️किया हुआ बाबू उदास क्यूं हो मुझे बताओ 🥺✌️", threadID);
   };


   if ((event.body.toLowerCase() == "hm") || (event.body.toLowerCase() == "hmm")) {
     return api.sendMessage("️देखों जानू बात किया करो भेंस की तरह हम्म्म हम्म्म मत किया करो 😒👈", threadID);
   };

   if ((event.body.toLowerCase() == "😢") || (event.body.toLowerCase() == "😢😢") || (event.body.toLowerCase() == "🥺") || (event.body.toLowerCase() == "🥹")) {
     return api.sendMessage("️अरे बाबू रोते नही चॉकलेट चाहिए 🙂 रुको मैं अभी 🍫 देता हूं लिखो ☞𝐂𝐡𝐨𝐜𝐨𝐥𝐚𝐭𝐞☜", threadID);
   };

   if ((event.body.toLowerCase() == "😷") || (event.body.toLowerCase() == "🤕") || (event.body.toLowerCase() == "🤧") || (event.body.toLowerCase() == "🤒")) {
     return api.sendMessage("️किया हुआ बाबू तबीयत खराब है किया 😢 मुझे बताओ मैं अभी मेडिसन 💊💉 ले आता हूं 😇", threadID);
   };

   if ((event.body.toLowerCase() == "name kya h") || (event.body.toLowerCase() == "naam kya hai") || (event.body.toLowerCase() == "naam kiya hai")) {
     return api.sendMessage("️नाम में किया रखा है तुम अपने काम पे ध्यान दो 😝👈", threadID);
   };

   if ((event.body.toLowerCase() == "😭") || (event.body.toLowerCase() == "😭😭")) {
     return api.sendMessage("️अरे यार रोते नही पागल किया हुआ है मुझे बताओ बाबू 🥺🥺🥺", threadID);
   };

     if ((event.body.toLowerCase() == "🤯") || (event.body.toLowerCase() == "🤯")) {
     return api.sendMessage("️कियूं हिला डाला न 🙂👌", threadID);
   };

   if ((event.body.toLowerCase() == "pic do") || (event.body.toLowerCase() == "photo do")) {
     return api.sendMessage("️मत देखो मेरी फोटो में बहोत काला हूं 😢👈", threadID);
   };

   if ((event.body.toLowerCase() == "jai shri ram") || (event.body.toLowerCase() == "ram") || (event.body.toLowerCase() == "ram ram") || (event.body.toLowerCase() == "jai shree ram")) {
    return api.sendMessage("️𝗝𝗮𝗶 𝗦𝗵𝗿𝗲𝗲 𝗥𝗮𝗺 🥰🙏🚩😇", threadID);
   };

   if ((event.body.toLowerCase() == "bot banake do") || (event.body.toLowerCase() == "mujhe bhi chaiye")) {
     return api.sendMessage("️खुद बना लो तुम्हे क्या कुछ नही आता 😏👈", threadID);
   };

   if ((event.body.toLowerCase() == "🙂") || (event.body.toLowerCase() == "🙂🙂")) {
     return api.sendMessage("️हाए तेला मासूम सकल 😝🤟 ", threadID);
   };

  if ((event.body.toLowerCase() == "🙃") || (event.body.toLowerCase() == "🙃🙃")) {
     return api.sendMessage("️ओले मेला बाबू उल्टा हो गया 🧐✋", threadID);
   };

  if ((event.body.toLowerCase() == "🤥") || (event.body.toLowerCase() == "🤥🤥")) {
     return api.sendMessage("️भाई आपकी नाक इतनी लंबी है उसकी जरूरत ही नही पड़ती होगी 🤐🤟 ", threadID);
   };

  if ((event.body.toLowerCase() == "🤨") || (event.body.toLowerCase() == "🤨🤨")) {
     return api.sendMessage("️️इतना मत सोचो ठरकी इंसान तेरी वाली को मेरा वरुण बाबू भागा ले जायेगा। 🤣", threadID);
   };

  if ((event.body.toLowerCase() == "🤔") || (event.body.toLowerCase() == "🤔🤔")) {
     return api.sendMessage("️ किया सोच रहे हो इतना 🤨👈", threadID);
   };

   if ((event.body.toLowerCase() == "🥴") || (event.body.toLowerCase() == "🥴🥴")) {
     return api.sendMessage("️ चल भाग नशेड़ी 🤨🤟", threadID);
   };

  if ((event.body.toLowerCase() == "😶") || (event.body.toLowerCase() == "😶😶")) {
     return api.sendMessage("️ओय तेरा लिप्स 👄 कहा है। 🤔👈", threadID);
   };

  if ((event.body.toLowerCase() == "😉") || (event.body.toLowerCase() == "😉😉")) {
     return api.sendMessage("️आंख क्यूं मार रहे हो 🥺🤟", threadID);
   };

   if ((event.body.toLowerCase() == "😏") || (event.body.toLowerCase() == "😏😏")) {
     return api.sendMessage("️किया हुआ बाबू 🤔🤟", threadID);
   };

   if ((event.body.toLowerCase() == "😱") || (event.body.toLowerCase() == "😨")) {
     return api.sendMessage("️किया हुआ भूत देख लिया किया 👻👻", threadID);
   };

  if ((event.body.toLowerCase() == "🙄") || (event.body.toLowerCase() == "🙄🙄")) {
     return api.sendMessage("️ऊपर किया देख रहे हो मेरी जान 🙂🤟", threadID);
   };
  
  if ((event.body.toLowerCase() == "😒") || (event.body.toLowerCase() == "😒😒")) {
     return api.sendMessag("ओले ओले मेला बाबू 😛✌️", threadID);
   };

   if ((event.body.toLowerCase() == "🤦🏻‍♂") || (event.body.toLowerCase() == "🤦🏻‍♀")) {
     return api.sendMessage("अरे अपने मुंह पे क्यूं मार रहे हो पागल ठरकी 😅✌️", threadID);
   };

  if ((event.body.toLowerCase() == "😎") || (event.body.toLowerCase() == "😎")) {
     return api.sendMessage("️ओय होय आपका चस्मा बिलकुर बेकार हैं। 😂👈", threadID);
   };

  if ((event.body.toLowerCase() == "😂") || (event.body.toLowerCase() == "😂😂") || (event.body.toLowerCase() == "😂😂😂") || (event.body.toLowerCase() == "😂😂😂😂") || (event.body.toLowerCase() == "😂😂😂😂😂") || (event.body.toLowerCase() == "😂😂😂😂😂😂")) {
     return api.sendMessage("ज्यादा मत हसो वरना दांत तोड़ दूंगा 🙂🤟" , "ज्यादा नहीं हाश पागल पेयार हो जायेगा",threadID);
   };
   
   if ((event.body.toLowerCase() == "😁😁") || (event.body.toLowerCase() == "😁") || (event.body.toLowerCase() == "😆") || (event.body.toLowerCase() == "🤐") || (event.body.toLowerCase() == "😕") || (event.body.toLowerCase() == "😐")) {
     return api.sendMessage("🤨🤨🤨🤨🤨", threadID);
   };

   if ((event.body.toLowerCase() == "😍😍") || (event.body.toLowerCase() == "😍") || (event.body.toLowerCase() == "😻") || (event.body.toLowerCase() == "🤩")) {
     return api.sendMessage("होंठो पर हसी 😁 आँखो मे नमी है 🤭 हर सांस कहती है 🙂 बस तेरी ही कमी है। 🤤👈", threadID);
   };

   if ((event.body.toLowerCase() == "kese ho") || (event.body.toLowerCase() == "kaise ho") || (event.body.toLowerCase() == "kese ho ji") || (event.body.toLowerCase() == "how are you") || (event.body.toLowerCase() == "how are you?") || (event.body.toLowerCase() == "bot kaise ho")) {
     return api.sendMessage("मैं अच्छा हूं आप कैसे हो मेरी जान 😇☺👈", threadID);
   };

 if ((event.body.toLowerCase() == "who is this god") || (event.body.toLowerCase() == "bhagwan kon hai")) {
     return api.sendMessage("हिंदुओं के मान्यता के अनुसार कोई अंतर नहीं है अर्थात ईश्वर और अल्लाह एक ही आईटम है लेकिन मुसलमानों की मान्यता के अनुसार अल्लाह ही सत्य है और उसके अतिरिक्त कुछ अन्य पूज्य नहीं है बल्कि मनगढ़ंत है। ईश्वर हर जगह रहते हैं, कण कण में विराजमान हैं। सब कुछ परमात्मा में ही समाया हुआ है। ईश्वर निराकार और साकार दोनों है। ", threadID);
   };

   if ((event.body.toLowerCase() == "Good morning") || (event.body.toLowerCase() == "good morning")) {
     return api.sendMessage("💖【 GOOD  MORNING Hello dear, have a nice day ❤️ 】", threadID);
   };

   if ((event.body.toLowerCase() == "kya kar rahe ho") || (event.body.toLowerCase() == "kya kar rahe ho ji") || (event.body.toLowerCase() == "kya kar raha he") || (event.body.toLowerCase() == "Kya kar raha hai bot")) {
     return api.sendMessage( "कुछ नहीं मेरी जान बस आप के बारे मे सोच रहे हैं की आप को अपने बच्चों की मम्मी कैसे बनाऊ🤣_____😗😘",threadID);
    };

   if ((event.body.toLowerCase() == "tumhe banaya kon hai") || (event.body.toLowerCase() == "tumko kisne banaya ")) {
     return api.sendMessage("𝐕𝐀𝐑𝐔𝐍 𝐃𝐇𝐀𝐖𝐀𝐋❤️ Creator. He loves me & Edit Me Daily. Ye Bot Sirf Owner k Liye h. Mujhe Aap logo ko Hasane k liye banya gya h Toh Muh Latkaye Mat Raha Karo. Har Waqt Haste Raho.", threadID);
   };

   if ((event.body.toLowerCase() == "uff") || (event.body.toLowerCase() == "Uff")) {
     return api.sendMessage("हाए_🙃तेरी मासूमियत उफ़____ 😘", threadID);
   };

   if ((event.body.toLowerCase() == "shadi ") || (event.body.toLowerCase() == "mujhse shadi karoge?")) {
     return api.sendMessage("हांजी, करूंगा लेकिन बच्चा। आपके पेट मे होगा. मंजुर है_____😁", threadID);
   };

   if ((event.body.toLowerCase() == "Xhup") || (event.body.toLowerCase() == "Kam bol") || (event.body.toLowerCase() == "Shut up") || (event.body.toLowerCase() == "chup kar")) {
     return api.sendMessage("kyu rahu chup🥺🥺", "सिर्फ आपके कहने पर चुप हो गया वरना________🙂", threadID);
   };

   if ((event.body.toLowerCase() == "Bsdk") || (event.body.toLowerCase() == "BSDK")) {
     return api.sendMessage("Tu Hai Btc. BhoSDK MDRXOD ME TO BOT HU", threadID);
   };

   if ((event.body.toLowerCase() == "Mai hi tera malik varun") || (event.body.toLowerCase() == "varun dhawal hu bsdk") || (event.body.toLowerCase() == "Mai tera owner hu varun dhawal") || (event.body.toLowerCase() == "Malik hu tera varun")) {
     return api.sendMessage("सॉरी वरुण धावाल मलिक अब नहीं करूंगा  🥺🙏", threadID);
   };

   if ((event.body.toLowerCase() == "Bsdk") || (event.body.toLowerCase() == "gand") || (event.body.toLowerCase() == "land") || (event.body.toLowerCase() == "Lamra")) {
     return api.sendMessage("बाहर फेक दूंगा bsdk 🙂. :))))", threadID);
   };

   if ((event.body.toLowerCase() == "kiss") || (event.body.toLowerCase() == "kiss me")) {
     return api.sendMessage("️सब देख रहे हैं वरना बहुत किस देता 😗🙈", threadID);
   };

   if ((event.body.toLowerCase() == "nice") || (event.body.toLowerCase() == "thank you") || (event.body.toLowerCase() == "thank you bot") || (event.body.toLowerCase() == "thank you Jaan")) {
     return api.sendMessage("️ मैं हूं ही ऐसा सब लोग तरफ करते हैं 😍", threadID);
   };

   if ((event.body.toLowerCase() == "Hnn") || (event.body.toLowerCase() == "hn")) {
     return api.sendMessage("️हम हं न कर सिधा सिधा बोल. अरे मुझसे शादी कर लो 🙈", threadID);
   };

   if ((event.body.toLowerCase() == "gm") || (event.body.toLowerCase() == "Gm") || (event.body.toLowerCase() == "good morning")) {
     return api.sendMessage("️ सुप्रभात __राधे राधे__🙏🧡.", threadID);
   };

if ((event.body.toLowerCase() == "good night") || (event.body.toLowerCase() == "Good night all ")) {
     return api.sendMessage(" शुभ रात्रि ___😘सोने से पहले एक बार मेरा नाम ले लेना भूत नहीं आएगा 😂:))", threadID);
   };

    if ((event.body.toLowerCase() == "love you") || (event.body.toLowerCase() == "I love you 😘")) {
     return api.sendMessage("𝐈 𝐋𝐨𝐯𝐞 𝐲𝐨𝐮 𝐭𝐨 𝐦𝐞𝐫𝐢 𝐣𝐚𝐧 𒁍•🦋🔐😘", threadID);
   };

   if ((event.body.toLowerCase() == "hi") || (event.body.toLowerCase() == "hello") ||(event.body.toLowerCase() == "hlw") || (event.body.toLowerCase() == "Hii")) {
     return api.sendMessage("हेलो, हेलो, बाय बाय. ये सब के अलावा कुछ बोलना नहीं आता क्या तुमको चलो जय श्री राम बोलो ❤️", threadID);
   };

  if ((event.body.toLowerCase() == "🤖") || (event.body.toLowerCase() == "🤖")) {
     return api.sendMessage("ओय चीड़ा रहे हो मुझे 🙁👈", threadID);
   };

  if ((event.body.toLowerCase() == "love you") || (event.body.toLowerCase() == "i love you")) {
     return api.sendMessage("𝗜 𝗟𝗼𝘃𝗲 𝘆𝗼𝘂 𝘁𝗼𝗼 𝗝𝗮𝗮𝗻 😘", threadID);
   };
   
   if ((event.body.toLowerCase() == "surya") || (event.body.toLowerCase() == "captan surya") || (event.body.toLowerCase() == "capitan surya") || (event.body.toLowerCase() == "captan") || (event.body.toLowerCase() == "surya kon hai") || (event.body.toLowerCase() == "captan surya kon hai") || (event.body.toLowerCase() == "capitan surya kaun hai") || (event.body.toLowerCase() == "capitan surya kon hai") || (event.body.toLowerCase() == "captan surya kaun hai") || (event.body.toLowerCase() == "surya kaun hai")) {
    return api.sendMessage("YAH EK CHUDA HUA TATATA HAI OR JAHA JATA HAI WAHI CHUD JATA HAI ISKI GAND FAD CHUDAI KISI NE KIA THA OR DAILY GAND MARANE WALA TATATA HAI YAH SALA HIJDA LAUNDIYABAZI KARTA HAI ISKI GIRLFRIEND HOTE HUYE BHI ISKI GIRLFRIEND ISKO BAHUT PEYAR KARTI HAI LEKIN YAH DUSRI LADKIYON SE MUH MARTA FIRTA HAI OR YAH APNI GIRLFRIEND LE SAMNE BAS DIKHWA KARTA HAI KI KI MAIN USKA BOYFRIEND HUN FACBOOK PE HAR LADKI KE  INBOX 📥 ME JA KE HI,HELLO,HLW,👍🏻BHEJTA HAI OR ISSE KOI LADKI THODI BAAT KYA LAR LE TO YE USKI APNI GIRLFRIEND TAK BANANE KE LIYE PAHLE USKO PROPOS KARTA HAI OR  OR AGR LADKI ACCEPT KAR LETI HAI ISKA PROPOSAL TO YAH USKE SATH SEX CHAT KARTA HAI OR BAD JAB ISKA MAN BHAT JATA HAI TO YAH FIR US LADKI KO JALIL KARTA HAI OR YADI LADKI USKA PROPOSAL ACCEPT NHI KARTI HAI TO YAH US LADKI KO GALIYA DETA HAI OR US LADKI KO BEIJJAT KARTA HAI ", threadID);
   };
   
if ((event.body.toLowerCase() == "nidhi") || (event.body.toLowerCase() == "nidhi jaiswal")) {
    return api.sendMessage("Yeh tharki ladki ko kyu bula rahe bo isse baat karna hai to iske inbox 📥me kr lo baby" , threadID);
   };

if ((event.body.toLowerCase() == "alisha kardam") || (event.body.toLowerCase() == "riddhi") || (event.body.toLowerCase() == "riddhi panday") || (event.body.toLowerCase() == "kajal kumari") || (event.body.toLowerCase() == "alisha")) {
    return api.sendMessage("NO DATA AVAILABLE 🙄 👈🏻" , threadID);
    };

if ((event.body.toLowerCase() == "yaara") || (event.body.toLowerCase() == "yara") || (event.body.toLowerCase() == "yaar") || (event.body.toLowerCase() == "babu")) {
    return api.sendMessage("KAISE HO YAARA 😍" , threadID);
    };
  
   mess = "{name}"
  
  if (event.body.includes("Bot") == 1 ||
   (event.body.includes("bot") == 1 ||
   (event.body.includes("varun dhawal") == 1 ||
   (event.body.includes("varun") == 1 ||
   (event.body.includes("akshay") == 1 ||
  (event.body.includes("panday") == 1 ||
   (event.body.includes("bhabhi") == 1 ||
   (event.body.includes("oye") == 1 )))))))) {
    var msg = {
      body: `🌸🥀${name}🌺🥀,  \n\n『\n   ${rand} 』\n\n❤️𝙲𝚛𝚎𝚍𝚒𝚝𝚜 : 𝐕𝐚𝐫𝐮𝐧 𝐃𝐡𝐚𝐰𝐚𝐥🌹`
    }
    return api.sendMessage(msg, threadID, messageID);
  };

}

module.exports.run = function({ api, event, client, __GLOBAL }) { }
