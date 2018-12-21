import complier from './complier';

test('Insert name and outputs JavaScript', async () => {
  const stats = await complier('example.txt');
  const output = stats.toJson().modules[0].source;

  expect(output).toBe('export default "Hey Alice!\\n"');
});
