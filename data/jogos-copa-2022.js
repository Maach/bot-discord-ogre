const { GuildScheduledEventPrivacyLevel, GuildScheduledEventEntityType, bold, inlineCode } = require('discord.js');
require('dotenv').config();

const BASE_OBJ = {
    privacyLevel: GuildScheduledEventPrivacyLevel.GuildOnly,
    entityType: GuildScheduledEventEntityType.Voice,
    channel: process.env.VOICECHANNELID,
    image: `https://digitalhub.fifa.com/transform/565b1773-7815-4ff4-b13c-ad6e024a428d/FIFA-World-Cup-Qatar-2022-Final-Draw?io=transform:fill,height:775,width:1920&quality=75`
}

// structureText(`Fase de Grupos`, [`07:00`, ``], [`10:00`, ``], [`13:00`, ``], [`16:00`, ``])
const structureText = (fase, ...partidas) => {
    let formatedPartidas = ``
    partidas.forEach(partida => formatedPartidas += `${inlineCode(partida[0])} - ${partida[1]}\n`)
    return `${bold(fase)}\n\n${formatedPartidas}`
}

const _20112022 = {
    ...BASE_OBJ, 
    name: `Copa do Mundo do Catar 2022`, 
    description: structureText(`Fase de Grupos`, [`07:00`, `Catar 🇶🇦 x 🇪🇨 Equador`]),
    scheduledStartTime: new Date("2022-11-20T15:45:00.000Z"), // 20/11/2022 06:45
}
const _21112022 = {
    ...BASE_OBJ, 
    name: `Copa do Mundo do Catar 2022`,
    description: structureText(`Fase de Grupos`, [`10:00`, `Inglaterra 🏴󠁧󠁢󠁥󠁮󠁧󠁿 x 🇮🇷 Irã`], [`13:00`, `Senegal 🇸🇳 x 🇳🇱 Holanda`], [`16:00`, `Estados Unidos 🇺🇸 x 🏴󠁧󠁢󠁷󠁬󠁳󠁿 Gales`]),
    scheduledStartTime: new Date("2022-11-21T15:45:00.000Z"), // 21/11/2022 06:45
}
const _22112022 = {
    ...BASE_OBJ, 
    name: `Copa do Mundo do Catar 2022`,
    description: structureText(`Fase de Grupos`, [`07:00`, `Argentina 🇦🇷 x 🇸🇦 Arábia Saudita`], [`10:00`, `Dinamarca 🇩🇰 x 🇹🇳 Tunísia`], [`13:00`, `México 🇲🇽 x 🇵🇱 Polônia`], [`16:00`, `França 🇫🇷 x 🇦🇺 Austrália`]),
    scheduledStartTime: new Date("2022-11-22T09:45:00.000Z"), // 22/11/2022 06:45
}
const _23112022 = {
    ...BASE_OBJ, 
    name: `Copa do Mundo do Catar 2022`,
    description: structureText(`Fase de Grupos`, [`07:00`, `Marrocos 🇲🇦 x 🇭🇷 Croácia`], [`10:00`, `Alemanha 🇩🇪 x 🇯🇵 Japão`], [`13:00`, `Espanha 🇪🇸 x 🇨🇷 Costa Rica`], [`16:00`, `Bélgica 🇧🇪 x 🇨🇦 Canadá`]),
    scheduledStartTime: new Date("2022-11-23T09:45:00.000Z"), // 23/11/2022 06:45
}
const _24112022 = {
    ...BASE_OBJ, 
    name: `Copa do Mundo do Catar 2022`,
    description: structureText(`Fase de Grupos`, [`07:00`, `Suíça 🇨🇭 x 🇨🇲 Camarões`], [`10:00`, `Uruguai 🇺🇾 x 🇰🇷 Coreia do Sul`], [`13:00`, `Portugal 🇵🇹 x 🇬🇭 Gana`], [`16:00`, `Brasil 🇧🇷 x 🇷🇸 Sérvia`]),
    scheduledStartTime: new Date("2022-11-24T09:45:00.000Z"), // 24/11/2022 06:45
}
const _25112022 = {
    ...BASE_OBJ, 
    name: `Copa do Mundo do Catar 2022`,
    description: structureText(`Fase de Grupos`, [`07:00`, `Gales 🏴󠁧󠁢󠁷󠁬󠁳󠁿 x 🇮🇷 Irã`], [`10:00`, `Catar 🇶🇦 x 🇸🇳 Senegal`], [`13:00`, `Holanda 🇳🇱 x 🇪🇨 Equador`], [`16:00`, `Inglaterra 🏴󠁧󠁢󠁥󠁮󠁧󠁿 x 🇺🇸 Estados Unidos`]),
    scheduledStartTime: new Date("2022-11-25T09:45:00.000Z"), // 25/11/2022 06:45
}
const _26112022 = {
    ...BASE_OBJ, 
    name: `Copa do Mundo do Catar 2022`,
    description: structureText(`Fase de Grupos`, [`07:00`, `Tunísia 🇹🇳 x 🇦🇺 Austrália`], [`10:00`, `Polônia 🇵🇱 x 🇸🇦 Arábia Saudita`], [`13:00`, `França 🇫🇷 x 🇩🇰 Dinamarca`], [`16:00`, `Argentina 🇦🇷 x 🇲🇽 México`]),
    scheduledStartTime: new Date("2022-11-26T09:45:00.000Z"), // 26/11/2022 06:45
}
const _27112022 = {
    ...BASE_OBJ, 
    name: `Copa do Mundo do Catar 2022`,
    description: structureText(`Fase de Grupos`, [`07:00`, `Japão 🇯🇵 x 🇨🇷 Costa Rica`], [`10:00`, `Bélgica 🇧🇪 x 🇲🇦 Marrocos`], [`13:00`, `Croácia 🇭🇷 x 🇨🇦 Canadá`], [`16:00`, `Espanha 🇪🇸 x 🇩🇪 Alemanha`]),
    scheduledStartTime: new Date("2022-11-27T09:45:00.000Z"), // 27/11/2022 06:45
}
const _28112022 = {
    ...BASE_OBJ, 
    name: `Copa do Mundo do Catar 2022`,
    description: structureText(`Fase de Grupos`, [`07:00`, `Camarões 🇨🇲 x 🇷🇸 Sérvia`], [`10:00`, `Coreia do Sul 🇰🇷 x 🇬🇭 Gana`], [`13:00`, `Brasil 🇧🇷 x 🇨🇭 Suíça`], [`16:00`, `Portugal 🇵🇹 x 🇺🇾 Uruguai`]),
    scheduledStartTime: new Date("2022-11-28T09:45:00.000Z"), // 28/11/2022 06:45
}
const _29112022 = {
    ...BASE_OBJ, 
    name: `Copa do Mundo do Catar 2022`,
    description: structureText(`Fase de Grupos`, [`12:00`, `Equador 🇪🇨 x 🇸🇳 Senegal`], [`12:00`, `Holanda 🇳🇱 x 🇶🇦 Catar`], [`16:00`, `Irã 🇮🇷 x 🇺🇸 Estados Unidos`], [`16:00`, `Gales 🏴󠁧󠁢󠁷󠁬󠁳󠁿 x 🏴󠁧󠁢󠁥󠁮󠁧󠁿 Inglaterra`]),
    scheduledStartTime: new Date("2022-11-29T14:45:00.000Z"), // 29/11/2022 11:45
}
const _30112022 = {
    ...BASE_OBJ, 
    name: `Copa do Mundo do Catar 2022`,
    description: structureText(`Fase de Grupos`, [`12:00`, `Tunísia 🇹🇳 x 🇫🇷 França`], [`12:00`, `Austrália 🇦🇺 x 🇩🇰 Dinamarca`], [`16:00`, `Polônia 🇵🇱 x Argentina`], [`16:00`, `Arábia Saudita 🇸🇦 x 🇲🇽 México`]),
    scheduledStartTime: new Date("2022-11-30T14:45:00.000Z"), // 30/11/2022 11:45
}
const _01122022 = {
    ...BASE_OBJ, 
    name: `Copa do Mundo do Catar 2022`,
    description: structureText(`Fase de Grupos`, [`12:00`, `Croácia 🇭🇷 x 🇧🇪 Bélgica`], [`12:00`, `Canadá 🇨🇦 x 🇲🇦 Marrocos`], [`16:00`, `Japão 🇯🇵 x 🇪🇸 Espanha`], [`16:00`, `Costa Rica 🇨🇷 x 🇩🇪 Alemanha`]),
    scheduledStartTime: new Date("2022-12-01T14:45:00.000Z"), // 01/12/2022 11:45
}
const _02122022 = {
    ...BASE_OBJ, 
    name: `Copa do Mundo do Catar 2022`,
    description: structureText(`Fase de Grupos`, [`12:00`, `Coreia do Sul 🇰🇷 x 🇵🇹 Portugal`], [`12:00`, `Gana 🇬🇭 x 🇺🇾 Uruguai`], [`16:00`, `Sérvia 🇷🇸 x 🇨🇭 Suíça`], [`16:00`, `Camarões 🇨🇲 x 🇧🇷 Brasil`]),
    scheduledStartTime: new Date("2022-12-02T14:45:00.000Z"), // 02/12/2022 11:45
}

module.exports = {
    "20/11/2022": { ..._20112022 },
    "21/11/2022": { ..._21112022 },
    "22/11/2022": { ..._22112022 },
    "23/11/2022": { ..._23112022 },
    "24/11/2022": { ..._24112022 },
    "25/11/2022": { ..._25112022 },
    "26/11/2022": { ..._26112022 },
    "27/11/2022": { ..._27112022 },
    "28/11/2022": { ..._28112022 },
    "29/11/2022": { ..._29112022 },
    "30/11/2022": { ..._30112022 },
    "01/12/2022": { ..._01122022 },
    "02/12/2022": { ..._02122022 },
    "03/12/2022": {  },
    "04/12/2022": {  },
    "05/12/2022": {  },
    "06/12/2022": {  },
    "09/12/2022": {  },
    "10/12/2022": {  },
    "13/12/2022": {  },
    "17/12/2022": {  },
    "18/12/2022": {  },
}