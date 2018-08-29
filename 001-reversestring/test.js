const reverse = require('./index');

test('Reverse function exists', () => {
  expect(reverse)
    .toBeDefined();
});

test('Reverse reverses a string', () => {
  expect(reverse('apple'))
    .toEqual('elppa');
});

test('Reverse reverses a string including spaces', () => {
  expect(reverse('  abcd'))
    .toEqual('dcba  ');
});
