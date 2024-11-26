async function delayPromise(milliseconds) {
  return new Promise((resolve) => setTimeout(resolve, milliseconds));
}

async function getUserWithDelay(userId) {
  await delayPromise(1000); // Simulate a delay
  return { id: userId, name: `User ${userId}` };
}

module.exports = getUserWithDelay;