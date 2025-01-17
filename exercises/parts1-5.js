// URL for the instructions: 
// https://education.launchcode.org/intro-to-professional-web-dev/chapters/typescript/exercises.html 
// Part 1: Declare (5) Variables With Type
var spaceCraftName = 'Determination';
var speedMph = 17500;
var milesPerKilometer = 0.621;
var kilometersToMars = 225000000;
var kilometersToMoon = 384400;
// Part 2: Print Days to Mars
var milesToMars = kilometersToMars * milesPerKilometer;
var hoursToMars = milesToMars / speedMph;
var daysToMars = hoursToMars / 24;
// Code an output statement here (use a template literal):
//console.log(`${spaceCraftName} would take ${daysToMars} days to get to Mars.`);
// Part 3: Create a Function ("getDaysToLocation")
function getDaysToLocation(kilometersAway) {
    //let milesAway: number = kilometersAway * milesPerKilometer;
    //let hoursAway: number = milesAway / speedMph;
    //let daysAway: number = hoursAway / 24;
    //return hoursAway / 24;
    return kilometersAway * milesPerKilometer / speedMph / 24;
}
// Move your output statement from part 2 here. Update the template literal to call
// the function and print the outputs for a Mars trip and a moon trip.
console.log("".concat(spaceCraftName, " would take ").concat(getDaysToLocation(kilometersToMars), " days to get to Mars."));
console.log("".concat(spaceCraftName, " would take ").concat(getDaysToLocation(kilometersToMoon), " days to get to the Moon."));
// Part 4: Create a Spacecraft Class
// Create an instance of the class here:
// Move your output statements from part 3 here. Update the template literals use the
// instance of the class.
// Part 5: Export and Import the SpaceLocation Class
// Add the required import statement BEFORE the part 1 concent.
// Add the printDaysToLocation function to the Spacecraft class.
// Paste in the code from step 6 here:
