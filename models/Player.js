const { SchemaTypes } = require("../connection");
const mongoose = require("../connection");
const ponySchema = require("./Pony");
const bluSchema = require("./Spell")

const playerSchema = new mongoose.Schema({
    name: String,
    is_active : Boolean,
    has_BLU : Boolean,
    blu_spells : bluSchema,
    pony : ponySchema,
});

module.exports = mongoose.model("Player", playerSchema)