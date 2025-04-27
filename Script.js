function showValue(value) {
    document.getElementById("result").value += value;
  }
  

  function clearScreen() {
     document.getElementById("result").value = "";
  }

  function calculateResult() {
    try {
      document.getElementById("result").value = eval(document.getElementById("result").value);
    } catch (error) {
      document.getElementById("result").value = "Error";
    }
  }

  const nav = document.getElementById('result');
  {
    result.style.height = '100px';
    result.style.width = '380px';
  }
// Select all button elements
const buttons = document.querySelectorAll('button');


// Loop through each button and apply styles
buttons.forEach(button => {
  button.style.margin = '15px';
  button.style.height = '70px';
  button.style.width = '60px' ;
  button.style.fontSize = '20px';

  button.style.marginleft = '200px';
});
