const express = require("express");
const router = express.Router();
const { getGoals , postGoals , deleteGoals, putGoals } = require("../controllers/controller");

router.route("/").get(getGoals).post(postGoals)
router.route("/:id").delete(deleteGoals).put(putGoals)


module.exports = router;
