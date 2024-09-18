const fizz = document.getElementById("fizzValue");
const buzz = document.getElementById("buzzValue");
const btn = document.getElementById("btnSubmit");
const result = document.getElementById("results");

btn.addEventListener("click", displayValues);

function doFizzBuzz()
{
  let fizzValue = parseInt(fizz.value);
  let buzzValue = parseInt(buzz.value);

  let fizzBuzzArray = [];

  for (let i = 1; i <= 100; i++)
  {
    if (i % fizzValue == 0 && i % buzzValue == 0)
    {
      fizzBuzzArray.push("FizzBuzz");
    } else if (i % fizzValue == 0)
    {
      fizzBuzzArray.push("Fizz");
    } else if (i % buzzValue == 0)
    {
      fizzBuzzArray.push("Buzz");
    } else
    {
      fizzBuzzArray.push(i);
    }

  }

  return fizzBuzzArray;
}

function displayValues()
{
  let array = doFizzBuzz();



  for (let i = 0; i < array.length -1; i+=10)
  {
    let value;
    result.innerHTML += `<tr><td>${value}</td></tr>`;

    for (let j = 0; j < array.length; j++)
    {
      value = array[j];
    }
  }

}
