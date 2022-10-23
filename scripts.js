const setTime = document.getElementById('set-time');
const setRepetition = document.getElementById('set-repetition')
const buttonAddTime = document.getElementById('add-time');
const buttonAddRepetition = document.getElementById('add-repetition')
const buttonRemoveRepetition = document.getElementById('remove-repetition')

setTime.value = '00:00'
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
    const regex = /^[a-z]*$/;
    console.log(e.value)
    let novaString = setRepetition.value.replace(/\D+/g, '')
    setRepetition.value = novaString;
    console.log(novaString)
})
