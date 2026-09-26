const express = require("express");
const router = express.Router();

const {
    getFitnessRecommendation
} = require("../controllers/aiController");

router.post("/recommendation", getFitnessRecommendation);

module.exports = router;