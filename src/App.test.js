import { expect, test } from '@jest/globals';
test('Jimp can load', () => {
  // eslint-disable-next-line global-require
  expect(() => require('jimp')).not.toThrow();
});