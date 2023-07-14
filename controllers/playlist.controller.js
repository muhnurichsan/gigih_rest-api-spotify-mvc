const {
  addNewSongToPlaylist,
  getMostPlayedSong,
  getAllSong,
  incrementPlayedSong,
} = require("../services/playlist.service");

const songToPlaylist = (title, artists) => {
  if (!title || !artists) {
    throw {
      message: "nama lagu dan list artis tidak boleh kosong",
    };
  }
  addNewSongToPlaylist(title, artists);
  return true;
};

const getAllSongFromPlaylist = (mostPlayed) => {
  if (mostPlayed) {
    return getMostPlayedSong();
  }
  return getAllSong();
};

const countPlayedSong = (id) => {
  if (!id) {
    throw {
      message: "ID tidak valid",
    };
  }
  try {
    incrementPlayedSong(id);
    return true;
  } catch (error) {
    throw error;
  }
};

module.exports = {
  songToPlaylist,
  getAllSongFromPlaylist,
  countPlayedSong,
};
