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

  // Clear the previous table
  result.innerHTML = "";

  for (let i = 0; i < array.length; i+=10)
  {
    let row = document.createElement("tr");

    for (let j = 0; j < 10 && (i + j) < array.length; j++ )
    {
      let cell = document.createElement("td");
      cell.textContent = array[i + j];

      if (cell.textContent == "Fizz" || cell.textContent == "Buzz" || cell.textContent == "FizzBuzz")
      {
        cell.classList.add("fizzBuzz");
      }

      row.appendChild(cell);
    }
    result.appendChild(row);
  }

}
