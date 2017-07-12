var input;
var key;
var charCodes = [];
var cryptedArray = [];
var cryptedString = '';
var output = document.getElementById('output');
var crypt = document.getElementById('crypt');

crypt.onclick = function(){
  resetValues();
  addCodesToArray();
  cryptedString = cryptedArray.join('');
  output.innerHTML = cryptedString;
};

function resetValues() {
  cryptedArray = [];
  cryptedString = '';
  input = document.getElementById('input').value;
  key = document.getElementById('key').value;
}

function addCodesToArray(){
  for (let letter of input){
    charCodes.push(letter.charCodeAt(0) + key);
    cryptedArray.push(String.fromCharCode(letter.charCodeAt(0) + parseInt(key)));
  }
    console.log(key);
    console.log(charCodes);
    console.log(cryptedArray);
}
