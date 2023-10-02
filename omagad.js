<!DOCTYPE html>
<html>
<head>
    <title>жопа</title>
</head>
    <body>
        <h2> ну тіпа да </h2>
        <input type= "text" id="display" readonly>
        <br>
        <button onClick="clearDisplay()">P</button>
        <button onClick="appendToDisplay('7')">7</button>
        <button onClick="appendToDisplay('8')">8</button>
        <button onClick="appendToDisplay('9')">9</button>
        <button onCLick="appendToDisplay('+')">+</button>
        <br>
        <button onCLick="appendToDisplay('-')">-</button>
        <button onClick="appendToDisplay('6')">6</button>
        <button onClick="appendToDisplay('5')">5</button>
        <button onClick="appendToDisplay('4')">4</button>
        <br>
        <button onClick="appendToDisplay('3')">3</button>
        <button onClick="appendToDisplay('2')">2</button>
        <button onClick="appendToDisplay('1')">1</button>
        <button onClick="appendToDisplay('*')">*</button>
        <br>
        <button onClick="appendToDisplay('0')">0</button>
        <button onClick="calculateResult()">=</button>
        <button onClick="appendToDisplay('/')">/</button>

  <script>
    let currentInput = '';

  function appendToDisplay(value) {
    currentInput += value ;
    document.getElementById('diplay').value = currentInput;
  } 

function clearDisplay() {
  currentInput = '';
  document.getElementById('display').value = '';
}

function calculateResult() {
  try {
    currentInput = eval(currentInput);
    document.getElementById('display').value = currentInput;
  } catch (error) {
    document.getElementById9'display').value = 'Помилка';
  }
}
</script>
</body>
  </html>
