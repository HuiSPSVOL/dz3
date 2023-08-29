const year = prompt('Enter the year to check for altitude:');

if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
    console.log(`Год ${year} - leap year`);
} else {
    console.log(`Год ${year} - not a leap year`);
}