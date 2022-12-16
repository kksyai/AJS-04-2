import { person } from '../arrange';

test('massive sould be arraned', () => {
  const expected = [
    { name: 'маг', health: 100 },
    { name: 'лучник', health: 80 },
    { name: 'мечник', health: 10 },
  ];
  const received = person.sort();
  expect(received).toEqual(expected);
});
