function encriptar() {
  var inputText = document.querySelector("#texto-entrada");
  var outputText = document.querySelector("#texto-saida");

  var texto = inputText.value.toLowerCase();
  
  var textoCriptografado = texto
  .replace(/e/g,"enter")
  .replace(/i/g,"imes")
  .replace(/a/g,"ai")
  .replace(/o/g,"ober")
  .replace(/u/g,"ufat");

  outputText.value = textoCriptografado;
}
function descriptografar() {
  var inputText = document.querySelector("#texto-entrada");
  var outputText = document.querySelector("#texto-saida");

  var texto = inputText.value.toLowerCase();

  var textoDescriptografado = texto
  .replace(/enter/g,"e")
  .replace(/imes/g,"i")
  .replace(/ai/g,"a")
  .replace(/ober/g,"o")
  .replace(/ufat/g,"u")

  outputText.value = textoDescriptografado
}



function copiar() {
    var outputText = document.querySelector("#texto-saida");
    outputText.select();
    navigator.clipboard.writeText(outputText.value);
    outputText.value = "";
    }