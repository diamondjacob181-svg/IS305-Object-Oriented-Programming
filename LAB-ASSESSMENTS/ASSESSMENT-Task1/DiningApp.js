/*
  Program: Dining Meal Booking Feature
  Student Name: George Jacob
  Student ID: 240574
  Date: 21 July 2026
  Description: A JavaScript program demonstrating classes,
  objects, constructors, private fields and methods.
*/

const MealBooking = require('./MealBooking');

// Create a booking object with details
const booking1 = new MealBooking("240574", "George Jacob", "2026-07-24", "Lunch", 2, "Vegeterian");

// Display formatted booking receipt
console.log("========================================");
console.log("       DWU DINING MEAL BOOKING");
console.log("========================================\n");

console.log(`Student ID: ${booking1.studentId}`);
console.log(`Student name: ${booking1.studentName}`);
console.log(`Meal date: ${booking1.mealDate}`);
console.log(`Meal type: ${booking1.mealType}`);
console.log(`Quantity: ${booking1.quantity}`);
console.log(`Dietary note: ${booking1.dietaryNote}\n`);

console.log("========================================");
console.log("          BOOKING CREATED");
console.log("========================================");
console.log(`Student: ${booking1.studentName} (${booking1.studentId})`);
console.log(`Meal: ${booking1.mealType} x ${booking1.quantity}`);
console.log(`Date: ${booking1.mealDate}`);
console.log(`Dietary note: ${booking1.dietaryNote}`);
console.log(`Status: ${booking1.bookingStatus}`);
console.log(`Total cost: K${booking1.calculateTotal().toFixed(2)}`);
console.log("========================================");

