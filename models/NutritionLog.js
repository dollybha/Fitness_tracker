const mongoose = require('mongoose');

const FoodSchema = new mongoose.Schema({
  name: String,
  servingSize: Number,
  servingUnit: String,
  calories: Number,
});

const MealSchema = new mongoose.Schema({
  name: String,
  time: String,
  foods: [FoodSchema],
});

const NutritionLogSchema = new mongoose.Schema({
  date: String,
  totalCalories: Number,
  totalProtein: Number,
  totalCarbs: Number,
  totalFat: Number,
  waterIntake: Number,
  meals: [MealSchema],
});

module.exports = mongoose.model('NutritionLog', NutritionLogSchema);