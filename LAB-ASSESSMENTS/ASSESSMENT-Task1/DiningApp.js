/*
  Program: Dining Meal Booking Feature
  Student Name: George Jacob
  Student ID: 240574
  Date: 21 July 2026
  Description: A JavaScript program demonstrating classes,
  objects, constructors, private fields and methods.
*/

const MealBooking = require('./MealBooking');

// Create a booking object
const booking1 = new MealBooking("240574", "George Jacob", "2026-07-20", "Lunch", 2, "Vegetarian");

// Display summary
console.log(booking1.getSummary());

