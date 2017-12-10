import infiniteArray from '..';

describe('infiniteArray', () => {
  it('should exist', () => {
    expect(infiniteArray).toBeDefined();
  });

  it('should support getting negative index', () => {
    const array = infiniteArray(['A', 'B', 'C']);

    expect(array[-1]).toBe('C');
  });
});
