function alerta() {
    alert("Oiiiii");
  
}


function copiar() {

var mensagem = document.querySelector("#textarea2");
mensagem.select();
navigator.clipboard.writeText(mensagem.value);

}