let miliseconds = 0;
let seconds = 0;
let minutes = 0;

function displayTime() {
    miliseconds++;
    if (miliseconds === 100){
        miliseconds = 0;
        seconds++;
        if (seconds === 60){
            minutes++;
            seconds = 0;
        }
    }
    

    let clockMili = miliseconds;
    if (miliseconds < 10){
        clockMili = '0' + String(miliseconds);
    }
    let clockSecond = seconds;
    if (seconds < 10){
        clockSecond = '0' + String(seconds);
    }
    let clockMinute = minutes;
    if (minutes < 10){
        clockMinute = '0' + String(minutes);
    }
    
    
    let time = `${clockMinute}:${clockSecond}:${clockMili}`;

    document.querySelector('.clock').innerHTML = time;
}


document.getElementById('start').addEventListener('click', function(){
    const createClock = setInterval(displayTime, 10);

    document.getElementById('stop').addEventListener('click', function(){
        clearInterval(createClock);

        document.getElementById('stop').style.display = 'none';
        document.getElementById('start').style.display = 'block';
    });

    document.getElementById('reset').addEventListener('click', function(){
        miliseconds = 0;
        seconds = 0;
        minutes = 0;
        clearInterval(createClock);

        let time = `00:00:00`;

        document.querySelector('.clock').innerHTML = time;
    });
    document.getElementById('start').style.display = 'none';
    document.getElementById('stop').style.display = 'block';
});





