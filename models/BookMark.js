const mongoose = require("mongoose")

const BookMarkSchema = new mongoose.Schema({
  title: { type: String, required: true },
  url: { type: String, required: true }
 
})

const BookMark = mongoose.model("BookMark", BookMarkSchema)

module.exports = BookMark

