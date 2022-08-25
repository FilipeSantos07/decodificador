function jogartextoarea2() {
  var texto1 = document.querySelector("#textarea1")
  var area2 = document.querySelector("#textarea2")
  area2.value = texto1.value
}


function copiar() {
    area2.select();
    navigator.clipboard.writeText(area2.value)
    }