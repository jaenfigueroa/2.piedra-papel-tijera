let armaJugador = ''
let armaPc = ''
let resultado = ''
let victoriasJugador = 0
let victoriasPc = 0
let cara = ''

function iniciarJuego() {
  audioAntesInicio()

  /* PARA OCULTAR LA SEGUNDA VENTANA */
  document.getElementById('ventana0').style.display = 'flex'
  document.getElementById('ventana1').style.display = 'none'
  document.getElementById('ventana2').style.display = 'none'
  document.getElementById('ventana3').style.display = 'none'
  document.getElementById('ventana4').style.display = 'none'
  /* ESCUCHAR BOTONES */
  let botonSeleccionar = document.getElementById('boton-listo')
  botonSeleccionar.addEventListener('click', seleccionarArmaPc)

  /* ---NEWSSS */
  let botonPiedra = document.getElementById('boton-piedra')
  botonPiedra.addEventListener('click', iniciarPiedra)

  let botonPapel = document.getElementById('boton-papel')
  botonPapel.addEventListener('click', iniciarPapel)

  let botonTijera = document.getElementById('boton-tijera')
  botonTijera.addEventListener('click', iniciarTijera)

  /* ESCUCHAR BOTON REINCIAR */
  document
    .getElementById('boton-reiniciar')
    .addEventListener('click', reiniciar)
  /* ESCUCHAR PARA VOLVER A JUGAR */
  document
    .getElementById('boton-volver-jugar')
    .addEventListener('click', reiniciar)
  /* ESCUCHA EL BOTOTON JUGAR */
  document
    .getElementById('boton-jugar')
    .addEventListener('click', empezarLaPartida)
}
function empezarLaPartida() {
  document.getElementById('audio-antes-inicio').muted = true

  document.getElementById('ventana0').style.display = 'none'
  document.getElementById('ventana1').style.display = 'flex'

  document.getElementById('mi-body').requestFullscreen()
}
function reiniciar() {
  victoriasJugador = 0
  victoriasPc = 0

  document.getElementById('victorias-jugador').innerHTML = victoriasJugador
  document.getElementById('victorias-pc').innerHTML = victoriasPc

  iniciarJuego()
}
/* SELECCIONAR ARMA JUGADOR------------------------------------------------------------------------------------------------- */
function iniciarPiedra() {
  armaJugador = 'PIEDRA'
  document.getElementById('dibujoUno').innerHTML =
    '<i class="fa-solid fa-hand-back-fist" style="color: black;"></i>'
  audioClick()
}
function iniciarPapel() {
  armaJugador = 'PAPEL'
  document.getElementById('dibujoUno').innerHTML =
    '<i class="fa-solid fa-hand" style="color: black;"></i>'
  audioClick()
}
function iniciarTijera() {
  armaJugador = 'TIJERA'
  document.getElementById('dibujoUno').innerHTML =
    '<i class="fa-solid fa-hand-scissors tijeras" style="transform: rotate(-75deg) scaleX(-1) ; color: black;"></i>'
  audioClick()
}
/* ---------- */
function volver() {
  document.getElementById('ventana1').style.display = 'flex'
  document.getElementById('ventana3').style.display = 'none'
}
/* SELECCIONAR UN ARMA PC-------------------------------------------------------------------------- */
function seleccionarArmaPc() {
  if (armaJugador == '') {
    document.getElementById('ventana1').style.display = 'none'
    document.getElementById('ventana3').style.display = 'block'

    document.getElementById('boton-volver').addEventListener('click', volver)
  } else {
    x = numeroAleatorio(1, 3)

    if (x == 1) {
      armaPc = 'PIEDRA'
    } else if (x == 2) {
      armaPc = 'PAPEL'
    } else if (x == 3) {
      armaPc = 'TIJERA'
    }

    dibujarArmaPc(armaPc)
    batalla(armaJugador, armaPc)
  }
}
/* VER QUIEN GANO -------------------------------------------------------------------------------*/
function batalla(x, y) {
  if (x == y) {
    resultado = 'EMPATE'
    cara = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--! Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><defs><style>.fa-secondary{opacity:1}</style></defs><path class="fa-primary" d="M144.4 208C144.4 190.3 158.7 176 176.4 176C194 176 208.4 190.3 208.4 208C208.4 225.7 194 240 176.4 240C158.7 240 144.4 225.7 144.4 208zM304.4 208C304.4 190.3 318.7 176 336.4 176C354 176 368.4 190.3 368.4 208C368.4 225.7 354 240 336.4 240C318.7 240 304.4 225.7 304.4 208z"/><path class="fa-secondary" d="M0 256C0 114.6 114.6 0 256 0C397.4 0 512 114.6 512 256C512 397.4 397.4 512 256 512C114.6 512 0 397.4 0 256zM176.4 240C194 240 208.4 225.7 208.4 208C208.4 190.3 194 176 176.4 176C158.7 176 144.4 190.3 144.4 208C144.4 225.7 158.7 240 176.4 240zM336.4 176C318.7 176 304.4 190.3 304.4 208C304.4 225.7 318.7 240 336.4 240C354 240 368.4 225.7 368.4 208C368.4 190.3 354 176 336.4 176zM160 336C151.2 336 144 343.2 144 352C144 360.8 151.2 368 160 368H352C360.8 368 368 360.8 368 352C368 343.2 360.8 336 352 336H160z" style="fill: #35f29d;"/></svg>
        `
    audioEmpate()
  } else if (x == 'PIEDRA' && y == 'TIJERA') {
    resultado = 'GANASTE'
    cara = `<svg  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--! Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><defs><style>.fa-secondary{opacity:.95}</style></defs><path class="fa-primary" d="M183.8 159.3L221.9 164.3C224.1 164.7 227.5 166.8 228.5 169.8C229.4 172.7 228.6 175.9 226.4 178L198.5 204.5L205.5 242.3C206 245.4 204.8 248.4 202.3 250.2C199.8 252.1 196.5 252.3 193.8 250.8L159.1 232.5L126.2 250.8C123.5 252.3 120.2 252.1 117.7 250.2C115.2 248.4 113.1 245.4 114.5 242.3L121.5 204.5L93.62 178C91.39 175.9 90.57 172.7 91.52 169.8C92.48 166.8 95.03 164.7 98.09 164.3L136.2 159.3L152.8 124.6C154.1 121.8 156.9 120 159.1 120C163.1 120 165.9 121.8 167.2 124.6L183.8 159.3zM375.8 159.3L413.9 164.3C416.1 164.7 419.5 166.8 420.5 169.8C421.4 172.7 420.6 175.9 418.4 178L390.5 204.5L397.5 242.3C398 245.4 396.8 248.4 394.3 250.2C391.8 252.1 388.5 252.3 385.8 250.8L352 232.5L318.2 250.8C315.5 252.3 312.2 252.1 309.7 250.2C307.2 248.4 305.1 245.4 306.5 242.3L313.5 204.5L285.6 178C283.4 175.9 282.6 172.7 283.5 169.8C284.5 166.8 287 164.7 290.1 164.3L328.2 159.3L344.8 124.6C346.1 121.8 348.9 120 352 120C355.1 120 357.9 121.8 359.2 124.6L375.8 159.3z"/><path class="fa-secondary" d="M512 256C512 397.4 397.4 512 256 512C114.6 512 0 397.4 0 256C0 114.6 114.6 0 256 0C397.4 0 512 114.6 512 256zM407.4 331.5C412.4 319.7 400.4 309 388.1 312.8C348.4 324.9 303.7 331.8 256.3 331.8C208.9 331.8 164.1 324.9 124.5 312.8C112.2 309 100.2 319.7 105.2 331.5C130.1 390.6 188.4 432 256.3 432C324.2 432 382.4 390.6 407.4 331.5H407.4zM152.8 124.6L136.2 159.3L98.09 164.3C95.03 164.7 92.48 166.8 91.52 169.8C90.57 172.7 91.39 175.9 93.62 178L121.5 204.5L114.5 242.3C113.1 245.4 115.2 248.4 117.7 250.2C120.2 252.1 123.5 252.3 126.2 250.8L159.1 232.5L193.8 250.8C196.5 252.3 199.8 252.1 202.3 250.2C204.8 248.4 206 245.4 205.5 242.3L198.5 204.5L226.4 178C228.6 175.9 229.4 172.7 228.5 169.8C227.5 166.8 224.1 164.7 221.9 164.3L183.8 159.3L167.2 124.6C165.9 121.8 163.1 120 159.1 120C156.9 120 154.1 121.8 152.8 124.6V124.6zM344.8 124.6L328.2 159.3L290.1 164.3C287 164.7 284.5 166.8 283.5 169.8C282.6 172.7 283.4 175.9 285.6 178L313.5 204.5L306.5 242.3C305.1 245.4 307.2 248.4 309.7 250.2C312.2 252.1 315.5 252.3 318.2 250.8L352 232.5L385.8 250.8C388.5 252.3 391.8 252.1 394.3 250.2C396.8 248.4 398 245.4 397.5 242.3L390.5 204.5L418.4 178C420.6 175.9 421.4 172.7 420.5 169.8C419.5 166.8 416.1 164.7 413.9 164.3L375.8 159.3L359.2 124.6C357.9 121.8 355.1 120 352 120C348.9 120 346.1 121.8 344.8 124.6H344.8z" style="fill: #EDE55D;"/></svg>`

    audioGanar()
  } else if (x == 'PAPEL' && y == 'PIEDRA') {
    resultado = 'GANASTE'
    cara = `<svg class="caras" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--! Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><defs><style>.fa-secondary{opacity:.95}</style></defs><path class="fa-primary" d="M183.8 159.3L221.9 164.3C224.1 164.7 227.5 166.8 228.5 169.8C229.4 172.7 228.6 175.9 226.4 178L198.5 204.5L205.5 242.3C206 245.4 204.8 248.4 202.3 250.2C199.8 252.1 196.5 252.3 193.8 250.8L159.1 232.5L126.2 250.8C123.5 252.3 120.2 252.1 117.7 250.2C115.2 248.4 113.1 245.4 114.5 242.3L121.5 204.5L93.62 178C91.39 175.9 90.57 172.7 91.52 169.8C92.48 166.8 95.03 164.7 98.09 164.3L136.2 159.3L152.8 124.6C154.1 121.8 156.9 120 159.1 120C163.1 120 165.9 121.8 167.2 124.6L183.8 159.3zM375.8 159.3L413.9 164.3C416.1 164.7 419.5 166.8 420.5 169.8C421.4 172.7 420.6 175.9 418.4 178L390.5 204.5L397.5 242.3C398 245.4 396.8 248.4 394.3 250.2C391.8 252.1 388.5 252.3 385.8 250.8L352 232.5L318.2 250.8C315.5 252.3 312.2 252.1 309.7 250.2C307.2 248.4 305.1 245.4 306.5 242.3L313.5 204.5L285.6 178C283.4 175.9 282.6 172.7 283.5 169.8C284.5 166.8 287 164.7 290.1 164.3L328.2 159.3L344.8 124.6C346.1 121.8 348.9 120 352 120C355.1 120 357.9 121.8 359.2 124.6L375.8 159.3z"/><path class="fa-secondary" d="M512 256C512 397.4 397.4 512 256 512C114.6 512 0 397.4 0 256C0 114.6 114.6 0 256 0C397.4 0 512 114.6 512 256zM407.4 331.5C412.4 319.7 400.4 309 388.1 312.8C348.4 324.9 303.7 331.8 256.3 331.8C208.9 331.8 164.1 324.9 124.5 312.8C112.2 309 100.2 319.7 105.2 331.5C130.1 390.6 188.4 432 256.3 432C324.2 432 382.4 390.6 407.4 331.5H407.4zM152.8 124.6L136.2 159.3L98.09 164.3C95.03 164.7 92.48 166.8 91.52 169.8C90.57 172.7 91.39 175.9 93.62 178L121.5 204.5L114.5 242.3C113.1 245.4 115.2 248.4 117.7 250.2C120.2 252.1 123.5 252.3 126.2 250.8L159.1 232.5L193.8 250.8C196.5 252.3 199.8 252.1 202.3 250.2C204.8 248.4 206 245.4 205.5 242.3L198.5 204.5L226.4 178C228.6 175.9 229.4 172.7 228.5 169.8C227.5 166.8 224.1 164.7 221.9 164.3L183.8 159.3L167.2 124.6C165.9 121.8 163.1 120 159.1 120C156.9 120 154.1 121.8 152.8 124.6V124.6zM344.8 124.6L328.2 159.3L290.1 164.3C287 164.7 284.5 166.8 283.5 169.8C282.6 172.7 283.4 175.9 285.6 178L313.5 204.5L306.5 242.3C305.1 245.4 307.2 248.4 309.7 250.2C312.2 252.1 315.5 252.3 318.2 250.8L352 232.5L385.8 250.8C388.5 252.3 391.8 252.1 394.3 250.2C396.8 248.4 398 245.4 397.5 242.3L390.5 204.5L418.4 178C420.6 175.9 421.4 172.7 420.5 169.8C419.5 166.8 416.1 164.7 413.9 164.3L375.8 159.3L359.2 124.6C357.9 121.8 355.1 120 352 120C348.9 120 346.1 121.8 344.8 124.6H344.8z" style="fill: #EDE55D;"/></svg>`

    audioGanar()
  } else if (x == 'TIJERA' && y == 'PAPEL') {
    resultado = 'GANASTE'
    cara = `<svg class="caras" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--! Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><defs><style>.fa-secondary{opacity:.95}</style></defs><path class="fa-primary" d="M183.8 159.3L221.9 164.3C224.1 164.7 227.5 166.8 228.5 169.8C229.4 172.7 228.6 175.9 226.4 178L198.5 204.5L205.5 242.3C206 245.4 204.8 248.4 202.3 250.2C199.8 252.1 196.5 252.3 193.8 250.8L159.1 232.5L126.2 250.8C123.5 252.3 120.2 252.1 117.7 250.2C115.2 248.4 113.1 245.4 114.5 242.3L121.5 204.5L93.62 178C91.39 175.9 90.57 172.7 91.52 169.8C92.48 166.8 95.03 164.7 98.09 164.3L136.2 159.3L152.8 124.6C154.1 121.8 156.9 120 159.1 120C163.1 120 165.9 121.8 167.2 124.6L183.8 159.3zM375.8 159.3L413.9 164.3C416.1 164.7 419.5 166.8 420.5 169.8C421.4 172.7 420.6 175.9 418.4 178L390.5 204.5L397.5 242.3C398 245.4 396.8 248.4 394.3 250.2C391.8 252.1 388.5 252.3 385.8 250.8L352 232.5L318.2 250.8C315.5 252.3 312.2 252.1 309.7 250.2C307.2 248.4 305.1 245.4 306.5 242.3L313.5 204.5L285.6 178C283.4 175.9 282.6 172.7 283.5 169.8C284.5 166.8 287 164.7 290.1 164.3L328.2 159.3L344.8 124.6C346.1 121.8 348.9 120 352 120C355.1 120 357.9 121.8 359.2 124.6L375.8 159.3z"/><path class="fa-secondary" d="M512 256C512 397.4 397.4 512 256 512C114.6 512 0 397.4 0 256C0 114.6 114.6 0 256 0C397.4 0 512 114.6 512 256zM407.4 331.5C412.4 319.7 400.4 309 388.1 312.8C348.4 324.9 303.7 331.8 256.3 331.8C208.9 331.8 164.1 324.9 124.5 312.8C112.2 309 100.2 319.7 105.2 331.5C130.1 390.6 188.4 432 256.3 432C324.2 432 382.4 390.6 407.4 331.5H407.4zM152.8 124.6L136.2 159.3L98.09 164.3C95.03 164.7 92.48 166.8 91.52 169.8C90.57 172.7 91.39 175.9 93.62 178L121.5 204.5L114.5 242.3C113.1 245.4 115.2 248.4 117.7 250.2C120.2 252.1 123.5 252.3 126.2 250.8L159.1 232.5L193.8 250.8C196.5 252.3 199.8 252.1 202.3 250.2C204.8 248.4 206 245.4 205.5 242.3L198.5 204.5L226.4 178C228.6 175.9 229.4 172.7 228.5 169.8C227.5 166.8 224.1 164.7 221.9 164.3L183.8 159.3L167.2 124.6C165.9 121.8 163.1 120 159.1 120C156.9 120 154.1 121.8 152.8 124.6V124.6zM344.8 124.6L328.2 159.3L290.1 164.3C287 164.7 284.5 166.8 283.5 169.8C282.6 172.7 283.4 175.9 285.6 178L313.5 204.5L306.5 242.3C305.1 245.4 307.2 248.4 309.7 250.2C312.2 252.1 315.5 252.3 318.2 250.8L352 232.5L385.8 250.8C388.5 252.3 391.8 252.1 394.3 250.2C396.8 248.4 398 245.4 397.5 242.3L390.5 204.5L418.4 178C420.6 175.9 421.4 172.7 420.5 169.8C419.5 166.8 416.1 164.7 413.9 164.3L375.8 159.3L359.2 124.6C357.9 121.8 355.1 120 352 120C348.9 120 346.1 121.8 344.8 124.6H344.8z" style="fill: #EDE55D;"/></svg>`
    audioGanar()
  } else {
    resultado = 'PERDISTE'

    cara = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--! Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><defs><style>.fa-secondary{opacity:1}</style></defs><path class="fa-primary" d="M203.9 274.7C180.4 298.3 150 313.9 117.1 319.4L114.6 319.8C105.9 321.2 97.67 315.3 96.22 306.6C94.77 297.9 100.7 289.7 109.4 288.2L111.9 287.8C138.2 283.4 162.5 270.9 181.3 252.1L188.7 244.7C194.9 238.4 205.1 238.4 211.3 244.7C217.6 250.9 217.6 261.1 211.3 267.3L203.9 274.7zM300.7 267.3C294.4 261.1 294.4 250.9 300.7 244.7C306.9 238.4 317.1 238.4 323.3 244.7L330.7 252.1C349.5 270.9 373.8 283.4 400.2 287.8L402.6 288.2C411.3 289.7 417.2 297.9 415.8 306.6C414.3 315.3 406.1 321.2 397.4 319.8L394.9 319.4C361.1 313.9 331.6 298.3 308.1 274.7L300.7 267.3z"/><path class="fa-secondary" d="M0 256C0 114.6 114.6 0 256 0C397.4 0 512 114.6 512 256C512 397.4 397.4 512 256 512C114.6 512 0 397.4 0 256zM316.1 410.7C322 417.3 332.1 417.8 338.7 411.9C345.3 405.1 345.8 395.9 339.9 389.3C323.8 371.4 295.7 352 255.1 352C216.3 352 188.2 371.4 172.1 389.3C166.2 395.9 166.7 405.1 173.3 411.9C179.9 417.8 189.1 417.3 195.9 410.7C207.6 397.7 227.5 384 255.1 384C284.5 384 304.4 397.7 316.1 410.7H316.1zM211.3 244.7C205.1 238.4 194.9 238.4 188.7 244.7L181.3 252.1C162.5 270.9 138.2 283.4 111.9 287.8L109.4 288.2C100.7 289.7 94.76 297.9 96.22 306.6C97.67 315.3 105.9 321.2 114.6 319.8L117.1 319.4C150 313.9 180.4 298.3 203.9 274.7L211.3 267.3C217.6 261.1 217.6 250.9 211.3 244.7V244.7zM308.1 274.7C331.6 298.3 361.1 313.9 394.9 319.4L397.4 319.8C406.1 321.2 414.3 315.3 415.8 306.6C417.2 297.9 411.3 289.7 402.6 288.2L400.2 287.8C373.8 283.4 349.5 270.9 330.7 252.1L323.3 244.7C317.1 238.4 306.9 238.4 300.7 244.7C294.4 250.9 294.4 261.1 300.7 267.3L308.1 274.7z" style="fill: #54a9ffd0;"/></svg>`

    audioPerder()
  }

  puntaje(resultado)
}
/* AUMENTAR VICTORIAS -------------------------------------------------------------------------- */
function puntaje(x) {
  if (x == 'GANASTE') {
    victoriasJugador = victoriasJugador + 1
  } else if (x == 'PERDISTE') {
    victoriasPc = victoriasPc + 1
  }

  mostrarResultados()
}
/* MOSTRAR RESULTADOS TOTALES */
function mostrarResultados() {
  document.getElementById('resultado-final').innerHTML = resultado
  document.getElementById('arma-jugador').innerHTML = armaJugador
  document.getElementById('arma-pc').innerHTML = armaPc
  document.getElementById('victorias-jugador').innerHTML = victoriasJugador
  document.getElementById('victorias-pc').innerHTML = victoriasPc

  document.getElementById('cara-semifinal').innerHTML = cara

  /* OCULTAR VENTA 1 Y MOSTRAR VENTANA2 */
  document.getElementById('ventana1').style.display = 'none'
  document.getElementById('ventana2').style.display = 'block'
  /*  */
  document
    .getElementById('boton-siguiente-ronda')
    .addEventListener('click', siguienteRonda)
}
/* SIGUIENTE RONDA---------------- */
function siguienteRonda() {
  document.getElementById('ventana1').style.display = 'flex'
  document.getElementById('ventana2').style.display = 'none'

  /* OCULTAR LAS ARMAS */
  document.getElementById('dibujoUno').innerHTML = ''
  document.getElementById('dibujoDos').innerHTML = ''

  /* DEJAR LAS VARIABLES VACIAS */
  armaJugador = ''
  armaPc = ''

  comprobarVictorias()
}
/* COMRPBAR SI YA SE OBTUVO LA VISTORIA----------------------------------------- */
function comprobarVictorias() {
  if (victoriasJugador == 5) {
    caraFinal = `</div><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--! Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><defs><style>.fa-secondary{opacity:1}</style></defs><path class="fa-primary" d="M256 160c-97.25 0-176 78.75-176 176S158.8 512 256 512s176-78.75 176-176S353.3 160 256 160zM348.5 317.3l-37.88 37l8.875 52.25c1.625 9.25-8.25 16.5-16.63 12l-46.88-24.62L209.1 418.5c-8.375 4.5-18.25-2.75-16.63-12l8.875-52.25l-37.88-37C156.6 310.6 160.5 299 169.9 297.6l52.38-7.625L245.7 242.5c2-4.25 6.125-6.375 10.25-6.375S264.2 238.3 266.2 242.5l23.5 47.5l52.38 7.625C351.6 299 355.4 310.6 348.5 317.3z" style="fill: #e0c269;"/><path class="fa-secondary" d="M136.3 0H16.03c-12.95 0-20.53 14.58-13.1 25.18l130.3 184.8c28.74-27.99 67-46.13 109.5-49.3L149.1 7.77C147.1 2.949 141.9 0 136.3 0zM495.1 0H375.7c-5.621 0-10.83 2.949-13.72 7.77L269.2 160.7c42.5 3.168 80.76 21.31 109.5 49.3l130.3-184.8C516.5 14.58 508.9 0 495.1 0z"/></svg>`

    resultadoFinal = '¡Haz GANADO la partida!'
    razonfinal = 'Obtuviste 5 puntos antes que Pc'

    audioGanarPartida()
    mostrarVentanaFinal()
  } else if (victoriasPc == 5) {
    caraFinal = `</div><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><defs><style>.fa-secondary {opacity: 1}</style></defs><path class="fa-primary" d="M196.7 132.7C202.9 126.4 213.1 126.4 219.3 132.7C225.6 138.9 225.6 149.1 219.3 155.3L182.6 192L219.3 228.7C225.6 234.9 225.6 245.1 219.3 251.3C213.1 257.6 202.9 257.6 196.7 251.3L160 214.6L123.3 251.3C117.1 257.6 106.9 257.6 100.7 251.3C94.44 245.1 94.44 234.9 100.7 228.7L137.4 192L100.7 155.3C94.44 149.1 94.44 138.9 100.7 132.7C106.9 126.4 117.1 126.4 123.3 132.7L160 169.4L196.7 132.7zM292.7 132.7C298.9 126.4 309.1 126.4 315.3 132.7L352 169.4L388.7 132.7C394.9 126.4 405.1 126.4 411.3 132.7C417.6 138.9 417.6 149.1 411.3 155.3L374.6 192L411.3 228.7C417.6 234.9 417.6 245.1 411.3 251.3C405.1 257.6 394.9 257.6 388.7 251.3L352 214.6L315.3 251.3C309.1 257.6 298.9 257.6 292.7 251.3C286.4 245.1 286.4 234.9 292.7 228.7L329.4 192L292.7 155.3C286.4 149.1 286.4 138.9 292.7 132.7z" /><path class="fa-secondary" d="M0 256C0 114.6 114.6 0 256 0C397.4 0 512 114.6 512 256C512 397.4 397.4 512 256 512C114.6 512 0 397.4 0 256zM256 416C291.3 416 320 387.3 320 352C320 316.7 291.3 288 256 288C220.7 288 192 316.7 192 352C192 387.3 220.7 416 256 416zM100.7 155.3L137.4 192L100.7 228.7C94.44 234.9 94.44 245.1 100.7 251.3C106.9 257.6 117.1 257.6 123.3 251.3L160 214.6L196.7 251.3C202.9 257.6 213.1 257.6 219.3 251.3C225.6 245.1 225.6 234.9 219.3 228.7L182.6 192L219.3 155.3C225.6 149.1 225.6 138.9 219.3 132.7C213.1 126.4 202.9 126.4 196.7 132.7L160 169.4L123.3 132.7C117.1 126.4 106.9 126.4 100.7 132.7C94.44 138.9 94.44 149.1 100.7 155.3zM292.7 155.3L329.4 192L292.7 228.7C286.4 234.9 286.4 245.1 292.7 251.3C298.9 257.6 309.1 257.6 315.3 251.3L352 214.6L388.7 251.3C394.9 257.6 405.1 257.6 411.3 251.3C417.6 245.1 417.6 234.9 411.3 228.7L374.6 192L411.3 155.3C417.6 149.1 417.6 138.9 411.3 132.7C405.1 126.4 394.9 126.4 388.7 132.7L352 169.4L315.3 132.7C309.1 126.4 298.9 126.4 292.7 132.7C286.4 138.9 286.4 149.1 292.7 155.3z" style="fill: #a595c9;" /></svg>`
    resultadoFinal = '¡haz PERDIDO la partida!'
    razonfinal = 'Pc obtuvo 5 puntos antes que tu'

    audioPerderPartida()
    mostrarVentanaFinal()
  }
}
/* MOSTRAR VENTANA FINAL DE MEDALLA / COPA / CORONA------------------------------------------------------------------ */
function mostrarVentanaFinal() {
  document.getElementById('cara-final').innerHTML = caraFinal
  document.getElementById('texto-final').innerHTML = resultadoFinal
  document.getElementById('subtexto-final').innerHTML = razonfinal

  document.getElementById('ventana1').style.display = 'none'
  document.getElementById('ventana2').style.display = 'none'
  document.getElementById('ventana3').style.display = 'none'
  document.getElementById('ventana4').style.display = 'flex'
}
/* SELECIONAR UN NUMERO ALEATORIO------------------------------------------------------------------- */
function numeroAleatorio(min, max) {
  x = Math.floor(Math.random() * (max - min + 1) + min)
  return x
}

