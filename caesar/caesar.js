function onload(){
  var input;
  var charCodes = [];
  var cryptedArray = [];
  var cryptedString = '';
  var output = document.getElementById('output');
  var crypt = document.getElementById('crypt');
  crypt.onclick = function(){
    cryptedArray = [];
    cryptedString = '';
    input = document.getElementById('input').value;
    for (let letter of input){
      charCodes.push(letter.charCodeAt(0) + 10);
      cryptedArray.push(String.fromCharCode(letter.charCodeAt(0) + 10))
    }
    console.log(charCodes);
    console.log(cryptedArray);
    for (let letter of cryptedArray){
      cryptedString += letter;
    }
    output.innerHTML = cryptedString;
  };
}
