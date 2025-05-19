let ContenedorLetra = document.querySelector('#MostrarLetra')
let botones = document.querySelectorAll('.btn')
let letraAnterior = document.querySelector('#letraAnt')
let titulo = document.querySelector('#titulo')
let contenedorbotones= document.querySelector('#botones')

let letras = [
    {
        titulo: 'Best Friends',
        letra: ['I dont want to be on my phone but I cant be alone',
            'Welcome to the modern way',
            'Im trying to be somebody Im not but its not what I want',
            'And tell me theres another way',
            'All of the lights I chased are now faded',
            'All the cheap thrills were only time wasted',
            'Tell me why societys plan should define who I am',
            'Surely theres a higher way',
            'All of my best friends are sick of pretending',
            'We want the truth',
            '(Na- na, na - na)',
            'So much is missing',
            'So give us the real thing',
            'I know its You',
            '(Na - na, na - na, na)',
            '(Na - na, na - na, na)',
            '(Na - na, na - na, na)',
            'I dont want a stereotype to decide who I am',
            'It never knew me anyway',
            'Im over trying to find the next hype cause the high never lasts',
            'Imma go another way',
            'All of the lights I chased are now faded',
            'Dylan was right, the times they are changing',
            'Tell me why societys plan should define who I am',
            'Surely theres a higher way',
            'All of my best friends are sick of pretending',
            'We want the truth',
            '(Na - na, na - na)',
            'So much is missing',
            'So give us the real thing',
            'I know its You',
            '(Na - na, na - na, na)',
            '(Na - na, na - na, na)',
            '(Na - na, na - na)',
            'All of my best friends are sick of pretending',
            'We want the truth',
            '(Na - na, na - na)',
            'So much is missing',
            'So give us the real thing',
            'I know its You',
            'I know its You',]
    },
    {
        titulo: 'Keep Me in the Moment',
        letra: [
            'I ve been thinking bout time, and where does it go',
            'How can I stop my life from passing me by, I dont know',
            'I ve been thinking bout family and how its going so fast',
            'Will I wake up one morning just wishing that I could go back',
            'I ve been thinking bout lately, maybe, I can make a change and let You change me',
            'So, with all of my heart, this is my prayer',
            'Singing, oh Lord, keep me in the moment',
            'Help me live with my eyes wide open',
            'Cause I dont wanna miss what You have for me',
            'Singing, oh Lord, show me what matters',
            'Throw away what Im chasing after',
            'Cause I dont wanna miss what You have for me',
            'Keep me in the moment',
            'Oh, keep me in the moment',
            'Keep me in the moment',
            'Cause I dont wanna miss what You have for me',
            'When I wake up in the morning, Lord, touch my heart',
            'Dont let me stray, I just wanna stay where You are',
            'All I got is one shot, one try',
            'One go around in this beautiful life',
            'Nothing is wasted when everythings placed in Your hands',
            'Singing, oh Lord, keep me in the moment',
            'Help me live with my eyes wide open',
            'Cause I dont wanna miss what You have for me',
            'Singing, oh Lord, show me what matters',
            'Throw away what Im chasing after',
            'Cause I dont wanna miss what You have for me',
            'Keep me in the moment',
            'Oh, keep me in the moment (keep me in the moment)',
            'Keep me in the moment',
            'Cause I dont wanna miss what You have for me',
            'I ve been thinking about Heaven',
            'And the promise You hold',
            'So, its all eyes on You',
            'Until the day you call me home',
            'Singing, oh Lord, keep me in the moment',
            'Help me live with my eyes wide open',
            'Cause I dont wanna miss what You have for me',
            '(I dont wanna miss, I dont wanna miss)',
            'Singing, oh Lord, show me what matters',
            'Throw away what Im chasing after',
            'Cause I dont wanna miss what You have for me',
            'Keep me in the moment',
            'Oh, keep me in the moment',
            'Keep me in the moment',
            'Cause I dont wanna miss what You have for me',
            'Keep me in the moment (keep me in the moment)',
            'Oh, keep me in the moment (keep me in the moment)',
            'Keep me in the moment',
            'Cause I dont wanna miss what You have for me (what You have for me)',
        ]
    }
]

let contadorlinea = 0
let contadorCanciones = 0
let letra;
let tituloP;

const cancionEjecutar = () => {
    if (contadorlinea < letra.length) {
        titulo.textContent = tituloP
        ContenedorLetra.textContent = letra[contadorlinea]
        contadorlinea++
        if (contadorlinea > 1) {
            letraAnterior.textContent = letra[contadorlinea - 2]
        }
    } else if (contadorlinea == letra.length) {
        alert('¡Felicidades! Eres todo un artista!')
        ContenedorLetra.textContent = ''
        contadorlinea = 0
        contadorCanciones = 0
        letraAnterior.textContent = ''
        titulo.textContent = ''
    }
}

botones.forEach(btn => {
    btn.addEventListener('click', () => {
        if (btn.textContent == 'Siguiente') {
            letra = letras[contadorCanciones].letra
            tituloP = letras[contadorCanciones].titulo
            cancionEjecutar()
        } else if (btn.textContent == 'Cambiar') {
            contadorlinea = 0
            contadorCanciones++
            letra = 0
            letra = letras[contadorCanciones].letra
            tituloP = letras[contadorCanciones].titulo
            ContenedorLetra.textContent = ''
            letraAnterior.textContent = ''
            titulo.textContent = ''
            cancionEjecutar()
        } else if (btn.textContent == 'Reiniciar') {
            ContenedorLetra.textContent = ''
            contadorlinea = 0
            contadorCanciones = 0
            letraAnterior.textContent = ''
            titulo.textContent = ''
        }
    })
})
