const infiniteArray = require('./lib');

const nba = infiniteArray(['N', 'B', 'A']);

console.log(nba[-6]); // N
console.log(nba[-5]); // B
console.log(nba[-4]); // A
console.log(nba[-3]); // N
console.log(nba[-2]); // B
console.log(nba[-1]); // A
console.log(nba[0]); // N
console.log(nba[1]); // B
console.log(nba[2]); // A
console.log(nba[3]); // N
console.log(nba[4]); // B
console.log(nba[5]); // A
