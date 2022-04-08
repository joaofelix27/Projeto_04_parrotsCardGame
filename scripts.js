// PERGUNTANDO AO USUÁRIO QUANTAS CARTAS VÃO SER
const conteudogeral=document.querySelector(".conteudogeral")
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
// OBJETO COM OS GIFS DA IMAGEM
let cardData = [{imgSrc:"",name:""}]
const getData = () => [
    {imgSrc: "/Imagens/bobrossparrot.gif", name: "bobrossparrot"} ,
    {imgSrc: "/Imagens/explodyparrot.gif", name: "explodyparrot"} ,
    {imgSrc: "/Imagens/fiestaparrot.gif", name: "fiestaparrot"} ,
    {imgSrc: "/Imagens/metalparrot.gif", name: "metalparrot"} ,
    {imgSrc: "/Imagens/revertitparrot.gif", name: "revertitparrot"} ,
    {imgSrc: "/Imagens/tripletsparrot.gif", name: "tripletsparrot"} ,
    {imgSrc: "/Imagens/unicornparrot.gif", name: "unicornparrot"} ,
];
// FUNÇÃO QUE EMBARALHA AS CARTAS
 const randomize = () => {
     for (let i=0;i<(num_cartas/2);i++) {
         cardData[i]=  getData () [i]
     }
    cardData = cardData.concat(cardData).sort();
    cardData.sort ( () => Math.random() - 0.5);
    return cardData;
 }
// FUNÇÃO QUE GERA AS CARTAS
gerarcartas()
// const lista = document.querySelector(".cartas")
function gerarcartas () {
let contador=0
const cardData = randomize()
console.log(cardData[1].name)
while (contador<num_cartas) {
    const carta = document.createElement("div")
    const face = document.createElement("img")
    const verso = document.createElement("img")
    carta.classList="carta"
    face.classList="face"
    verso.classList="verso"
    face.src= cardData[contador].imgSrc
    carta.setAttribute("nome", cardData[contador].name )
    console.log(carta.name)
    verso.src= "/Imagens/front.png"

    // lista.innerHTML += `<div class="container_front" onclick="clicar(this)"> <img class="front" src="Imagens/front.png" <img class="front" src="Imagens/front.png" alt=""> </div>`
    contador += 1
    conteudogeral.appendChild(carta);
    carta.appendChild(face)
    carta.appendChild(verso)
    carta.addEventListener('click', (e)=>{
        carta.classList.toggle("virar_carta");
        checarcartas(e)
    })
}
}   
const checarcartas = (e) =>{
    const cartaclicada = e.target
    cartaclicada.classList.add("virada")
    let cartasclicadas= document.querySelectorAll(".virada")
    console.log(cartasclicadas) 
    if (cartasclicadas.length===2) {
        if(cartasclicadas[0].getAttribute("nome")===cartasclicadas[1].getAttribute("nome")){
            console.log("DEU BOM!!")
             
        } else {
                console.log("wrong")
                cartasclicadas[0].classList.remove("virar_carta")
                cartasclicadas[1].classList.remove("virar_carta")
                }
    }

}


