import sum from './basic';

export default function getHealthStatus(character) {
  const { health } = character;
  if (health > 50) {
    return 'healthy';
  } if (health > 15) {
    return 'wounded';
  }
  return 'critical';
}

console.log('worked');// eslint-disable-line no-console

console.log(sum([1, 2]));// eslint-disable-line no-console
