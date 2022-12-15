// data.sort((data1, data2) => (data1.health < data2.health ? 1 : -1));
// const life = 'health';

// const arrangeMassive = data.sort((data1, data2) => (data1.health < data2.health ? 1 : -1));
// export default arrangeMassive;

export default function arrangeMassive(data1, data2) {
  if (data1 < data2) {
    return 1;
  }
  return -1;
}
