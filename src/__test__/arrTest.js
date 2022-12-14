import arrangeMassive from '../arrange';

const arrangeByHealth = arrangeMassive.reduce((currentHealth, currentUser) => {
  if (currentHealth > currentUser.health) {
    console.log('massive arranged');
    console.log(currentUser.health);
  }
  return currentUser.health;
}, 0);

console.log(arrangeByHealth);
