const { Schema, model } = require("mongoose")


const charSchema = new Schema({
    owner: String,
    name: String,
    stats: { sword: Number, def: Number, core: Number, magic: Number, spd: {type: Number, default: 3.5}},
    lvl: { type: Number, default: 1},
    rank: { type: String, default: 'none'},
    hp: { type: Number, default: 300},
    maxHp: { type: Number, default: 300},
    mp: { type: Number, default: 100},
    maxMp: { type: Number, default: 100},
    sp: { type: Number, default: 100},
    maxSp: { type: Number, default: 100},
    exp: { type: Number, default: 0},
    maxExp: { type: Number, default: 100},
    x:{ type: Number, default: 0},
    z:{ type: Number, default: 0},
    cloth: String,
    pants: String,
    hair: String,
    boots: String,
    hairColor: {r: Number, g: Number, b: Number},
    helmet: { cState: Number, durability: Number, meshId: String, name: String, itemType: String, plusDef: Number, plusDmg: Number, 
    magRes: Number, plusMag: Number, price: Number},
    shield: { cState: Number, durability: Number, meshId: String, name: String, itemType: String, plusDef: Number, plusDmg: Number, 
    magRes: Number, plusMag: Number, price: Number},
    gear: { cState: Number, durability: Number, meshId: String, name: String, itemType: String, plusDef: Number, plusDmg: Number, 
    magRes: Number, plusMag: Number, price: Number},
    weapon: { cState: Number, durability: Number, meshId: String, name: String, itemType: String, plusDef: Number, plusDmg: Number, 
    magRes: Number, plusMag: Number, price: Number},
    armor:{ cState: Number, durability: Number, meshId: String, name: String, itemType: String, plusDef: Number, plusDmg: Number, 
    magRes: Number, plusMag: Number, price: Number},
    items: [{ cState: Number, durability: Number, meshId: String, name: String, itemType: String, plusDef: Number, plusDmg: Number, 
    magRes: Number, plusMag: Number, price: Number, qnty: Number}],
    skills: { type: Array, default: []},
    quests: {type: Array, default: []},
    titles: { type: Array, default: [] },
    minnions: { type: Array, default: [] },
    clearedQuests: { totalCleared: {type: Number, default: 0}, currPoints: {type: Number, default: 0}},
    currentPlace: String,
    places: { type: Array, default: [] }, 
    status: { type: Array, default: []}, // sickness //poisoned etc
    regens: {sp: Number, hp: Number, mana: Number},
    points: { type: Number, default: 1},
    coins: { type: Number, default: 5000 },
    pendingMoney: [{ desc: String,  from: String, amount: Number, claimed: Boolean }],
    survival: { hunger: {type: Number, default: 100}, sleep: {type: Number, default: 100} },
    aptitude: { type: Array, default: []},
    monsterKilled: { type: Number, default: 0},
    defeatedMonsters: { type: Array, default: []},
    storyQue: { type: Array, default: []},
    mainObj: { name: String , dn: String},
    blessings: { type: Array, default: [] },
    mycrafts: { type: Array, default: [] },
    race: String,
    raceLevel: { type: Number, default: 1 },
    auraType: { type: String, default: "ordinary"},
    auraOn: { type: Boolean, default: false }
})

module.exports = CharModel = model("character", charSchema)