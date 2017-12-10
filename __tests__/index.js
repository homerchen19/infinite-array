import infiniteArray from '..';

describe('infiniteArray', () => {
  it('should exist', () => {
    expect(infiniteArray).toBeDefined();
  });

  it('should only accept array', () => {
    expect(() => infiniteArray({})).toThrow();
  });

  describe('get', () => {
    it('should support negative index', () => {
      const array = infiniteArray(['N', 'B', 'A']);

      expect(array[-1]).toBe('A');
      expect(array[-2]).toBe('B');
      expect(array[-3]).toBe('N');
      expect(array[-4]).toBe('A');
      expect(array[-5]).toBe('B');
      expect(array[-6]).toBe('N');
    });

    it('should support positive index', () => {
      const array = infiniteArray(['N', 'B', 'A']);

      expect(array[0]).toBe('N');
      expect(array[1]).toBe('B');
      expect(array[2]).toBe('A');
      expect(array[3]).toBe('N');
      expect(array[4]).toBe('B');
      expect(array[5]).toBe('A');
    });
  });

  describe('set', () => {
    it('should support negative index', () => {
      const array = infiniteArray(['N', 'B', 'A']);

      array[-1] = '-A';
      expect(array).toEqual(['N', 'B', '-A']);

      array[-2] = '-B';
      expect(array).toEqual(['N', '-B', '-A']);

      array[-3] = '-N';
      expect(array).toEqual(['-N', '-B', '-A']);

      array[-4] = '-D';
      expect(array).toEqual(['-N', '-B', '-D']);
    });

    it('should support positive index', () => {
      const array = infiniteArray(['N', 'B', 'A']);

      array[3] = 'C';
      array[4] = 'O';
      array[5] = 'O';
      array[6] = 'L';

      expect(array).toEqual(['N', 'B', 'A', 'C', 'O', 'O', 'L']);
    });
  });
});
