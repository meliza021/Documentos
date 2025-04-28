const zona = document.getElementById('Zona-caja');
const late = document.getElementById('crear-bounce');


const _pause = document.getElementById('pausar');
const _play = document.getElementById('reanudar');
const _reset = document.getElementById('reiniciar');
const _delete = document.getElementById('eliminar');

let caja = null
let animacion = null;

late.addEventListener('click', () => {
    caja = document.createElement('div');
    caja.classList.add('box');
    zona.appendChild(caja);

    const keyframes = [ 
        {transform: "translate(0, 0)"}, 
        {transform: "translate(100px, 0)"},
        {transform: "translate(200px, 0)"},
        {transform: "translate(300px, 0)"},
        {transform: "translate(400px, 0)"},
        {transform: "translate(500px, 0)"},
        {transform: "translate(600px, 0)"},
        {transform: "translate(600px, 100px)"},
        {transform: "translate(600px, 200px)"},
        {transform: "translate(600px, 300px)"},
        {transform: "translate(600px, 400px)"},
        {transform: "translate(600px, 500px)"}
        
    ];

    const options = {
        duration: 4000,
        iterations: 5,
        direction: "alternate",
        fill: "forwards"
    };

    animacion = caja.animate(keyframes, options); 
    animacion.onfinish = () => (_estado.textContent = "Finalizado");

    _estado.textContent = "Reproduciendo";

    setInterval(() =>{
        _tiempo.textContent = Math.floor(animacion.currentTime || 0)
    }, 100)


})


_play.addEventListener('click',() =>{
    if(animacion){

        animacion.play()
        _estado.textContent = 'reproduciendo'
    }
})

_pause.addEventListener('click',() =>{
    if(animacion){
        animacion.pause()
        _estado.textContent = 'en pausa'
    }
})

_reset.addEventListener('click',() =>{
    if(animacion){
        animacion.reset()
        _estado.textContent = 'reseteado'
    }
})


