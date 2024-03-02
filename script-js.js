let intentos = 6;
let lista = ["APPLE","MOUSE","COUSE","MONEY","CLASS","ANGEL","HONEY"]
let indice = Math.floor(Math.random()* lista.length)

console.log (indice); 

let palabra = lista[indice] //"APPLE";

const button = document.getElementById("guess-button");
const GRID = document.getElementById("grid");

let listado = []//historico de intentos
let diccionario = {"clave":"valor"}
console.log ("diccionario", diccionario);
console.log ("diccionario2", diccionario ["clave"])

fetch('https://random-word-api.herokuapp.com/word?lang=es&length=5')
    .then(response => response.json())
    .then(response => {
        console.log('desde API', response)
        palabra = response [0].toUpperCase()
        console.log(palabra)
    })
    .catch(err => console.error(err));

console.log(palabra);

button.addEventListener("click", intentar);

function intentar()
{
    const INTENTO = leerIntento();
    const GRID = document.createElement("grid")
    const ROW = document.createElement("div")
    ROW.className = "row";
    Input.value ="";

    if(INTENTO.length!=5 || !isNaN(INTENTO))
    {
        error.style.display= "block";
        error.innerHTML= "¡debe ser una palabra de 5 letras!";
        error.style.display= "none";
        return;
    }
    error.style.display= "none";
   
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

 








