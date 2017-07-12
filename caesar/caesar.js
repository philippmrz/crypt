var input;
var key;
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
  console.log(key);
}

function addCodesToArray(){
  for (let letter of input){
    console.log('2      ' + key);
    cryptedArray.push(String.fromCharCode(letter.charCodeAt(0) + key))
  }
}
