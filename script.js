// 1
for (i = 1; i < 8; i++){
    console.log(i);
};

console.log('====================================');
// 2
for (i = 5; i < 26; i += 4){
    console.log(i);
};

console.log('====================================');
// 3a
const wizards = [
    `Harry Potter`,
    `Hermione Granger`,
    `Ron Weasley`
];
console.log(wizards);

console.log('====================================');

// 3b
for (name of wizards){
    console.log(name);
};

console.log('====================================');
// 4a
let harryPotterMovies = 0;
// 4b
while (harryPotterMovies < 8){
    harryPotterMovies ++;
};
console.log('====================================');
// 4c
console.log(harryPotterMovies);

console.log('====================================');

// BONUS!!!
// 5a
const hogwartsHouses =[
    `Gryffindor`, 
    `Hufflepuff`,
    `Ravenclaw`, 
    `Slytherin`
];
console.log('====================================');

// 5b
for(list of hogwartsHouses){
    for(letters of list){
        console.log(letters);
    }
};

console.log('====================================');

//6a
const quote = [
    `Yer`,
    `A`,
    `Wizard`,
    `Harry`
];
console.log('====================================');

// 6b
let magicQuote = ``;
for(i = 0; i < quote.length; i++){
    magicQuote += ` ${quote[i]}`
}
magicQuote = magicQuote.trim();
console.log(magicQuote);

console.log('====================================');

// 7
// Inspired by FizzBuzz!!!
for(i=1; i<=25; i++){
    if (i % 3 === 0 && i % 5 ===  0){
        console.log(`Expecto Patronum`);
    } else if (i % 3 === 0) {
        console.log(`Expecto`);
    } else if (i % 5 === 0) {
        console.log(`Patronum`);
    } else {
        console.log(i);
    }
}
