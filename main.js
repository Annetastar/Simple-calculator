function sum() {
 let numberFirst, numberSecond, result;
 numberFirst = document.getElementById('number1').value;
 numberFirst = parseInt(numberFirst);

 numberSecond = document.getElementById('number2').value;
 numberSecond = parseInt(numberSecond);

 result = numberFirst + numberSecond;
 document.getElementById('out').innerHTML = result;
}

function subtraction() {
  let numberFirst, numberSecond, result;
  numberFirst =document.getElementById('number1').value;
  numberFirst = parseInt(numberFirst);

  numberSecond = document.getElementById('number2').value;
  numberSecond = parseInt(numberSecond);

  result = numberFirst - numberSecond;
  document.getElementById('out').innerHTML = result;
}

function multiplication() {
  let numberFirst, numberSecond, result;
  numberFirst =document.getElementById('number1').value;
  numberFirst = parseInt(numberFirst);


  numberSecond = document.getElementById('number2').value;
  numberSecond = parseInt(numberSecond);

  result = numberFirst * numberSecond;
  document.getElementById('out').innerHTML = result;
}

function division() {
  let numberFirst, numberSecond, result;
  numberFirst =document.getElementById('number1').value;
  numberFirst = parseInt(numberFirst);


  numberSecond = document.getElementById('number2').value;
  numberSecond = parseInt(numberSecond);
  if (numberSecond === 0) {
    result = "You divide by 0!"
  } else {
    result = numberFirst / numberSecond;
  }

  document.getElementById('out').innerHTML = result;
}

