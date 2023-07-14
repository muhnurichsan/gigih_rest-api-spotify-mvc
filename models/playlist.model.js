let playlist = [
  {
    id: 1,
    title: "Speak now",

    artists: ["Taylor Swift"],
    url: "https://open.spotify.com/intl-id/track/3DrjZArsPsoqbLzUZZV1Id",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/en/0/0f/Back_to_December.png",
    played: 0,
  },
  {
    id: 2,
    title: "Back to december",
    artists: ["Taylor Swift"],
    url: "https://open.spotify.com/intl-id/track/24DefNCFiWTP8OjYWiXuYe",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/en/8/8f/Taylor_Swift_-_Speak_Now_cover.png",
    played: 0,
  },
];

const createNewDataToPlaylist = (title, artists) => {
  let maxIndex = Math.max(...playlist.map((item) => item.id));
  playlist.push({
    id: (maxIndex = maxIndex + 1),
    title,
    artists,
    url: "https://open.spotify.com/intl-id",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/en/8/8f/Taylor_Swift_-_Speak_Now_cover.png",
    played: 0,
  });
};

const sortMostPlayed = () => {
  return [...playlist].sort((a, b) => {
    return b.played - a.played;
  });
};

const AllSongFromPlaylist = () => {
  return playlist;
};

const findSongById = (id) => {
  return playlist.find((item) => {
    return item.id == id;
  });
};

module.exports = {
  playlist,
  createNewDataToPlaylist,
  sortMostPlayed,
  AllSongFromPlaylist,
  findSongById,
};