/* DIBUJAR ARMAS DE PC---------------------------------------------------------------------------------- */
function dibujarArmaPc(x) {
  if (x == 'PIEDRA') {
    document.getElementById('dibujoDos').innerHTML =
      '<i class="fa-solid fa-hand-back-fist" style="color: black;"></i>'
  } else if (x == 'PAPEL') {
    document.getElementById('dibujoDos').innerHTML =
      '<i class="fa-solid fa-hand" style="color: black;"></i>'
  } else if (x == 'TIJERA') {
    document.getElementById('dibujoDos').innerHTML =
      '<i class="fa-solid fa-hand-scissors tijeras" style="transform: rotate(-75deg) scaleX(-1);color: black;"></i>'
  }
}

/* ---AUDIOSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSS----------------------------- */
function audioAntesInicio() {
  document.getElementById('audio-antes-inicio').play()
}
function audioTecla() {
  document.getElementById('audio-tecla').play()
}

function audioEmpate() {
  document.getElementById('audio-empate').play()
}
function audioGanar() {
  document.getElementById('audio-ganar').play()
}
function audioPerder() {
  document.getElementById('audio-perder').play()
}
function audioGanarPartida() {
  document.getElementById('audio-ganar-partida').play()
}
function audioPerderPartida() {
  document.getElementById('audio-perder-partida').play()
}
function audioClick() {
  document.getElementById('audio-click').play()
}

/* ---------------------------------------------------------------------------------------------- */
window.addEventListener('load', iniciarJuego)
