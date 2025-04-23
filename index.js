// Code your solution in this file!
// 1 block = 264 feet
const hqBlock = 42;

// Returns number of blocks from HQ (42nd Street)
function distanceFromHqInBlocks(someValue) {
  return Math.abs(someValue - hqBlock);
}

// Converts block distance to feet
function distanceFromHqInFeet(someValue) {
  return distanceFromHqInBlocks(someValue) * 264;
}

// Calculates feet traveled between any two blocks
function distanceTravelledInFeet(start, destination) {
  return Math.abs(destination - start) * 264;
}

// Fare calculator logic
function calculatesFarePrice(start, destination) {
  const feet = distanceTravelledInFeet(start, destination);

  if (feet <= 400) {
    return 0;
  } else if (feet > 400 && feet <= 2000) {
    return (feet - 400) * 0.02;
  } else if (feet > 2000 && feet <= 2500) {
    return 25;
  } else {
    return 'cannot travel that far';
  }
}