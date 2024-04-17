function subir( ) {
    let posicao = document.getElementById('box').style.top;
    // nesta linha nos removemos o texto 'px' do valor da variável posicao 
    let numero = posicao !='' ? parseInt(posicao.replace('px', '')): 0;

    // console.log serve para realizar o teste dos valores 
    // é apresentado no console do navegador 

   // console.log('posicao' + posicao);
    // console.log ('numero' + numero); 

    if (numero < 0 ) {
        numero = 0; 
   }
   

    numero = numero -10;
    document.getElementById('box').style.top = numero + 'px';
    
}

function esquerda( ) {
    let posicao = document.getElementById('box').style.left;
    // nesta linha nos removemos o texto 'px' do valor da variável posicao 
    let numero = posicao !='' ? parseInt(posicao.replace('px', '')): 0;

    // console.log serve para realizar o teste dos valores 
    // é apresentado no console do navegador 

    console.log('posicao' + posicao);
    console.log ('numero' + numero); 

    numero = numero -10;
    document.getElementById('box').style.left = numero + 'px';
    
}


function direita( ) {
    let posicao = document.getElementById('box').style.left;
    // nesta linha nos removemos o texto 'px' do valor da variável posicao 
    let numero = posicao !='' ? parseInt(posicao.replace('px', '')): 0;

    // console.log serve para realizar o teste dos valores 
    // é apresentado no console do navegador 

    //console.log('posicao' + posicao);
    // console.log ('numero' + numero); 

    // verifica se ja chegou ao topo do quadrado maior 
    // caso positivo nao deixo subir mais 

   
    numero = numero +10;
    document.getElementById('box').style.left = numero + 'px';
    
}


function descer( ) {
    let posicao = document.getElementById('box').style.top;
    // nesta linha nos removemos o texto 'px' do valor da variável posicao 
    let numero = posicao !='' ? parseInt(posicao.replace('px', '')): 0;

    // console.log serve para realizar o teste dos valores 
    // é apresentado no console do navegador 

    console.log('posicao' + posicao);
    console.log ('numero' + numero); 

    numero = numero +10;
    document.getElementById('box').style.top = numero + 'px';
    
}



