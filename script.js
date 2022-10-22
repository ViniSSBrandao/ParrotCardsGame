
let cartas = prompt('Quantas cartas você quer? \n Digite um número par de 4 a 14.');

let jogo = false;

while(jogo!=true){
    if (((cartas%2)!=0)||(cartas<4)||(cartas>14)){
        cartas = prompt('Erro!\n Você deve digitar um número par entre 4 e 14! \n Digite um número par de 4 a 14.')
        console.log(`cartas do jogo: ` + cartas);
    }
    else{
        jogo=true;
       
    criarCards(cartas);
    break; 
    }
}



//Template de carta <div class = "card">
            //<img src="./Archives\back.png" id="parrot" alt="">
            //</img></div>




//Criar os Cards:

function criarCards(cartas){

    const card = document.querySelector('.cards');
    console.log(card);
    

    for(let i=0; i<(cartas/2); i++){
          
        card.innerHTML = card.innerHTML + `<div class = "card" id="pair${i}"> 
          <img src="./Archives/back.png" id="parrot" alt="">
          </div>
          
          <div class = "card pair${i}"> 
          <img src="./Archives/back.png" id="parrot" alt="">
          </div>
          `;

          

        console.log(`par ${i+1} criado`);

    }

}


