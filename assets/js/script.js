let digitalElement = document.querySelector('.digital');
let sElement = document.querySelector('.p_s');
let mElement = document.querySelector('.p_m');
let hElement = document.querySelector('.p_h');


function updateClock() {
    let now = new Date();//função nativa JS para pegar a data e hora
    let hour = now.getHours();
    let minute = now.getMinutes();
    let second = now.getSeconds();

    digitalElement.innerHTML = `${fixZero(hour)}:${fixZero(minute)}:${fixZero(second)}`;

    let Sdeg = ((360/60) * second) - 90;//360 é o círculo todo, dividimos ele por 60 q é a quantidade de segundos por minutos e multiplicamos por SECOND para saber quantos graus temos em cada segundo, tiramos 90 para que fique correto visto que no CSS o 0 graus é no meio.
    let mDeg = ((360/60) * minute) - 90;//60 é a quantidade de minutos a cada 1 hora
    let hDeg = ((360/12) * hour) - 90;//O relógio só tem 12 hrs, ele roda duas vezes pra dar 24.

    sElement.style.transform = `rotate(${Sdeg}deg)`;
    mElement.style.transform = `rotate(${mDeg}deg)`;
    hElement.style.transform = `rotate(${hDeg}deg)`;
}

function fixZero(time) {
    return time < 10 ? `0${time}` : time; //para ficar sempre com dois numero a esquerda de 1 a 9.
}

setInterval(updateClock, 1000);//setInterval(,) é uma função nativa do JS, a cada 1 segundo chama a função que criamos para rodar.
updateClock();//para que ao abrir o site ela ja começa rodando sem esperar o delay de 1 segundo