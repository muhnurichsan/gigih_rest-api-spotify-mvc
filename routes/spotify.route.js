const express = require("express");
const router = express.Router();
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
    res.send({
      message: "berhasil count",
    });
  } catch (error) {
    res.send(error);
  }
});

router.post("/playlist", (req, res) => {
  const { title, artists } = req.body;
  try {
    songToPlaylist(title, artists);
    res.send({
      message: "berhasil menambah lagu ke dalam playlist",
    });
  } catch (error) {
    res.send(error);
  }
});

module.exports = router;
