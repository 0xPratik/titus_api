const express = require("express");
const router = express.Router();
const {
  deleteAReport,
  getAReport,
  getReports,
  updateDuration,
} = require("../controllers/reports");

router.get("/reports", getReports);
router.get("/reports/:src", getAReport);
router.delete("/reports/:src", deleteAReport);
router.patch("/reports/duration", updateDuration);

module.exports = router;
