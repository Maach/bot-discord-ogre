const { GuildScheduledEventPrivacyLevel, GuildScheduledEventEntityType, bold } = require('discord.js');
require('dotenv').config();

const BASE_OBJ = {
    privacyLevel: GuildScheduledEventPrivacyLevel.GuildOnly,
    entityType: GuildScheduledEventEntityType.Voice,
    channel: process.env.VOICECHANNELID,
    image: `https://digitalhub.fifa.com/transform/565b1773-7815-4ff4-b13c-ad6e024a428d/FIFA-World-Cup-Qatar-2022-Final-Draw?io=transform:fill,height:775,width:1920&quality=75`
}
const _20112022 = [
    {
        ...BASE_OBJ, 
        name: `Copa do Mundo do Catar 2022`,
        description: `${bold(`Fase de Grupos`)}\nCatar x Equador`,
        scheduledStartTime: new Date("2022-11-20T15:45:00.000Z"), // 20/11/2022 06:45
    },
]
const _21112022 = [
    {
        ...BASE_OBJ, 
        name: `Copa do Mundo do Catar 2022`,
        description: `${bold(`Fase de Grupos`)}\nInglaterra x Irã`,
        scheduledStartTime: new Date("2022-11-21T12:45:00.000Z"), // 21/11/2022 09:45
    },
    {
        ...BASE_OBJ, 
        name: `Copa do Mundo do Catar 2022`,
        description: `${bold(`Fase de Grupos`)}\nSenegal x Holanda`,
        scheduledStartTime: new Date("2022-11-21T15:45:00.000Z"), // 21/11/2022 12:45
    },
    {
        ...BASE_OBJ, 
        name: `Copa do Mundo do Catar 2022`,
        description: `${bold(`Fase de Grupos`)}\nEstados Unidos x Gales`,
        scheduledStartTime: new Date("2022-11-21T18:45:00.000Z"), // 21/11/2022 15:45
    },
]
const _22112022 = [
    {
        ...BASE_OBJ, 
        name: `Copa do Mundo do Catar 2022`,
        description: `${bold(`Fase de Grupos`)}\nArgentina x Arábia Saudita`,
        scheduledStartTime: new Date("2022-11-22T09:45:00.000Z"), // 22/11/2022 06:45
    },
    {
        ...BASE_OBJ, 
        name: `Copa do Mundo do Catar 2022`,
        description: `${bold(`Fase de Grupos`)}\nDinamarca x Tunísia`,
        scheduledStartTime: new Date("2022-11-22T12:45:00.000Z"), // 22/11/2022 09:45
    },
    {
        ...BASE_OBJ, 
        name: `Copa do Mundo do Catar 2022`,
        description: `${bold(`Fase de Grupos`)}\nMéxico x Polônia`,
        scheduledStartTime: new Date("2022-11-22T15:45:00.000Z"), // 22/11/2022 12:45
    },
    {
        ...BASE_OBJ, 
        name: `Copa do Mundo do Catar 2022`,
        description: `${bold(`Fase de Grupos`)}\nFrança x Austrália`,
        scheduledStartTime: new Date("2022-11-22T18:45:00.000Z"), // 22/11/2022 15:45
    },
]
const _23112022 = [
    {
        ...BASE_OBJ, 
        name: `Copa do Mundo do Catar 2022`,
        description: `${bold(`Fase de Grupos`)}\nMarrocos x Croácia`,
        scheduledStartTime: new Date("2022-11-23T09:45:00.000Z"), // 23/11/2022 06:45
    },
    {
        ...BASE_OBJ, 
        name: `Copa do Mundo do Catar 2022`,
        description: `${bold(`Fase de Grupos`)}\nAlemanha x Japão`,
        scheduledStartTime: new Date("2022-11-23T12:45:00.000Z"), // 23/11/2022 09:45
    },
    {
        ...BASE_OBJ, 
        name: `Copa do Mundo do Catar 2022`,
        description: `${bold(`Fase de Grupos`)}\nEspanha x Costa Rica`,
        scheduledStartTime: new Date("2022-11-23T15:45:00.000Z"), // 23/11/2022 12:45
    },
    {
        ...BASE_OBJ, 
        name: `Copa do Mundo do Catar 2022`,
        description: `${bold(`Fase de Grupos`)}\nBélgica x Canadá`,
        scheduledStartTime: new Date("2022-11-23T18:45:00.000Z"), // 23/11/2022 15:45
    },
]
const _24112022 = [
    {
        ...BASE_OBJ, 
        name: `Copa do Mundo do Catar 2022`,
        description: `${bold(`Fase de Grupos`)}\nSuíça x Camarões`,
        scheduledStartTime: new Date("2022-11-24T09:45:00.000Z"), // 24/11/2022 06:45
    },
    {
        ...BASE_OBJ, 
        name: `Copa do Mundo do Catar 2022`,
        description: `${bold(`Fase de Grupos`)}\nUruguai x Coreia do Sul`,
        scheduledStartTime: new Date("2022-11-24T12:45:00.000Z"), // 24/11/2022 09:45
    },
    {
        ...BASE_OBJ, 
        name: `Copa do Mundo do Catar 2022`,
        description: `${bold(`Fase de Grupos`)}\nPortugal x Gana`,
        scheduledStartTime: new Date("2022-11-24T15:45:00.000Z"), // 24/11/2022 12:45
    },
    {
        ...BASE_OBJ, 
        name: `Copa do Mundo do Catar 2022`,
        description: `${bold(`Fase de Grupos`)}\nBrasil x Sérvia`,
        scheduledStartTime: new Date("2022-11-24T18:45:00.000Z"), // 24/11/2022 15:45
    },
]
const _25112022 = [
    {
        ...BASE_OBJ, 
        name: `Copa do Mundo do Catar 2022`,
        description: `${bold(`Fase de Grupos`)}\nGales x Irã`,
        scheduledStartTime: new Date("2022-11-25T09:45:00.000Z"), // 25/11/2022 06:45
    },
    {
        ...BASE_OBJ, 
        name: `Copa do Mundo do Catar 2022`,
        description: `${bold(`Fase de Grupos`)}\nCatar x Senegal`,
        scheduledStartTime: new Date("2022-11-25T12:45:00.000Z"), // 25/11/2022 09:45
    },
    {
        ...BASE_OBJ, 
        name: `Copa do Mundo do Catar 2022`,
        description: `${bold(`Fase de Grupos`)}\nHolanda x Equador`,
        scheduledStartTime: new Date("2022-11-25T15:45:00.000Z"), // 25/11/2022 12:45
    },
    {
        ...BASE_OBJ, 
        name: `Copa do Mundo do Catar 2022`,
        description: `${bold(`Fase de Grupos`)}\nInglaterra x Estados Unidos`,
        scheduledStartTime: new Date("2022-11-25T18:45:00.000Z"), // 25/11/2022 15:45
    },
]
const _26112022 = [
    {
        ...BASE_OBJ, 
        name: `Copa do Mundo do Catar 2022`,
        description: `${bold(`Fase de Grupos`)}\nTunísia x Austrália`,
        scheduledStartTime: new Date("2022-11-26T09:45:00.000Z"), // 26/11/2022 06:45
    },
    {
        ...BASE_OBJ, 
        name: `Copa do Mundo do Catar 2022`,
        description: `${bold(`Fase de Grupos`)}\nPolônia x Arábia Saudita`,
        scheduledStartTime: new Date("2022-11-26T12:45:00.000Z"), // 26/11/2022 09:45
    },
    {
        ...BASE_OBJ, 
        name: `Copa do Mundo do Catar 2022`,
        description: `${bold(`Fase de Grupos`)}\nFrança x Dinamarca`,
        scheduledStartTime: new Date("2022-11-26T15:45:00.000Z"), // 26/11/2022 12:45
    },
    {
        ...BASE_OBJ, 
        name: `Copa do Mundo do Catar 2022`,
        description: `${bold(`Fase de Grupos`)}\nArgentina x México`,
        scheduledStartTime: new Date("2022-11-26T18:45:00.000Z"), // 26/11/2022 15:45
    },
]
const _27112022 = [
    {
        ...BASE_OBJ, 
        name: `Copa do Mundo do Catar 2022`,
        description: `${bold(`Fase de Grupos`)}\nJapão x Costa Rica`,
        scheduledStartTime: new Date("2022-11-27T09:45:00.000Z"), // 27/11/2022 06:45
    },
    {
        ...BASE_OBJ, 
        name: `Copa do Mundo do Catar 2022`,
        description: `${bold(`Fase de Grupos`)}\nBélgica x Marrocos`,
        scheduledStartTime: new Date("2022-11-27T12:45:00.000Z"), // 27/11/2022 09:45
    },
    {
        ...BASE_OBJ, 
        name: `Copa do Mundo do Catar 2022`,
        description: `${bold(`Fase de Grupos`)}\nCroácia x Canadá`,
        scheduledStartTime: new Date("2022-11-27T15:45:00.000Z"), // 27/11/2022 12:45
    },
    {
        ...BASE_OBJ, 
        name: `Copa do Mundo do Catar 2022`,
        description: `${bold(`Fase de Grupos`)}\nEspanha x Alemanha`,
        scheduledStartTime: new Date("2022-11-27T18:45:00.000Z"), // 27/11/2022 15:45
    },
]
const _28112022 = [
    {
        ...BASE_OBJ, 
        name: `Copa do Mundo do Catar 2022`,
        description: `${bold(`Fase de Grupos`)}\nCamarões x Sérvia`,
        scheduledStartTime: new Date("2022-11-28T09:45:00.000Z"), // 28/11/2022 06:45
    },
    {
        ...BASE_OBJ, 
        name: `Copa do Mundo do Catar 2022`,
        description: `${bold(`Fase de Grupos`)}\nCoreia do Sul x Gana`,
        scheduledStartTime: new Date("2022-11-28T12:45:00.000Z"), // 28/11/2022 09:45
    },
    {
        ...BASE_OBJ, 
        name: `Copa do Mundo do Catar 2022`,
        description: `${bold(`Fase de Grupos`)}\nBrasil x Suíça`,
        scheduledStartTime: new Date("2022-11-28T15:45:00.000Z"), // 28/11/2022 12:45
    },
    {
        ...BASE_OBJ, 
        name: `Copa do Mundo do Catar 2022`,
        description: `${bold(`Fase de Grupos`)}\nPortugal x Uruguai`,
        scheduledStartTime: new Date("2022-11-28T18:45:00.000Z"), // 28/11/2022 15:45
    },
]
const _29112022 = [
    {
        ...BASE_OBJ, 
        name: `Copa do Mundo do Catar 2022`,
        description: `${bold(`Fase de Grupos`)}\nEquador x Senegal`,
        scheduledStartTime: new Date("2022-11-29T09:45:00.000Z"), // 29/11/2022 06:45
    },
    {
        ...BASE_OBJ, 
        name: `Copa do Mundo do Catar 2022`,
        description: `${bold(`Fase de Grupos`)}\nHolanda x Catar`,
        scheduledStartTime: new Date("2022-11-29T12:45:00.000Z"), // 29/11/2022 09:45
    },
    {
        ...BASE_OBJ, 
        name: `Copa do Mundo do Catar 2022`,
        description: `${bold(`Fase de Grupos`)}\nIrã x Estados Unidos`,
        scheduledStartTime: new Date("2022-11-29T15:45:00.000Z"), // 29/11/2022 12:45
    },
    {
        ...BASE_OBJ, 
        name: `Copa do Mundo do Catar 2022`,
        description: `${bold(`Fase de Grupos`)}\nGales x Inglaterra`,
        scheduledStartTime: new Date("2022-11-29T18:45:00.000Z"), // 29/11/2022 15:45
    },
]
const _30112022 = [
    {
        ...BASE_OBJ, 
        name: `Copa do Mundo do Catar 2022`,
        description: `${bold(`Fase de Grupos`)}\nTunísia x França`,
        scheduledStartTime: new Date("2022-11-30T09:45:00.000Z"), // 30/11/2022 06:45
    },
    {
        ...BASE_OBJ, 
        name: `Copa do Mundo do Catar 2022`,
        description: `${bold(`Fase de Grupos`)}\nAustrália x Dinamarca`,
        scheduledStartTime: new Date("2022-11-30T12:45:00.000Z"), // 30/11/2022 09:45
    },
    {
        ...BASE_OBJ, 
        name: `Copa do Mundo do Catar 2022`,
        description: `${bold(`Fase de Grupos`)}\nPolônia x Argentina`,
        scheduledStartTime: new Date("2022-11-30T15:45:00.000Z"), // 30/11/2022 12:45
    },
    {
        ...BASE_OBJ, 
        name: `Copa do Mundo do Catar 2022`,
        description: `${bold(`Fase de Grupos`)}\nArábia Saudita x México`,
        scheduledStartTime: new Date("2022-11-30T18:45:00.000Z"), // 30/11/2022 15:45
    },
]
const _01122022 = [
    {
        ...BASE_OBJ, 
        name: `Copa do Mundo do Catar 2022`,
        description: `${bold(`Fase de Grupos`)}\nCroácia x Bélgica`,
        scheduledStartTime: new Date("2022-12-01T09:45:00.000Z"), // 01/12/2022 06:45
    },
    {
        ...BASE_OBJ, 
        name: `Copa do Mundo do Catar 2022`,
        description: `${bold(`Fase de Grupos`)}\nCanadá x Marrocos`,
        scheduledStartTime: new Date("2022-12-01T12:45:00.000Z"), // 01/12/2022 09:45
    },
    {
        ...BASE_OBJ, 
        name: `Copa do Mundo do Catar 2022`,
        description: `${bold(`Fase de Grupos`)}\nJapão x Espanha`,
        scheduledStartTime: new Date("2022-12-01T15:45:00.000Z"), // 01/12/2022 12:45
    },
    {
        ...BASE_OBJ, 
        name: `Copa do Mundo do Catar 2022`,
        description: `${bold(`Fase de Grupos`)}\nCosta Rica x Alemanha`,
        scheduledStartTime: new Date("2022-12-01T18:45:00.000Z"), // 01/12/2022 15:45
    },
]
const _02122022 = [
    {
        ...BASE_OBJ, 
        name: `Copa do Mundo do Catar 2022`,
        description: `${bold(`Fase de Grupos`)}\nCoreia do Sul x Portugal`,
        scheduledStartTime: new Date("2022-12-02T09:45:00.000Z"), // 02/12/2022 06:45
    },
    {
        ...BASE_OBJ, 
        name: `Copa do Mundo do Catar 2022`,
        description: `${bold(`Fase de Grupos`)}\nGana x Uruguai`,
        scheduledStartTime: new Date("2022-12-02T12:45:00.000Z"), // 02/12/2022 09:45
    },
    {
        ...BASE_OBJ, 
        name: `Copa do Mundo do Catar 2022`,
        description: `${bold(`Fase de Grupos`)}\nSérvia x Suíça`,
        scheduledStartTime: new Date("2022-12-02T15:45:00.000Z"), // 02/12/2022 12:45
    },
    {
        ...BASE_OBJ, 
        name: `Copa do Mundo do Catar 2022`,
        description: `${bold(`Fase de Grupos`)}\nCamarões x Brasil`,
        scheduledStartTime: new Date("2022-12-02T18:45:00.000Z"), // 02/12/2022 15:45
    },
]

module.exports = {
    "20/11/2022": [ ..._20112022 ],
    "21/11/2022": [ ..._21112022 ],
    "22/11/2022": [ ..._22112022 ],
    "23/11/2022": [ ..._23112022 ],
    "24/11/2022": [ ..._24112022 ],
    "25/11/2022": [ ..._25112022 ],
    "26/11/2022": [ ..._26112022 ],
    "27/11/2022": [ ..._27112022 ],
    "28/11/2022": [ ..._28112022 ],
    "29/11/2022": [ ..._29112022 ],
    "30/11/2022": [ ..._30112022 ],
    "01/12/2022": [ ..._01122022 ],
    "02/12/2022": [ ..._02122022 ],
    "03/12/2022": [],
    "04/12/2022": [],
    "05/12/2022": [],
    "06/12/2022": [],
    "09/12/2022": [],
    "10/12/2022": [],
    "13/12/2022": [],
    "17/12/2022": [],
    "18/12/2022": [],
}