const hello: string = "Hallo Welt";
console.log(hello);

//!-------------------------------Tag 4 - Aufgabe 1------------------------------------------------

function concat(charac1: string, charac2: string): string {
  let result: string = charac1 + charac2;
  return result;
}

let message1 = concat("Hallo ", "Kevin");
console.log("message1", message1);

export { };

//!-------------------------------Tag 4 - Aufgabe 2------------------------------------------------

function toNumber(word: string): number {
  let result = Number(word);
  return result;
}

let message2 = toNumber("5");
console.log("message2", message2);

//!-------------------------------Tag 4 - Aufgabe 3------------------------------------------------

function chain(word1: string, much: number): string {
  let result: string = "";

  for (let i = 0; i < much; i++) {
    result += word1;
  }

  return result;
}

let message3 = chain("Wort", 4);

console.log("message3", message3);

//!-------------------------------Tag 4 - Aufgabe 4------------------------------------------------

function isVowel(char: string): boolean {
  let result: boolean = false;
  let vowel = ["a", "e", "i", "o", "u"];
  vowel.includes(char) ? result = true : result = false;

  return result;
}

let message4 = isVowel("a");
console.log("message 4", message4);

//!-------------------------------Tag 4 - Aufgabe 5------------------------------------------------

function onlyVowel(inputString: string, repeatCount: number): string {
  const vowels = ["a", "e", "i", "o", "u"];
  let result = "";
  // Loops over all charathers
  for (let i = 0; i < inputString.length; i++) {

    const currentChar = inputString[i].toLowerCase();
    //registers if character is a vowel
    if (vowels.includes(currentChar)) {
      result += currentChar.repeat(repeatCount);
    } else {
      result += inputString[i];
    }
  }
  return result;
}

const message5 = onlyVowel("Hello World!", 10);
console.log("message5:", message5); // outputs: message5: Heeeeeeeeeelloooooooooo Woooooooooorld!


//!-------------------------------Tag 4 - Aufgabe 6 - Dice ------------------------------------------------

let random = Math.random(); //generates a random number between 0 - 0,9999
let randomFullNumber: number = random * 6; // number between 0 - 5,9999
let randomFullNumberFloor: number = Math.floor(randomFullNumber);  //rounding down between 0-5
let randomFullNumberFloorSix: number = randomFullNumberFloor + 1; // number between 1-6

console.log("Dice:", randomFullNumberFloorSix);


//!-------------------------------Tag 4 - Aufgabe 7 - Dice game ------------------------------------------------

//! Dice 1
let random1 = Math.random(); //generates a random number between 0 - 0,9999
let randomFullNumber1: number = random1 * 6; // number between 0 - 5,9999
let randomFullNumberFloor1: number = Math.floor(randomFullNumber1);  //rounding down between 0-5
let randomFullNumberFloorSix1: number = randomFullNumberFloor1 + 1; // number between 1-6

console.log("Dice 1:", randomFullNumberFloorSix1);


//! Dice 2
let random2 = Math.random(); //generates a random number between 0 - 0,9999
let randomFullNumber2: number = random2 * 6; // number between 0 - 5,9999
let randomFullNumberFloor2: number = Math.floor(randomFullNumber2);  //rounding down between 0-5
let randomFullNumberFloorSix2: number = randomFullNumberFloor2 + 1; // number between 1-6

console.log("Dice 2:", randomFullNumberFloorSix2);

console.log("Dice game result:", randomFullNumberFloorSix1 + randomFullNumberFloorSix2);
//!---------------------------------------------------------------------------------------------------------------------------------------------
export { };