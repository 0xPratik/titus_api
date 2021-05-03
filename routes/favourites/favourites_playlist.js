const express = require("express");
const router = express.Router();
const {
  getAplaylist,
  getfavplaylist,
  deleteAplaylist,
  updateFavPlaylist,
} = require("../../controllers/favourites/favourites_playlist");

router.get("/favplaylists", getfavplaylist);
router.get("/favplaylists/:user_publickey", getAplaylist);
router.delete("/favplaylists/:user_publickey", deleteAplaylist);
router.patch("/favplaylists/:user_publickey", updateFavPlaylist);

module.exports = router;
