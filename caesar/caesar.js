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
  charCodes = [];
  cryptedString = '';
  input = document.getElementById('input').value;
  key = document.getElementById('key').value;
}

function addCodesToArray(){
  for (let letter of input){
    charCodes.push(getEncryptedCharCode(letter));
    cryptedArray.push(String.fromCharCode(getEncryptedCharCode(letter)));
  }
}

function getEncryptedCharCode(char){
  var charCode;
  charCode = char.charCodeAt(0) + parseInt(key);
  if(charCode > 90 && charCode < 97 && key < 0){
    charCode += 26;
  } else if (charCode > 122){
    charCode -= 26;
  } else if (charCode < 65){
    charCode += 26;
  }else if (charCode > 90 && charCode < 97 && key > 0){
    charCode -= 26;
  }
  return charCode;
}
