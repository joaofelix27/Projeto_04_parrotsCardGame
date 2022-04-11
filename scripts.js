// PERGUNTANDO AO USUÁRIO QUANTAS CARTAS VÃO SER
let meuinterval=setInterval(tempo,1000)
let aumenta_segundos =0
let conteudo_titulo=document.querySelector(".container_titulo")
let conteudo_cartas=document.querySelector(".container_cartas")
let conteudogeral=document.querySelector(".conteudogeral")
let num_cartas = prompt ('Quantas cartas vão ser? 4~14')
let tudook ="ainda n"
    while (tudook=="ainda n"){
        if (isNaN(num_cartas) || num_cartas<4 || num_cartas >14 || (num_cartas%2)==1) {
            num_cartas = prompt ('Quantas cartas vão ser? 4~14')

        } else {
            tudook= "ok"
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
    cardData = [{imgSrc:"",name:""}]
     for (let i=0;i<(num_cartas/2);i++) {
         cardData[i]=  getData () [i]
     }
    cardData = cardData.concat(cardData).sort();
    cardData.sort ( () => Math.random() - 0.5);
    return cardData;
 }
// FUNÇÃO QUE GERA AS CARTAS
gerarcartas()
function gerarcartas () {
let contador=0
let cardData = randomize()
while (contador<num_cartas) {
    const carta = document.createElement("div")
    const face = document.createElement("img")
    const verso = document.createElement("img")
    carta.classList="carta"
    face.classList="face"
    verso.classList="verso"
    face.src= cardData[contador].imgSrc
    carta.setAttribute("nome", cardData[contador].name )
    verso.src= "/Imagens/front.png"
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
let cartasclicadas
let cartasviradas
let jogadas=0
// FUNÇÃO QUE CHECA AS CARTAS
const checarcartas = (e) =>{
    jogadas++
    cartasclicadas=[]
    const cartaclicada = e.target
    cartaclicada.classList.add("virada")
    cartasviradas= document.querySelectorAll(".virar_carta")
    cartasclicadas= document.querySelectorAll(".virada")
    if (cartasclicadas.length===2) {
        if(cartasclicadas[0].getAttribute("nome")===cartasclicadas[1].getAttribute("nome")){
            cartasclicadas[0].classList.remove("virada")
            cartasclicadas[1].classList.remove("virada")
            cartasclicadas=[]
        } else {
                setTimeout(virarcartas,1000)
                }
    }
    if (cartasviradas.length==num_cartas){
        alert(`Você ganhou o jogo em ${jogadas} jogadas e em ${aumenta_segundos} segundos!`)
        clearInterval(meuinterval)
        setTimeout(reiniciar,1000)
    }
}
// FUNÇÃO QUE VIRA AS CARTAS
 function virarcartas (){
    cartasclicadas[0].classList.remove("virar_carta")
    cartasclicadas[0].classList.remove("virada")
    cartasclicadas[1].classList.remove("virar_carta")
    cartasclicadas[1].classList.remove("virada")
    cartasclicadas=[]
 }
 // FUNÇÃO QUE REINICIA O JOGO
 function reiniciar () {
     aumenta_segundos=0
     meuinterval=setInterval(tempo,1000)
    jogadas=0
    for (i=0;i<cartasviradas.length;i++){
        cartasviradas[i].classList.remove("virar_carta")
    }
    lopes=prompt("Deseja jogar novamente? sim/nao").toLowerCase()
    console.log(lopes)
    
    if (lopes=="sim"){
        conteudogeral=document.querySelector(".conteudogeral")
        conteudogeral.innerHTML=""
        num_cartas = prompt ('Quantas cartas vão ser? 4~14')
        tudook ="ainda n"
        while (tudook=="ainda n"){
                    if (isNaN(num_cartas) || num_cartas<4 || num_cartas >14 || (num_cartas%2)==1) {
                        num_cartas = prompt ('Quantas cartas vão ser? 4~14')

                    } else {
                        tudook= "ok"
                }
        }
    conteudogeral.innerHTML=""
    jogadas=0
    gerarcartas()
    } else {
        conteudo_titulo.innerHTML=""
        conteudo_cartas.innerHTML=""
    }
 }
 // FUNÇÃO QUE CONTA OS SEGUNDOS DE CADA JOGO
function tempo () {
    aumenta_segundos+=1
    const caixa_tempo= document.querySelector(".tempo")
    caixa_tempo.innerHTML=aumenta_segundos
    
 }
