let intentos = 6;
let palabra = "APPLE";

const button = document.getElementById("guess-button");

console.log(palabra);

button.addEventListener("click", intentar);

function intentar()
{
    const INTENTO = leerIntento();
    console.log(INTENTO);
    if (INTENTO=== palabra)
    {
        console.log("GANASTE");

        return
    } 
    else {
        console.log("analizar intento")

        for (i in palabra)
        if (INTENTO[i]===palabra[i])
        {
            console.log(INTENTO[i], "VERDE")
        } else if( palabra.includes(INTENTO[i]) ) 
        {
            console.log(INTENTO[i], "AMARILLO")
        } else 
        {
            console.log(INTENTO[i], "GRIS")
        }
        intentos--
         if (intentos==0)
         {
        console.log("PERDISTE!")
         }
        if (INTENTO === palabra ) {
            terminar("<h1>GANASTE!😀</h1>")
            return
        }
    
         if (intentos==0){
            terminar("<h1>PERDISTE!😖</h1>")
            return
        }
    }
    const GRID = document.getElementById("grid");
    const ROW = document.createElement('div');
    ROW.className = 'row';
    for (let i in palabra){
        const SPAN = document.createElement('span');
        SPAN.className = 'letter';
        if (INTENTO[i]===palabra[i]){ //VERDE
            SPAN.innerHTML = INTENTO[i];
            SPAN.style.backgroundColor = '#79b851';
        } else if( palabra.includes(INTENTO[i]) ) { //AMARILLO
            SPAN.innerHTML = INTENTO[i];
            SPAN.style.backgroundColor = '#f3c237';
        } else {      //GRIS
            SPAN.innerHTML = INTENTO[i];
            SPAN.style.backgroundColor = '#a4aec4';
        }
        ROW.appendChild(SPAN)
    }
    GRID.appendChild(ROW)
}

function terminar(mensaje)
{
    const INPUT = document.getElementById("guess-input");
    INPUT.disabled = true;
    BOTON.disabled = true;
    let contenedor = document.getElementById('guesses');
    contenedor.innerHTML = mensaje;
}
    
function leerIntento()
{
    let intento = document.getElementById("guess-input");
    intento = intento.value;
    intento = intento.toUpperCase(); 
    return intento;
}

window.addEventListener('load', init)

function init()
{
    console.log('Esto se ejecuta solo cuando se carga la pagina web')
}








