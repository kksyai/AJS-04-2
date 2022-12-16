const person = [
  { name: 'мечник', health: 10 },
  { name: 'маг', health: 100 },
  { name: 'лучник', health: 80 },
];

export default function math(a, b) {
  if (a.health < b.health) {
    return 1;
  }
  return -1;
}
person.sort(math);

console.log(person.sort());
