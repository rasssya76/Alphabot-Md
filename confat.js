const fs = require('fs')
const chalk = require('chalk')
const setting = JSON.parse(fs.readFileSync('./setting.json'));

// Other
global.owner = ["43670306128501","6281515589573"]
global.packname = 'RamaGans >>'
global.youtube = 'https://youtube.com/c/RamaGans'
global.author = '-R-BOT \n 43670306128501'
global.sessionName = 'session'
global.prefa = ['','!','.','🐦','🐤','🗿','#','&']
global.sp = '⭔'
global.mess = {
    sukses: 'NI CUY R-BOT~',
    admin: 'Perintah Ini Hanya Bisa Digunakan Oleh Admin !',
    botAdmin: 'Perintah Ini Hanya Bisa Digunakan Ketika Bot Menjadi Admin !',
    owner: 'Perintah Ini Hanya Bisa Digunakan Oleh Owner !',
    group: 'Perintah Ini Hanya Bisa Digunakan Di Group !',
    private: 'Perintah Ini Hanya Bisa Digunakan Di Private !',
	bot: 'Fitur Khusus Pengguna Nomor Bot',
    errtoimg: 'Maaf Saat Ini Belum Support Sticker Gif !',
    wait: '_*wait a moment*_',
	lockCmd: 'Fitur Tidak Diaktifkan Oleh Owner!',
	example1: 'Selamat Datang @user Di Group @subject Jangan Lupa Baca Rules @desc\n\nNote :\n1. @user (Mention User Join)\n2. @bio (Get Bio User Join)\n3. @tanggal (Date Now)\n4. @desc (Get Description Group)\n5. @subject (Group Name)'
}
global.thumb = fs.readFileSync(setting.thumbnail)

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})
