var sec=0
var min=0
var hr=0
var interval

function star(){
    watch()
    interval = setInterval(watch, 1000)
}

function pause(){
    clearInterval(interval)
}

function stop(){
    clearInterval(interval);
    sec=0
    min=0
    document.getElementById('watch').innerText= '00:00:00'      
}

function doisDigitos(digito){
    if(digito<10){
        return('0'+digito)
    }
    else{
        return(digito)
    }
}

function watch(){
    sec++
    if(sec==60){
        min++
        sec=0
        if(min==60){
            min=0
            hr++
        }
    }
    document.getElementById('watch').innerText=doisDigitos(hr)+':'+ doisDigitos(min)+':'+ doisDigitos(sec)
}
