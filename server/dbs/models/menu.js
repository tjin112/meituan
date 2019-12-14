// import mongoose from 'mongoose'
const mongoose = require('mongoose')
const Schema = mongoose.Schema
const Menu = new Schema({
  menu: {
    type: Array,
    require: true
  }
})

export default mongoose.model('Menu', Menu)
