import arrangeMassive from '../arrange.js';

const person = [
  { name: 'мечник', health: 10 },
  { name: 'маг', health: 100 },
  { name: 'лучник', health: 80 },
];

person.reduce((data)=>{
  return console.log(data.health)
})

console.log(person.health);
