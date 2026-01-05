export function splitParam(input) {
  let number = input.match(/[\d\.\/]+/g) || ["1"];
  let string = input.match(/[a-zA-Z]+/g);
  return [number[0], string[0]];
}
