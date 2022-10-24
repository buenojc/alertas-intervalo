const setTime = document.getElementById('set-time');
const buttonAddRepetition = document.getElementById('add-repetition')
const buttonRemoveRepetition = document.getElementById('remove-repetition')

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
    console.log(novaString)
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
            let mascara5Digitos = novaString.replace(/(\d{2})(\d{2})(\d{1})/, '$1:$2:$3')
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