export const person = [
  { name: 'мечник', health: 10 },
  { name: 'маг', health: 100 },
  { name: 'лучник', health: 80 },
];

export const sortMass = person.sort((a, b) => {
  if (a.health < b.health) {
    return 1;
  }
  return -1;
});
