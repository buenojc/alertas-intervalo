const setTime = document.getElementById('set-time');
const setRepetition = document.getElementById('set-repetition');
const buttonAddRepetition = document.getElementById('add-repetition')
const buttonRemoveRepetition = document.getElementById('remove-repetition')
const buttonStart = document.getElementById('start-button')
const timer = document.querySelector('.timer')
const timerCover = document.querySelector('.timer-cover');
const stopTimer = document.querySelector('.stop-counter');
const repetitionRound = document.querySelector('.repetition-round')

const sino = new Audio('https://raw.githubusercontent.com/buenojc/alertas-intervalo/master/assets/sino.mp3');

let intervalo;
setRepetition.value = 1

buttonAddRepetition.addEventListener('click', (e) => {
    e.preventDefault();
    setRepetition.value = parseInt(setRepetition.value) + 1;

})


buttonRemoveRepetition.addEventListener('click', (e) => {
    e.preventDefault();
    if(setRepetition.value > 1){
        setRepetition.value = parseInt(setRepetition.value) - 1;
    }
})


setRepetition.addEventListener('input', e => {
    let novaString = setRepetition.value.replace(/\D+/g, '')
    setRepetition.value = novaString;
})


setTime.addEventListener('input', e => {
    let novaString = setTime.value.replace(/\D+/g, '')
    setTime.value = novaString;


    switch(novaString.length){

        case 1:
            setTime.value = novaString;
            break;

        case 2:
            let mascara = setTime.value.replace(':' ,'')
            setTime.value = mascara;
            break;


        case 3:
            let mascara3Digitos = novaString.replace(/(\d)(\d{2})/, '$1:$2')
            setTime.value = mascara3Digitos;
            break;


        case 4:
            let mascara4Digitos = novaString.replace(/(\d{2})(\d{2})/, '$1:$2')
            setTime.value = mascara4Digitos;
            break;

        case 5:
            let mascara5Digitos = novaString.replace(/(\d{1})(\d{2})(\d{1})/, '$1:$2:$3')
            setTime.value = mascara5Digitos;
            break;

        case 6:
            let mascara6Digitos = novaString.replace(/(\d{2})(\d{2})(\d{2})/, '$1:$2:$3')
            setTime.value = mascara6Digitos;
            break;

        default:
            break;

    }
})


buttonStart.addEventListener('click', e => {
    e.preventDefault()
    timerCover.classList.remove('hidden')
    let time = setTime.value.split(':');
    let hours = 0;
    let minutes = 0;
    let seconds = 0;
    
    timer.innerHTML = `00:00:00`;

    if(setTime.value.length > 0 && setRepetition.value > 0){
        switch(time.length){
            case 3:
                hours = parseInt(time[0]);
                minutes = parseInt(time[1]);
                seconds = parseInt(time[2]);
                break;

            case 2:
                minutes = parseInt(time[0]);
                seconds = parseInt(time[1]);
                break;

            default:
                seconds = parseInt(time[0]);
                break;
        }
    }

    let settedHours = hours;
    let settedMinutes = minutes;
    let settedSeconds = seconds;
    let repetition = parseInt(setRepetition.value)
    let round = 1
    repetitionRound.innerHTML = `${round}/${setRepetition.value}`

    intervalo = setInterval(() => {
    
        if(seconds == 0 && minutes == 0 && hours == 0){
            repetition = repetition - 1;
            round = round + 1;

            if(repetition > 0){
                sino.play();
                hours = settedHours;
                minutes = settedMinutes;
                seconds = settedSeconds;
                repetitionRound.innerHTML = `${round}/${setRepetition.value}`


            }else{
                sino.play();
                clearInterval(intervalo);
                setTime.value = ''
                timerCover.classList.add('hidden')
            }
        }

        
        if(seconds < 0 && minutes == 0 && hours > 0){
            hours = hours - 1;
            minutes = 59;
            seconds = 59;
        }
        
        if(seconds < 0 && minutes > 0){
            minutes = minutes -1;
            seconds = 59;
        }
        
        if(hours < 10 && minutes < 10 && minutes >= 0 && seconds < 10 && seconds >= 0 ){
            timer.innerHTML = `0${hours}:0${minutes}:0${seconds}` 
        
        }else if(hours < 10 && minutes < 10 && seconds >= 10 ){
            timer.innerHTML = `0${hours}:0${minutes}:${seconds}` 
            
        }else if(hours < 10 && minutes > 10 && seconds >= 10 ){
            timer.innerHTML = `0${hours}:${minutes}:${seconds}` 
            
        }else if(hours < 10 && minutes > 10 && seconds < 10){
            timer.innerHTML = `0${hours}:${minutes}:0${seconds}` 
        
        }else if(minutes < 10 && minutes >= 0 && seconds < 10 && seconds >= 0){
            timer.innerHTML = `${hours}:0${minutes}:0${seconds}` 
            
        }else if(minutes < 10 && minutes >= 0){
            timer.innerHTML = `${hours}:0${minutes}:${seconds}` 
            
        }else if(seconds < 10 && seconds >= 0){
            timer.innerHTML = `${hours}:${minutes}:0${seconds}` 
        
        }else{
            timer.innerHTML = `${hours}:${minutes}:${seconds}` 
        }

        seconds = seconds - 1;
    
    },1000)
})


stopTimer.addEventListener('click', e => {
    e.preventDefault();
    clearInterval(intervalo);
    setTime.value = ''
    timerCover.classList.add('hidden')
})