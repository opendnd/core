const Roll = require("roll"); // tslint:disable-line

// helper method to roll the dice with a string or array of dice
export const roll = (dice) => {
  if (typeof(dice) === "string") {
    return new Roll().roll(dice).result;
  } else {
    let result = 0;
    dice.forEach((die) => {
      result += new Roll().roll(die).result;
    });
    return result;
  }
};
