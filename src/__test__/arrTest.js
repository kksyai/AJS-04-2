import arrangeMassive from '../arrange.js';

const person = [
  { name: 'мечник', health: 10 },
  { name: 'маг', health: 100 },
  { name: 'лучник', health: 80 },
];

const ARR = person.sort(arrangeMassive(person.health));
console.log(ARR);

// const arrangeByHealth = arrangeMassive.reduce((currentHealth, currentUser) => {
//   if (currentHealth > currentUser.health) {
//     console.log('massive arranged');
//     console.log(currentUser.health);
//   }
//   return currentUser.health;
// }, 0);

// console.log(arrangeByHealth);
