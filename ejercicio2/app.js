let container = document.querySelector('#contenedor')
let columnas = document.querySelectorAll('.col')
let BotonContador = document.querySelector('#BTN')
let body = document.querySelector('body')
console.dir(columnas)

//declaramos una variable contador, para los intentos
let contador = 0
//creamos la variable que contiene el numero ganador aleatoriamente
let NoGanador = columnas[Math.floor(Math.random() * columnas.length)]


//arreglo de colores
let colores = [
    'color1', 'color2', 'color3', 'color4', 'color5', 'color6',
    'color7', 'color11', 'color14', 'color17', 'color20', 'color23',
    'color8', 'color12', 'color15', 'color18', 'color21', 'color24',
    'color9', 'color13', 'color16', 'color19', 'color22', 'color25',
    'color10',
]

//declaramos la variable que contendra el fondo aleatoriamente
let Fondocolor;
//funcion para asignar el color aleatoriamente, pasamos como parametro el item para aplicarle a este el color
const fondoAleatorio = (item) => {
    Fondocolor = colores[Math.floor(Math.random()*colores.length)];
    item.classList.add(Fondocolor)
}

//creamos la funcion para eliminar el color de cada columna
const eliminarcolor=()=>{
    columnas.forEach(item =>{
        item.className='col'
    })
}

//recorremos columnas y le asignamos a cada item o columna un addEvenListener
columnas.forEach(item => {
    console.log(NoGanador.id)
    item.addEventListener('click', () => {
        if (item.id == NoGanador.id) {
            alert('¡Eres un genio!')
            contador=0
            BotonContador.textContent= 'Intentos: ' + contador
            NoGanador = columnas[Math.floor(Math.random() * columnas.length)]
            eliminarcolor()
            console.log(NoGanador.id)
        } else {
            contador++
            BotonContador.textContent = 'Intentos: ' + contador
            fondoAleatorio(item)
        }
    })
});