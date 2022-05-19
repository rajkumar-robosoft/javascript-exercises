// Chessboard
// Write a program that creates a string that represents an 8×8 grid, using newline characters to separate lines.
// At each position of the grid there is either a space or a "#" character. The characters should form a chessboard.


let size = 8;
for (let i = 0; i < size; i++) {
  let str = "";
  for (let j = 0; j < size; j++) {
    if (i % 2 == 0) {
      if (j % 2 == 0) str += " ";
      else str += "#";
    } else {
      if (j % 2 == 0) str += "#";
      else str += " ";
    }
  }
  console.log(str + "\n");
}
