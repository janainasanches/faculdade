var questoes = `[
        {
            "questao": "Qual é a cidade?",
            "imagem":"https://static.quizur.com/i/b/5b8879bf96e941.456182315b8879bf8b4fd9.83112701.png",
            "resposta1": "Rio Branco",
            "resposta2": "Curitiba",
            "resposta3": "Macapá",
            "resposta4": "Manaus",
            "correta": "Rio Branco"
        },
        {
            "questao": "Qual é a cidade?",
            "imagem":"https://static.quizur.com/i/b/5ba1a5727b9fd3.121474185ba1a5726ba940.84815247.png",
            "resposta1": "São Paulo",
            "resposta2": "Rio Branco",
            "resposta3": "Porto Alegre",
            "resposta4": "Macapá",
            "correta": "Porto Alegre"
        },
        {
            "questao": "Qual é a cidade?",
            "imagem":"https://static.quizur.com/i/b/5ba45bdbb0ece6.571443315ba45bdb5f2fe6.89745838.png",
            "resposta1": "Manaus",
            "resposta2": "Palmas",
            "resposta3": "Porto Alegre",
            "resposta4": "Curitiba",
            "correta": "Palmas"
        },
        {
            "questao": "Qual é a cidade?",
            "imagem":"https://static.quizur.com/i/b/5ba457cd907cf4.548886285ba457cd855e32.66475233.png",
            "resposta1": "Florianópolis",
            "resposta2": "Boa Vista",
            "resposta3": "Curitiba",
            "resposta4": "Palmas",
            "correta": "Boa Vista"
        },
        {
            "questao": "Qual é a cidade?",
            "imagem":"https://static.quizur.com/i/b/5ba456cbee9a13.184048255ba456cbd95e93.99980789.png",
            "resposta1": "Porto Velho",
            "resposta2": "Maceió",
            "resposta3": "Macapá",
            "resposta4": "Manaus",
            "correta": "Porto Velho"
        },
        {
            "questao": "Qual é a cidade?",
            "imagem":"https://static.quizur.com/i/b/5ba19835213820.270522955ba1983513e2e5.41562511.png",
            "resposta1": "Florianópolis",
            "resposta2": "Belém",
            "resposta3": "Manaus",
            "resposta4": "Porto Velho",
            "correta": "Belém"
        },
        {
            "questao": "Qual é a cidade?",
            "imagem":"https://static.quizur.com/i/b/5b887c2900edf2.926700265b887c28c24731.07250622.png",
            "resposta1": "Rio Branco",
            "resposta2": "Maceió",
            "resposta3": "Macapá",
            "resposta4": "Manaus",
            "correta": "Macapá"
        },
        {
            "questao": "Qual é a cidade?",
            "imagem":"https://static.quizur.com/i/b/5ba19ff8061b11.964850935ba19ff7f01b64.55899698.jpg",
            "resposta1": "Recife",
            "resposta2": "Belém",
            "resposta3": "Macapá",
            "resposta4": "Rio Branco",
            "correta": "Recife"
        },   
        {
            "questao": "Qual é a cidade?",
            "imagem":"https://static.quizur.com/i/b/5ba1a2fb2702a0.943874705ba1a2fae23475.05436014.png",
            "resposta1": "Rio de Janeiro",
            "resposta2": "Recife",
            "resposta3": "Macapá",
            "resposta4": "Rio Branco",
            "correta": "Rio de Janeiro"
        },                              
        {
            "questao": "Qual é a cidade?",
            "imagem":"https://static.quizur.com/i/b/5ba456cbee9a13.184048255ba456cbd95e93.99980789.png",
            "resposta1": "Macapá",
            "resposta2": "Rio Branco",
            "resposta3": "Porto Velho",
            "resposta4": "Rio de Janeiro",
            "correta": "Porto Velho"
        }]`;

var q = JSON.parse(questoes);
var totalQ = q.length;
var fase = 0;
var inico = false;
var sair = false;
var certo = "<b>Correto!</b>";
var errado = "<b style='color:red;'>Errado!</b>";
var questaoSel = new Array();
var acertos = 0;
var erros = 0;
var respostas = new Array();

