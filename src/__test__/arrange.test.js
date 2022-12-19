import { sortMass } from '../arrange';

test('massive sould be arraned', () => {
  const expected = [
    { name: 'маг', health: 100 },
    { name: 'лучник', health: 80 },
    { name: 'мечник', health: 10 },
  ];
  // const received = ;
  expect(sortMass).toEqual(expected);
});
