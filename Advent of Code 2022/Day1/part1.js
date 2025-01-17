const fs  = require("fs");

const elfCalories = fs.readFileSync(`${__dirname}/input`).toString().split('\n');

let calories = [];

let currentCalorieCount = 0;

for (let elfCalorie of elfCalories) {
	if (elfCalorie === "")	{
		calories.push(currentCalorieCount);
		currentCalorieCount = 0;
		continue;
	} else {
		currentCalorieCount += +elfCalorie;
	}
}
calories.push(currentCalorieCount);

calories.sort((a, b) => {
    return b-a;
});


console.log(calories[0]);

console.log(calories[0] + calories[1] + calories[2]);