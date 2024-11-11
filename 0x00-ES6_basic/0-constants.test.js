const { taskFirst, taskNext } = require('./0-constants.js');

test('tasks are properly defined', () => {
  expect('${taskFirst()} ${taskNext()}').toEqual("I prefer const when I can. But sometimes let is okay")});
