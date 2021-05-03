const express = require("express");
const router = express.Router();
const {
  delFavPlaylist,
  delFavSong,
  favourites,
  updateFavPlaylist,
} = require("../../controllers/favourites/favourites");

router.get("/favourites", favourites);
router.delete("/favourites/:id", delFavPlaylist);
router.patch("/favourites/:id", updateFavPlaylist);
router.delete("/favourites/:src", delFavSong);
router.patch("/favourites/:src");

module.exports = router;
