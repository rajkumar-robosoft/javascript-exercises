// the standard function Math.min that returns its smallest argument.
// we can build something like that now. Write a function min that takes two arguments and returns their minimum.

function min(x, y) {
  if (x < y) {
    return x;
  } else {
    return y;
  }
}
console.log(min(0, 10));
// → 0
console.log(min(0, -10));
// → -10
