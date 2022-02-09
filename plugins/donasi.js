let fetch = require('node-fetch')
let handler = async (m, { conn }) => conn.sendButtonLoc(m.chat, await (await fetch(fla + 'donasi')).buffer(), `››╭─〘 *Donasi* 〙
╭╡
│┝‷✧ *Pulsa:* 6281807254833
│┝‷✧ *Dana:* 6281807254833
│┝‷✧ *Linkaja:* 6281807254833
│┝‷✧ *Gopay:* 6281807254833
│┝‷✧ *Ovo:* 6281807254833
│╰───···─────
│⁺◛˖ Ingin Donasi? Chat
│wa.me/6285712420674?text=kak+mau+donasi
╰──────────···───╮
▌│█║▌║▌║║▌║▌║█│▌
`.trim(), `${wm}`, 'Owner', '.owner')

module.exports = handler

let wm = global.botwm
