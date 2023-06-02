import sum from './basic';

export default function checkHealthStatus(character) {
  if (character.health > 50) {
    return 'healthy';
  } if (character.health > 15) {
    return 'wounded';
  }
  return 'critical';
}

console.log('worked');// eslint-disable-line no-console

console.log(sum([1, 2]));// eslint-disable-line no-console
