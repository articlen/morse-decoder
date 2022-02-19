const MORSE_TABLE = {
  ".-": "a",
  "-...": "b",
  "-.-.": "c",
  "-..": "d",
  ".": "e",
  "..-.": "f",
  "--.": "g",
  "....": "h",
  "..": "i",
  ".---": "j",
  "-.-": "k",
  ".-..": "l",
  "--": "m",
  "-.": "n",
  "---": "o",
  ".--.": "p",
  "--.-": "q",
  ".-.": "r",
  "...": "s",
  "-": "t",
  "..-": "u",
  "...-": "v",
  ".--": "w",
  "-..-": "x",
  "-.--": "y",
  "--..": "z",
  ".----": "1",
  "..---": "2",
  "...--": "3",
  "....-": "4",
  ".....": "5",
  "-....": "6",
  "--...": "7",
  "---..": "8",
  "----.": "9",
  "-----": "0",
};

function decode(expr) {
  let res = "";
  let temp;
  console.log(expr);
  let arr = expr.split("");
  console.log(arr);
  let str;
  for (let i = 0; i < arr.length; i += 10) {
    if (arr[i] == "*") {
      res += " ";
      continue;
    }
    str = "";
    for (let j = 0; j < 10; j += 2) {
      temp = arr[j + i] + arr[j + 1 + i];
      console.log(temp);
      switch (temp) {
        case "10":
          str += ".";
          break;
        case "11":
          str += "-";
          break;
        default:
      }
      console.log(str);
    }
    if (str) {
      res += MORSE_TABLE[str];
    }
  }

  return res;
}
module.exports = {
  decode,
};