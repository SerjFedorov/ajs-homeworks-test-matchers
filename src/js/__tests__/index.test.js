import checkHealthStatus from '../app';

describe('checkHealthStatus', () => {
  test('Здоровье более 50 - зелёный "healthy"', () => {
    const character = { name: 'Маг', health: 90 };
    const result = checkHealthStatus(character);
    expect(result).toBe('healthy');
  });

  test('Здоровье от 50 и до 15 - жёлтый "wounded" ', () => {
    const character = { name: 'Маг', health: 30 };
    const result = checkHealthStatus(character);
    expect(result).toBe('wounded');
  });

  test('Менее 15 - красный "critical" ', () => {
    const character = { name: 'Маг', health: 10 };
    const result = checkHealthStatus(character);
    expect(result).toBe('critical');
  });
});
