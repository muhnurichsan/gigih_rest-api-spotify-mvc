const {
  createNewDataToPlaylist,
  sortMostPlayed,
  AllSongFromPlaylist,
  findSongById,
} = require("../models/playlist.model");

const addNewSongToPlaylist = (title, artists) => {
  createNewDataToPlaylist(title, artists);
};

const getMostPlayedSong = () => {
  const sortedSongs = sortMostPlayed();
  return sortedSongs;
};

const getAllSong = () => {
  const songs = AllSongFromPlaylist();
  return songs;
};

const incrementPlayedSong = (id) => {
  const choosedSong = findSongById(id);

  if (choosedSong === null || choosedSong === undefined) {
    throw {
      message: "tidak dapat menemukan lagu",
    };
  }
  choosedSong.played++;
  return;
};

module.exports = {
  addNewSongToPlaylist,
  getMostPlayedSong,
  getAllSong,
  incrementPlayedSong,
};
