import './style.css';
import MyGrammarLexer from './MyGrammarLexer.js';
import MyGrammarParser from './MyGrammarParser.js';
import antlr4 from 'antlr4';

const myButton = document.getElementById('checksyntax');

// Add an event listener to execute a function when the button is clicked
myButton.addEventListener('click', function () {
  // Your function code goes here
  console.log('Button clicked!');
  console.log('hello');
  var input = document.getElementById('input').value;
  var lexer = new MyGrammarLexer(new antlr4.InputStream(input));
  var tokens = new antlr4.CommonTokenStream(lexer);
  var parser = new MyGrammarParser(tokens);
  parser.buildParseTrees = true;
  var tree = parser.expr();
  console.log(tree, 'tree');
});

window.onerror = function (error) {
  // Print the error message
  let output = document.getElementById('response');
  output.innerHTML += 'Message : ' + error + '<br>';
  output.innerHTML += 'Error Object : ' + error;
};
