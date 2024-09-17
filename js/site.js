const fizz = document.getElementById("fizzValue");
const buzz = document.getElementById("buzzValue");
const btn = document.getElementById("btnSubmit");
const result = document.getElementById("results");

btn.addEventListener("click", getValueRange);



/* Add the range to an array */
function getValueRange()
{
  /* Get and convert user input */
  let fizzValue = parseInt(fizz.value);
  let buzzValue = parseInt(buzz.value);
  let array = [];
  for (let i = fizzValue; i <= buzzValue; i++)
  {
    array.push(i);
  }
  console.log(array);
}

function doFizzBuzz()
{
  let numbers = getValueRange();
  let fizzBuzzArray = [];


  console.log(numbers);
}














function displayValues()
{
  for (let i = 0; i <= numbers.length -1; i+=10)
  {
    result.innerHTML += `<tr><td>"test"</td></tr>`;
  }
}
