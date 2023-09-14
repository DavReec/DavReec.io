let intentos = 6;
let palabra 

fetch('https://random-word-api.herokuapp.com/word?length=5&&lang=en')
    .then(response => response.json())
    .then(response => {
        console.log(response)
        palabra = response[0].toUpperCase()
    })
    .catch(err => console.error(err))

const input = document.getElementById("guess-input");
const valor = input.value;
const BUTTON = document.getElementById("guess-button");
BUTTON.addEventListener("click", intentar);
const BTNREINICIAR = document.getElementById("reiniciar");
BTNREINICIAR.disabled = true;
BTNREINICIAR.style.backgroundColor = "#BFC0C2"


function intentar(){
    let res;
    const INTENTO = leerIntento();
    if (INTENTO.length == 5){
        for (let i in palabra){
            if (INTENTO[i]===palabra[i]){
                console.log(INTENTO[i], "VERDE")
            } else if( palabra.includes(INTENTO[i]) ) {
                console.log(INTENTO[i], "AMARILLO")
            } else {
                console.log(INTENTO[i], "GRIS")
            }
        }
            intentos--
            const GRID = document.getElementById("grid");
            const ROW = document.createElement('div');
            ROW.className = 'row';
            for (let i in palabra){
                const SPAN = document.createElement('span');
                SPAN.className = 'letter';
                if (INTENTO[i]===palabra[i]){
                    SPAN.innerHTML = INTENTO[i];
                    SPAN.style.backgroundColor = '#ABF0D1';
                } else if( palabra.includes(INTENTO[i]) ) { 
                    SPAN.innerHTML = INTENTO[i];
                    SPAN.style.backgroundColor = '#FCFD95';
                } else { 
                    SPAN.innerHTML = INTENTO[i];
                    SPAN.style.backgroundColor = '#BFC0C2';
                }
                ROW.appendChild(SPAN)
            }
            GRID.appendChild(ROW)
        if (intentos==0){
            console.log("PERDISTE!")
            res = 0;
            final(res);
        }
        if (INTENTO === palabra ) {
            console.log("GANASTE!")
            res = 1;
            final(res)
            return
        }
    }else{
        alert('Solo se aceptan palabras de 5 letras')
    }
    
}

function leerIntento(){
    let intento = document.getElementById("guess-input");
    intento = intento.value;
    intento = intento.toUpperCase(); 
    return intento;
}

function final(res){
    let CAJARES = document.getElementById("cajaResultado");
    const RESULTADO = document.getElementById("resultado");
    if (res == 1){
        RESULTADO.innerHTML = "Ganaste :)";
        CAJARES.style.display = "block"
    }else{
        RESULTADO.innerHTML = "Perdiste :( Intentalo de nuevo";
        CAJARES.style.display = "block"
    }
    const GRIDS = document.getElementById("grid");
    BTNREINICIAR.disabled = false;
    GRIDS.style.opacity = "0.5  "
    BUTTON.disabled = true;
    BTNREINICIAR.style.backgroundColor = "#138DC7"
    BUTTON.style.backgroundColor = "#BFC0C2"
    BUTTON.style.active = "transform"
}
