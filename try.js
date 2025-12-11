function sumTimes(hours, minutes, seconds, addMinutes) {
  // Convert current time to total minutes
  let totalMinutes = hours * 60 + minutes;
  
  // Add the additional minutes
  totalMinutes += addMinutes;
  
  // Convert back to hours and minutes, handling overflow
  let resultHours = Math.floor(totalMinutes / 60) % 24; // % 24 to handle 24-hour format
  let resultMinutes = totalMinutes % 60;
  
  // Format as hh:mm
  const formattedHours = String(resultHours).padStart(2, '0');
  const formattedMinutes = String(resultMinutes).padStart(2, '0');
  

// Test cases from the problem
console.log('Test 1:');
console.log('The time is 10:30 now.');
console.log(`After 00:05 the time will be ${sumTimes(10, 30, 0, 5)}.`);
console.log();

console.log('Test 2:');
console.log('The time is 10:30 now.');
console.log(`After 00:45 the time will be ${sumTimes(10, 30, 0, 45)}.`);
console.log();

console.log('Test 3:');
console.log('The time is 23:58 now.');
console.log(`After 01:15 the time will be ${sumTimes(23, 58, 1, 15)}.`);

}