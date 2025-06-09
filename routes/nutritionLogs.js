const express = require('express');
const router = express.Router();
const NutritionLog = require('../models/NutritionLog');

router.post('/', async (req, res) => {
  try {
    const log = new NutritionLog(req.body);
    await log.save();
    res.status(201).json(log);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

router.get('/', async (req, res) => {
  try {
    const logs = await NutritionLog.find().sort({ date: -1 });
    res.json(logs);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;