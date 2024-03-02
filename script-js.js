let intentos = 6;
let lista = ["APPLE","MOUSE","COUSE","MONEY","CLASS","ANGEL","HONEY"]
let indice = Math.floor(Math.random()* lista.length)

console.log (indice); 

let palabra = lista[indice] //"APPLE";

const button = document.getElementById("guess-button");
const GRID = document.getElementById("grid");

console.log(palabra);

button.addEventListener("click", intentar);

function intentar()
{
    console.log(typeof document.getElementById("guess-input").value)
    if (document.getElementById("guess-input").value.length !=5) 
    { alert ("Debe tener 5 letras")}

    
 const ROW = document.createElement('div')
 ROW.className = 'row'
 console.log(ROW)

 const INTENTO = leerIntento();

    console.log(INTENTO);
    intentos = intentos -1;

    if (INTENTO === palabra) 
    {  
         console.log("WINNER");
        terminar("<h1>WINNER!</h1>")
        return
    } else   
    {
        console.log ("analizar intento")
        for (i in palabra)
        {
            const SPAN = document.createElement('span');
            SPAN.className = "letter";

            if (palabra[i] === INTENTO[i])
            {
            console.log(INTENTO[i],"VERDE");
            SPAN.innerHTML = INTENTO[i];
            SPAN.style.backgroundColor = '#79b851';
            console.log(SPAN)
            }

            else if(palabra.includes(INTENTO[i])) 
            {
            console.log(INTENTO[i], "AMARILLO") 
            SPAN.innerHTML = INTENTO[i];
            SPAN.style.backgroundColor = '#f3c237';
            console.log(SPAN)
            }

            else
            {
            console.log(INTENTO[i], "GRIS") 
            SPAN.innerHTML = INTENTO[i];
            SPAN.style.backgroundColor = '#a4aec4';
            console.log(SPAN)
            } 
            ROW.appendChild(SPAN);
        }  
       GRID.appendChild(ROW)
    }
    if (intentos==0)
    {
        terminar("<h1>YOU LOST!</h1>")
        return
    }
}
 
function leerIntento()
{
    let intento = document.getElementById("guess-input");
    intento = intento.value;
    intento = intento.toUpperCase();

    return intento
}

function terminar(mensaje)
{
    const INPUT = document.getElementById("guess-input");
    INPUT.disabled = true;
    button.disabled = true;
    let contenedor = document.getElementById('guesses');
    contenedor.innerHTML = mensaje;
}

 








