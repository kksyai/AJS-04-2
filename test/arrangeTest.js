import arrange from '../src/arrange';

// for(let i = 0; i < (arrange.length - 1); i++){
//     console.log(arrange[i].health);
//     if (arrange[i].health > arrange[i+1].health){
//         console.log('массив отсортирован')
//     }
//     //expect().toBe()
// }

const arrangeByHealth = arrange.reduce((currentHealth, currentUser) => {
  if (currentHealth > currentUser.health) {
    console.log('massive arranged');
    console.log(currentUser.health);
  }
  return currentUser.health;
}, 0);

console.log(arrangeByHealth);
