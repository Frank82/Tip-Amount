food = Number(prompt('How much was the fruit?'));
tipPercentage = Number(prompt('tip %?')) / 100;
tipAmount = food * tipPercentage;
total = food + tipAmount;

console.log('Food Amount:', food);
console.log('Tip Amount:', tipAmount);
console.log('Total:', total);
