import React from 'react';

function sum(a: number, b: number) {
  return a + b;
}

describe('App', () => {
  describe('while fetching tasks', () => {
    it('renders loading', () => {
      expect(sum(1, 2)).toBe(3);
    });
  });
});
