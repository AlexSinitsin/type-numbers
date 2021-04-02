import readlineSync from 'readline-sync';

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
};

const takeSimbol = () => {
  const simbols = '`~!@#$%^&*()_-+=|\\<>,.?/:;}{][';
  const index = getRandomInt(simbols.length);
  return simbols[index];
};

const fillRandomNumbers = () => {
  let result = '';
  let simbol;
  let lengthNumber = getRandomInt(6) + 1;
  for (let i = 0; i < lengthNumber; i += 1) {
    if (i % 2 === 0) {
      simbol = getRandomInt(10);
      result = `${result}${simbol}`;
    } else {
      simbol = takeSimbol();
      result = `${result}${simbol}`;
    }
  }
  return result;
};

const commitString = () => {
  const arrSimbols = [];
  for (let i = 0; i < 6; i += 1) {
    const randomNumber =  fillRandomNumbers();
    arrSimbols.push(randomNumber)
  }
  return arrSimbols.join(' ');
};

const workout = () => {
  console.log('Do you want to practice?')
  let end = true;
  while (end) {
    const question = console.log(commitString());
    const answer = readlineSync.question('');
    if (question === answer) {
      console.log('Congratulate!');
    } else if (answer === 'q') {
      end = false;
      console.log('Goodbye!');
    } else {
      console.log('### ERROR ###');
    }
  }
};

export default workout;

