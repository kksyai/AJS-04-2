const data = [
  { name: 'мечник', health: 10 },
  { name: 'маг', health: 100 },
  { name: 'лучник', health: 80 },
];

const life = 'health';
const arrangeMassive = data.sort((data1, data2) => (data1[life] < data2[life] ? 1 : -1));

export default arrangeMassive;
