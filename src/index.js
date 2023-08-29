const number =prompt('enter the number')
if (number%3 < 1 && number%5 < 1) {
    console.log('FizzBuzz');
} else if(number%3 < 1) {
    console.log('Fizz');
} else if (number%5 < 1) {
    console.log('Buzz')
}