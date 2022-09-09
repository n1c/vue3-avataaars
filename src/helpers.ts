/* eslint-disable import/prefer-default-export */
function getRandomElement(input: Array<string>): string {
  return input[Math.floor(Math.random() * input.length)];
}

export function getRandomKey(input: Record<string, unknown>): string {
  return getRandomElement(Object.keys(input));
}
