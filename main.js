import './style.css';
import MyGrammarLexer from './MyGrammarLexer.js';
import MyGrammarParser from './MyGrammarParser.js';
import antlr4, { FailedPredicateException } from 'antlr4';

const myButton = document.getElementById('checksyntax');
const consoleLogDiv = document.getElementById('response');
let errorsFound = false;

console.error = function (message) {
  const errorEntry = document.createElement('div');
  console.log(message, 'look here');
  if (typeof message === 'string' && message.trim() === '') {
    errorEntry.textContent = 'correct';
  } else {
    errorEntry.style.color = 'red';
    errorEntry.textContent = message;
    errorsFound = true;
  }
  consoleLogDiv.appendChild(errorEntry);
};

// Add an event listener to execute a function when the button is clicked
myButton.addEventListener('click', function () {
  errorsFound = false;
  consoleLogDiv.innerHTML = '';
  // Your function code goes here
  try {
    var input = document.getElementById('input').value;
    var lexer = new MyGrammarLexer(new antlr4.InputStream(input));
    var tokens = new antlr4.CommonTokenStream(lexer);
    var parser = new MyGrammarParser(tokens);
    parser.buildParseTrees = true;
    var tree = parser.expr();
    console.log(tree, 'tree');
  } catch (error) {
    console.log(error);
  }
  // console.log(errorsFound);
  if (!errorsFound) {
    const noErrorsEntry = document.createElement('div');
    noErrorsEntry.textContent = 'no errors';
    consoleLogDiv.appendChild(noErrorsEntry);
  }
});
