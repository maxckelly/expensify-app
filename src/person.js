console.log('person.js is running')

const isAdult = (age) => {
  if (age > 18) {
    console.log("You're and adult!")
  } else {
    console.log("You aren't an adult buddy")
  }
};

const canDrink = (age) => {
  if (age > 18) {
    return console.log("You can drink champ!");
  } else {
    return console.log("You can still have a drink young one")
  }
};

const isSenior = (age) => {
  if (age > 65) {
    return console.log("You're old");
  } else {
    return console.log("You're not old");
  }
}

export {isAdult, canDrink, isSenior as default};