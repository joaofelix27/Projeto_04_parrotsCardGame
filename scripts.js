let num_cartas = prompt ('Quantas cartas vão ser?')
let tudook ="ainda n"
    while (tudook=="ainda n"){
        if (isNaN(num_cartas) || num_cartas<4 || num_cartas >14 || (num_cartas%2)==1) {
            console.log(num_cartas)
            num_cartas = prompt ('Quantas cartas vão ser?')
            console.log(tudook)

        } else {
            tudook= "ok"
            console.log(tudook)
    }
}
const lista = document.querySelector(".cartas")
let contador=0
while (contador<num_cartas) {
    lista.innerHTML += `<div class="container_front"> <img class="front" src="Imagens/front.png" alt=""> </div>`
    contador += 1
}
