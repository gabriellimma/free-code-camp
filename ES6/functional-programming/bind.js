function sumNumbers(firstNumber, secondNumber) {
	const sum = this + firstNumber + secondNumber;

	console.log(sum)
}

const bindResultFunction = sumNumbers.bind(10, 10)

bindResultFunction(5) // 17