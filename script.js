
let cartas = prompt('Quantas cartas você quer? \n Digite um número par de 4 a 14.');

let jogo = false; // diz se o jogo iniciou

let contador=0; //conta o numero de jogadas

let cartaAnterior,  indexCartaAnterior, score=0, paresFeitos = [], selectedAntes; // carta escolhida na rodada anterior//pares feitos// cartas selecionadas anteriormente

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


//Criar os Cards:

function criarCards(cartas){

    const card = document.querySelector('.cards');
    console.log(card);
    let par, aux, i=0;
    let alreadyIn = [];

    //template de carta legacy
                // card.innerHTML = card.innerHTML + `<li class = "card" id="pair${par}" onclick="select(this, ${par}, ${i})"> 
                // <img src="./Archives/back.png" id="parrot" alt="">${par}
               // </li>
               // `;

    while( aux != true){
        //Criando os cards já embaralhadas//  
        par = parseInt(Math.random() *cartas);
    
        
        if(alreadyIn.includes(par)===false){
            if(par%2!=0){
                alreadyIn.push(par);
                par--;
                card.innerHTML = card.innerHTML + `<div class = "card" id="pair${par}" onclick="select(this, ${par}, ${i})"> 
                <div class="face front-face"><img src="./Archives/back.png" id="parrot" alt=""></div>
                <div class="back-face face"><img src="./Archives/${par}.gif"></div>
                </div>
                
                `;

                console.log(`carta de par ${par}`);
            }
            else{
                card.innerHTML = card.innerHTML + `<div class = "card" id="pair${par}" onclick="select(this, ${par}, ${i})"> 
                <div class="face front-face"><img src="./Archives/back.png" id="parrot" alt=""></div>
                <div class="back-face face"><img src="./Archives/${par}.gif"></div>
                </div>
                
                `;

                console.log(`carta de par ${par}`);
                alreadyIn.push(par);
            }
           
            i++;
           
            console.log(alreadyIn);
        }
        else if((alreadyIn.length) == cartas){
            break;
        }
        else{}
      
        console.log(`carta ${par} criada\nindice ${i}`);
        
    }

}

//selecao de cartas//

function select(selected, par, cardIndex){
    if(((contador%2)==0)&&contador!=0){
        cartaAnterior = -1;
        indexCartaAnterior = -1;
    }
  
    

    if(cardIndex === indexCartaAnterior){
        alert('Selecione uma carta diferente');
        return 0;
    }

    if(paresFeitos.includes(par)==true){
        alert('selecione uma carta oculta');
        return 0;
    }
    else{
    contador++;
    }



    console.log("carta selecionada " );
    selected.classList.add('selected');
    let cartaEscolhida = par;

    

    if (cartaEscolhida===cartaAnterior){
        paresFeitos.push(par);
        score++;
        if(score==cartas/2){
        alert(`Você ganhou com ${contador} jogadas!`)
        }
        console.log("par feito " + paresFeitos)
        return 0;
    }
    

    if(((contador%2)==0)&&contador!=0){
        console.log("cartas reiniciadas");
        setTimeout(virarCarta, 1000, selected, selectedAntes);
    }

    indexCartaAnterior = cardIndex;
    selectedAntes = selected;
    cartaAnterior = par;
}



function virarCarta(selected, selectedAntes){
        selected.classList.remove('selected');
        selectedAntes.classList.remove('selected');
}
