const fs = require('fs');
const chalk = require('chalk');
const { version } = require("./package.json")

//========================= 
global.owner = '6285372277748'
global.versi = version
global.namaOwner = "Foxstore"
global.packname = 'Bot WhatsApp'
global.botname = 'Itachi Recode Fox'
global.botname2 = 'Simple X Bug'

global.tempatDB = 'database.json'
global.pairing_code = true

//=========================
global.linkOwner = "https://wa.me/6285232381174"
global.linkGrup = "https://chat.whatsapp.com/HfzeA2wfk6C8wPpUAFpxkk"

//=========================
global.delayJpm = 3000
global.delayPushkontak = 3000

//=========================
global.linkSaluran = "_"
global.idSaluran = "_"
global.namaSaluran = "Foxstore Official"

//==================[ tutorial pemsangan ada di yt foxstore ]=============
global.merchantIdOrderKuota = "-"
global.apiOrderKuota = "-"
global.qrisOrderKuota = "-"

global.baseUrl = 'https://api.foxstore.web.id/api/orkut'
global.apiDigitalOcean = "-"
global.apiBot = '-' 
// apinya bisa buy ke https://wa.me/6285372277748
//=========================

//=========================
global.image = {
menu: "https://img.hotimg.com/1000935077.jpeg", 
reply: "https://img.hotimg.com/1000935077.jpeg", 
logo: "https://img101.pixhost.to/images/137/547345180_skyzopedia.jpg", 
dana: "https://img100.pixhost.to/images/667/540082364_skyzopedia.jpg", 
ovo: "https://img100.pixhost.to/images/667/540082774_skyzopedia.jpg", 
gopay: "https://img100.pixhost.to/images/667/540083275_skyzopedia.jpg", 
qris: "https://img100.pixhost.to/images/667/540080636_skyzopedia.jpg"
}

//=========================
global.egg = "15" // Egg ID
global.nestid = "5" // nest ID
global.loc = "1" // Location ID
global.domain = "https://foxstore.web.id"
global.apikey = "ptla_BIpPl4ezv7N1FEv9qmFDvmrorOWgCGfru0s9eqjLmPW" //ptla
global.capikey = "ptlc_S8j8oUCCZickv78FkgU9jAICwAHtdGgILwQRkz3QDTs" //ptlc


//=========================
global.mess = {
	owner: "* *Akses Ditolak*\nFitur ini hanya untuk owner bot!",
	admin: "* *Akses Ditolak*\nFitur ini hanya untuk admin grup!",
	botAdmin: "* *Akses Ditolak*\nFitur ini hanya untuk ketika bot menjadi admin!",
	group: "* *Akses Ditolak*\nFitur ini hanya untuk dalam grup!",
	private: "* *Akses Ditolak*\nFitur ini hanya untuk dalam private chat!",
	prem: "* *Akses Ditolak*\nFitur ini hanya untuk user premium!",
	wait: 'Loading...',
	error: 'Error!',
	done: 'Done'
}

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update ${__filename}`))
	delete require.cache[file]
	require(file)
})