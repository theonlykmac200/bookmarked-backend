const express = require("express");
const bookMarkRouter = express.Router();
const BookMark = require("../models/BookMark.js");

bookMarkRouter.get("/", async (req, res) => {
  try {
    res.status(200).json(await BookMark.find({}));
  } catch (err) {
    res.status(400).json(err);
  }
});

bookMarkRouter.delete("/:id", async (req, res) => {
  try {
    res.status(200).json(await BookMark.findByIdAndDelete(req.params.id));
  } catch (err) {
    res.status(400).json(err);
  }
});

bookMarkRouter.put("/:id", async (req, res) => {
  try {
    res
      .status(200)
      .json(
        await BookMark.findByIdAndUpdate(req.params.id, req.body, { new: true })
      );
  } catch (err) {
    res.status(400).json(err);
  }
});

bookMarkRouter.post("/", async (req, res) => {
  try {
    res.status(200).json(await BookMark.create(req.body));
  } catch (err) {
    res.status(400).json(err);
  }
});

module.exports = bookMarkRouter;
