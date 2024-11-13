import taskBlock from './1-block-scoped';

test('test block scope', () => {
  expect(taskBlock(true)).toStrictEqual([ false, true ]);
});
