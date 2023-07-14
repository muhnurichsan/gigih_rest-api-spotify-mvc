const express = require("express");
const PORT = 2001;
const app = express();
const cors = require("cors");
const spotifyRouter = require("./routes/spotify.route");

app.use(
  cors({
    origin: "*",
    methods: "*",
  })
);

app.use(express.json());

app.use("/spotify", spotifyRouter);

app.listen(PORT, () => {
  console.log(`listening at port ${PORT}`);
});
