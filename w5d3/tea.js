const readline = require('readline');

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


reader.question("Would you like tea?", (answer) => {
  reader.question("Would you like biscuits", (differentAns) => {
    let first = answer;
    let second = differentAns;
    console.log(`Your answer is ${answer}!`);
    console.log(`your answer is ${differentAns}`);
    const firstRes = (first === 'yes') ? 'do' : 'don\'t';
 const secondRes = (second === 'yes') ? 'do' : 'don\'t';
 console.log(`So you ${firstRes} want tea and you ${secondRes} want biscuits.`);

  reader.close();
  });
});
