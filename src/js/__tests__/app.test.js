import getHealthStatus from '../app';

test.each([
  ['Маг', 90, 'healthy'],
  ['Маг', 30, 'wounded'],
  ['Маг', 10, 'critical'],
])('test func whith %s person, %h - health, %c color', (person, health, stat) => {
  const character = { name: person, health };
  const result = getHealthStatus(character);
  expect(result).toBe(stat);
});
