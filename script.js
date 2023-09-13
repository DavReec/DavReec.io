let diccionario = ['APPLE', 'HURLS', 'WINGS', 'YOUTH']
Math.floor(Math.random() * 10) + 1;
let palabra = diccionario[Math.floor(Math.random() * diccionario.length)];
let intentos = 6;

const input = document.getElementById("guess-input");
const valor = input.value;
const BUTTON = document.getElementById("guess-button");
BUTTON.addEventListener("click", intentar);

function intentar(){
    let res;
    const INTENTO = leerIntento();
    if (INTENTO === palabra ) {
        console.log("GANASTE!")
        res = 1;
        final(res);
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
        res = 0;
        final(res);
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
    GRIDS.style.opacity = "0.5  "
    BUTTON.disabled = true;

}

