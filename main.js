const firstNumber = document.querySelector("#num1")
const secondNumber = document.querySelector("#num2")
const button = document.querySelector(".btn")
const table = document.querySelector(".table-body")

button.addEventListener("click", fizzBuzz)

// Numbers Array
let numbersArray = []

function fizzBuzz() {

  const input1 = firstNumber.value
  const input2 = secondNumber.value

  // Generating numbers 1 to 100
  for(let i = 0; i <= 100; i++) {
    if (i % input1 !== 0) {
      numbersArray.push("Fizz")
    } else if (i % input2 !== 0) {
      numbersArray.push("Buzz")
    } else {
      numbersArray.push(i)
    }
  }

  console.log(numbersArray)
}
