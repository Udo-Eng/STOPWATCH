// //Practise of JavaScript Stop clock
// const appendseconds = document.querySelector('#seconds');
// const appendtens = document.querySelector('#tens');
// const buttonStart = document.querySelector('#button-start');
// const buttonEnd = document.querySelector('#button-stop');
// const buttonReset = document.querySelector('#button-reset');

// buttonReset.addEventListener('click', function (e) {
//     e.preventDefault();
//     appendseconds.innerHTML = `00`;
//     appendtens.innerHTML = `00`;
// });

// Correction 
// When Window is loaded run this function 
window.onload = function () {
    //state your variables to use 
    let minutes = 00;
    let seconds = 00;
    let tens = 00;
    const appendSeconds = document.querySelector('#seconds');
    const appendTens = document.querySelector('#tens');
    const appendMin = document.querySelector('#min');
    const buttonStart = document.querySelector('#button-start');
    const buttonStop = document.querySelector('#button-stop');
    const buttonReset = document.querySelector('#button-reset');
    //stating the interval to use 
    var Interval;
    buttonStart.addEventListener('click', function (e) {
        e.preventDefault(e);
        clearInterval(Interval)
        Interval = setInterval(StartTimer, 10);
    });
    buttonStop.addEventListener('click', function (e) {
        e.preventDefault(e);
        clearInterval(Interval);
    });
    buttonReset.addEventListener('click', function (e) {
        e.preventDefault();
        clearInterval(Interval);
        tens = "00";
        seconds = "00";
        minutes = "00";
        appendTens.innerHTML = tens;
        appendSeconds.innerHTML = seconds;
        appendMin.innerHTML = minutes;
    });
    //TIMER FUNCTION TO  AUTOMATICALLY UPDATE THE VALUE OF THE TIME 
    function StartTimer() {
        tens++;
        if (tens <= 9) {
            appendTens.innerHTML = "0" + tens;
        }
        if (tens > 9) {
            appendTens.innerHTML = `${tens}`
        }
        if (tens > 99) {
            console.log('increment seconds value');
            seconds++;
            appendSeconds.innerHTML = "0" + seconds;
            tens = 0;
            appendTens.innerHTML = "0" + 0;
        }
        if (seconds > 9) {
            appendSeconds.innerHTML = seconds;
        }
        if (seconds > 60) {
            minutes++
            appendMin.innerHTML = "0" + minutes;
            seconds = 0;
            appendSeconds.innerHTML = "0" + seconds;
        }
        if (minutes > 9) {
            appendMin.innerHTML = minutes;
        }
    }

}