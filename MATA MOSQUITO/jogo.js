// PEGANDO AS DIMENSÕES DA PÁGINA:
let altura;
let largura;
let vidas = 1;
let criaMosquitoTempo = 1500;

      // RECUPERANDO O NÍVEL ESCOLHIDO:

let nivel = window.location.search;
    nivel = nivel.replace('?', '');

    if(nivel === 'normal'){
        criaMosquitoTempo =  1500;
    }else if(nivel === 'dificil'){
        criaMosquitoTempo = 1000;
    }else if(nivel === 'chucknorris'){
        criaMosquitoTempo = 750;
    }

function ajustandoDimensao(){
    altura = window.innerHeight;
    largura = window.innerWidth;
}

ajustandoDimensao();



function random(){
    
    // DEFININDO POSIÇOES RANDOMICAS PARA O MOSQUITO:
    let posicaoX = Math.floor(Math.random() * largura) - 90;
    let posicaoY = Math.floor(Math.random() * altura) - 90;
    
    posicaoX = posicaoX < 0 ? 0 : posicaoX;
    posicaoY = posicaoY < 0 ? 0 : posicaoY; 
    
    // ADD O MOSQUITO À MINHA PÁGINA:
    
    const verificaExistencia = document.getElementById('mosquito');
    
    if(verificaExistencia === null){   
        let imagemMosquito = document.createElement('img');
        imagemMosquito.src = 'imagens/mosca.png';
        imagemMosquito.className = tamanhoMosquito() + ' ' + ladoMosquito();
        imagemMosquito.id = 'mosquito';
        imagemMosquito.style.left = posicaoX + 'px';
        imagemMosquito.style.top = posicaoY + 'px';
        imagemMosquito.style.position = 'absolute';
        imagemMosquito.onclick = function(){
            this.remove();
        };
        document.body.appendChild(imagemMosquito);
    }else{
        document.getElementById('mosquito').remove();
        
        if(vidas >= 3){
            window.location.href = 'fim_de_jogo.html'
        }else{
            document.getElementById('v' + vidas).src = 'imagens/coracao_vazio.png';
            vidas++;
        }
    }
    
}

// VARIANDO O TAMANHO DO MOSQUITO:
function tamanhoMosquito(){
    const tamanho = Math.floor(Math.random() * 3);
    
    switch(tamanho){
        case 0:
            return 'mosquito1';
            case 1:
                return 'mosquito2';
                case 2:
                    return 'mosquito3';
                }
            }
            
            
            // VARIANDO O LADO DO MOSQUITO:
            function ladoMosquito() {
                const lado = Math.floor(Math.random() * 2);
                
                switch(lado){
                    case 0:
                        return 'esquerda';
            case 1:
                return 'direita';
            }
        }
        
        const criaMosca = setInterval(function(){
            random();
        }, criaMosquitoTempo);
        
    
        // CRIANDO O CRONOMETRO:
        
        let tempo = 50;
        
        let cronometro = setInterval(function() {
            tempo -=1;

            if(tempo < 0){
                clearInterval(cronometro);
                clearInterval(criaMosca);
                window.location.href = 'vitoria.html'
            }else{
                document.getElementById('tempoRestante').innerHTML = tempo;
            }
        }, 1000);
