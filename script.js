let palabra = "APPLE";
let intentos = 6;

const button = document.getElementById("guess-button");
button.addEventListener("click", intentar);

const input = document.getElementById("guess-input");
const valor = input.value;

function intentar(){
    const INTENTO = leerIntento();
    if (INTENTO === palabra ) {
        console.log("GANASTE!")
        return
    }
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
    }
}

function leerIntento(){
    let intento = document.getElementById("guess-input");
    intento = intento.value;
    intento = intento.toUpperCase(); 
    return intento;
}


