function onload(){
  var input;
  var charCodes = [];
  var cryptedArray = [];
  var cryptedString = '';
  var output = document.getElementById('output');
  var crypt = document.getElementById('crypt');
  crypt.onclick = function(){

    input = document.getElementById('input').value;
    for (letter of input){
      charCodes.push(letter.charCodeAt(0) + 1);
      cryptedArray.push(String.fromCharCode(letter.charCodeAt(0) + 1))
    }
    console.log(charCodes);
    console.log(cryptedArray);
    output.innerHTML = cryptedArray;

  };
}
