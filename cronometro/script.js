var msec = 0
var sec = 0
var min = 0
var interval

function zerozero(digit){
    if (digit< 10){
        return ('0' + digit)
    } else {
        return(digit)
    }
}

function start(){
    interval = setInterval(time, 10)
}

function pause(){
    clearInterval(interval)
}

function stop(){
    clearInterval(interval)
    sec = 0
    min = 0
    document.getElementById('time').innerText = '00:00:00'
}


function time(){
    msec++

    if (msec == 100){
        sec++
        msec = 0

        if (sec == 60){
            min++
            sec = 0
        }
    }

    

    document.getElementById('time').innerText = `${zerozero(min)}:${zerozero(sec)}:${zerozero(msec)}`
}