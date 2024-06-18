// Set the date for the birth
const birthDate = new Date('2023-01-01T00:00:00').getTime();

// Update the countdown every second
const countdown = setInterval(() => {
  const now = new Date().getTime();
  const distance = birthDate - now;

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  console.log(`${days}d ${hours}h ${minutes}m ${seconds}s`);

  if (distance < 0) {
    clearInterval(countdown);
    console.log('Happy Birthday!');
  }
}, 1000);
