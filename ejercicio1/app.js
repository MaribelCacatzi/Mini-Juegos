let container = document.querySelector('#Contenedor')
let botonCrear = document.querySelector('#BotonCrear')

//arreglo contenedor de mounstrous
let MoustrosFormas = []

//creamos y agregamos los mounstros al arreglo
let cuadrado = document.createElement('div')
cuadrado.className = 'cuadrado'
let redondo = document.createElement('div')
redondo.className = 'redondo'
let moustro3 = document.createElement('div')
moustro3.className = 'Mounstro3'
MoustrosFormas.push(cuadrado)
MoustrosFormas.push(redondo)  
MoustrosFormas.push(moustro3)

//arreglo de nombres
let nombres = [
    'Gro','zzu','rak'
]

//arreglo de fondos
let fondos = [
    'fondo1', 'fondo2', 'fondo3',
]

//arreglo de superpoderes
let superpoderes = [
    'control de fuego', 'velocidad extrema', 'piel de acero', 'lectura de pensamiento'
]

//creamos una constante que genere un nombre, combinando con las silabas que tenemos
const generadorDeNombres = () => {
    let Nnombre = ''
    for (let i = 0; i < nombres.length; i++) {
        Nnombre += nombres[Math.floor(Math.random() * nombres.length)]
    }

    let nombre = document.createElement('h1')
    nombre.textContent = Nnombre
    container.appendChild(nombre)
}

//funcion para un color de fondo aleatorio
const fondoAleatorio = () => {
    let Fondocolor = fondos[Math.floor(Math.random() * fondos.length)];
    container.classList.add(Fondocolor)
}

//funcion para seleccionar un color de fondo aleatorio, y creamos su espacio
const generarSuperpoderes = () => {
    let h2 = document.createElement('h2')
    h2.textContent = superpoderes[Math.floor(Math.random() * superpoderes.length)]
    container.appendChild(h2)
}

//evento click, ejecutamos todo y limpiamos.
botonCrear.addEventListener('click', () => {
    container.innerHTML = ''
    generadorDeNombres()
    container.appendChild(MoustrosFormas[Math.floor(Math.random() * MoustrosFormas.length)])
    fondoAleatorio()
    generarSuperpoderes()
})
