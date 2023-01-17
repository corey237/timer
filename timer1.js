const timers = process.argv.slice(2);
if (timers.length === 0) {
  console.log("No timers detected. Exiting program");
  process.exit();
}

for (const num of timers) {
  if (isNaN(num) || num < 0) {
    console.log(`Invalid input detected. ${num} is either a negative value or not a number. Exiting the program.`);
    process.exit();
  }
  setTimeout(() => {
    process.stdout.write('\x07');
    console.log(`Beep after ${num} seconds`);
  }, num * 1000);
}