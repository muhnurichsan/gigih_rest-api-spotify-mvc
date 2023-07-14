const express = require("express");
const router = express.Router();
const { playlist } = require("../models/playlist.model");
const {
  songToPlaylist,
  getAllSongFromPlaylist,
  countPlayedSong,
} = require("../controllers/playlist.controller");

router.get("/playlist", (req, res) => {
  const playlistSong = getAllSongFromPlaylist(req.query.mostPlayed);
  res.send(playlistSong);
});
router.put("/playlist/:id", (req, res) => {
  try {
    countPlayedSong(req.params.id);
    res.send("berhasil count");
  } catch (error) {
    res.send(error);
  }
});

router.post("/playlist", (req, res) => {
  const { title, artists } = req.body;
  try {
    songToPlaylist(title, artists);
    res.send({
      data: playlist,
    });
  } catch (error) {
    res.send(error);
  }
});

module.exports = router;