var questao = "Qual é a cidade?";
var imagem = "https://utilidadecapixaba.com.br/upload/media/entries/2020-08/01/1112-entry-4-1596289777.jpg";
var resposta1 = "";
var resposta2 = "";
var resposta3 = "";
var resposta4 = "";
var correta = "";
var resultado = "*** clique em inicio para começar!!! ***";


function Limpar() {
    fase = 0;
    inico = false;
    sair = false;
    acertos = 0;
    erros = 0;
    correta = "";
    questaoSel = new Array();
    respostas = new Array();
     questao = "Qual é a cidade?";
     imagem = "https://utilidadecapixaba.com.br/upload/media/entries/2020-08/01/1112-entry-4-1596289777.jpg";
     resposta1 = "";
     resposta2 = "";
     resposta3 = "";
     resposta4 = "";
     correta = "";
     resultado = "*** clique em inicio para começar! ***";   
     pausa(1000) ;
    MostrarQuestao();
}

function iniciar() {
    inico = true;
    fase = 1;
    acertos = 0;
    erros = 0;
    Carregar(fase);
}


function Carregar(fase) {
    var indice = selecionaQuestao();
    questao = q[indice].questao;
    imagem = q[indice].imagem;
    resposta1 = q[indice].resposta1;
    resposta2 = q[indice].resposta2;
    resposta3 = q[indice].resposta3;
    resposta4 = q[indice].resposta4;
    correta = q[indice].correta;
    resultado = " ... ";
    MostrarQuestao();
    console.log(fase + " | "+indice);
}

function MostrarQuestao() {
    document.getElementById('tema').innerHTML = questao;
    document.getElementById('image').innerHTML = "<img src='" + imagem + "'>";
    document.getElementById('resposta1').innerHTML = resposta1;
    document.getElementById('resposta2').innerHTML = resposta2;
    document.getElementById('resposta3').innerHTML = resposta3;
    document.getElementById('resposta4').innerHTML = resposta4;
    document.getElementById('resultado').innerHTML = resultado;
    document.getElementById('fase').innerHTML = "Questões " + fase + " de " + totalQ + " | Acertos: " + acertos + " Erros: " + erros;
}


function CorrigeResposta(elemento) {
    if (elemento.innerHTML == correta) {
        resultado = certo;
        acertos++;
    } else {
        resultado = errado;
        erros++;
    }
    document.getElementById('resultado').innerHTML = resultado;
    document.getElementById('fase').innerHTML = "Questões " + fase + " de " + totalQ + " | Acertos: " + acertos + " Erros: " + erros;
    pausa(2000);
    if (fase == totalQ) {
        finalizar();
        return;
    }    
    ProximaQuestao();
}

function ProximaQuestao() {
    if (fase == totalQ) {
        finalizar();
    } else if (fase < totalQ) {
        fase++;
        Carregar(fase);
    }
}

function finalizar(){
    //acabou
    resultado = (acertos > erros && acertos > totalQ / 2) ? "Quiz finalizado! Parabéns você acertou "+acertos : "Quiz finalizado! Treinar mais para melhorar seus acertos!";
    document.getElementById('resultado').innerHTML = resultado;
}
window.onload = function () {
    Limpar();
    document.getElementById("inicio").addEventListener("click", function () {
        iniciar();
    });
    document.getElementById("sair").addEventListener("click", function () {
        Limpar();
    });
    document.getElementById("resposta1").addEventListener("click", function () {
        CorrigeResposta(this);
    });
    document.getElementById("resposta2").addEventListener("click", function () {
        CorrigeResposta(this);
    });
    document.getElementById("resposta3").addEventListener("click", function () {
        CorrigeResposta(this);
    });
    document.getElementById("resposta4").addEventListener("click", function () {
        CorrigeResposta(this);
    });
}
//document.addEventListener('evento', função);
function pausa(milliseconds) {
    var start = new Date().getTime();
    for (var i = 0; i < 1e7; i++) {
        if ((new Date().getTime() - start) > milliseconds) {
            break;
        }
    }
}    

function selecionaQuestao(){
    var acho =false;
    var retorno =0;
    var i=0;
    while (acho ==false) {
        retorno = Math.floor((Math.random() * totalQ));
        const busca = questaoSel.find(element => element == retorno);
        if (!busca) {
            questaoSel[fase] = retorno;
            acho =true;
        } 
        i++;
        if(i>= totalQ){
            break;
        }
    }
    return retorno;
}
