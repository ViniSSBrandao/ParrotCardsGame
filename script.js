
let cartas = prompt('Quantas cartas você quer? \n Digite um número par de 4 a 14.');

let jogo = false; // diz se o jogo iniciou

let contador=0; //conta o numero de jogadas

let cartaAnterior,  indexCartaAnterior; // carta escolhida na rodada anterior

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
    let par, aux, i=0;
    let alreadyIn = [];

    

    while( aux != true){
        //Criando os cards já embaralhadas//  
        par = parseInt(Math.random() *cartas);
    
        
        if(alreadyIn.includes(par)===false){
            if(par%2!=0){
                alreadyIn.push(par);
                par--;
                card.innerHTML = card.innerHTML + `<li class = "card" id="pair${par}" onclick="select(this, ${par}, ${i})"> 
                <img src="./Archives/back.png" id="parrot" alt="">${par}
                </li>
                
                `;

                console.log(`carta de par ${par}`);
            }
            else{
                card.innerHTML = card.innerHTML + `<li class = "card" id="pair${par}" onclick="select(this, ${par}, ${i})"> 
                <img src="./Archives/back.png" id="parrot" alt="">${par}
                </li>
                
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

function select(selected, id, cardIndex){
    if(cardIndex === indexCartaAnterior){
        alert('Selecione uma carta diferente');
        return 0;
    }

    contador++;
    console.log("carta selecionada " );
    selected.classList.toggle('selected');
    let cartaEscolhida = id;
    
    if (cartaEscolhida===cartaAnterior){
        console.log("igual");
    }

    
    cartaAnterior = id;
    indexCartaAnterior = cardIndex;
}
