document.getElementById('btnA').onclick = function () {
    //button listens for click
    document.getElementById('audioA').play();
}
document.getElementById('btnS').onclick = function () {
    document.getElementById('audioS').play();
}

document.getElementById('btnD').onclick = function () {
    document.getElementById('audioD').play();
}

document.getElementById('btnF').onclick = function () {
    document.getElementById('audioF').play();
}

document.getElementById('btnG').onclick = function () {
    document.getElementById('audioG').play();
}

document.getElementById('btnH').onclick = function () {
    document.getElementById('audioH').play();
}

document.getElementById('btnJ').onclick = function () {
    document.getElementById('audioJ').play();
}

document.getElementById('btnK').onclick = function () {
    document.getElementById('audioK').play();
}

document.getElementById('btnL').onclick = function () {
    document.getElementById('audioL').play();
}




document.addEventListener('keypress', (e) => {
    console.log(e)
    if (e.keyCode == 97) {
        document.getElementById('audioA').play();

    }
})
document.addEventListener('keypress', (e) => {
    console.log(e)
    if (e.keyCode == 115) {
        document.getElementById('audioS').play();

    }
})
document.addEventListener('keypress', (e) => {
    console.log(e)
    if (e.keyCode == 100) {
        document.getElementById('audioD').play();

    }
})
document.addEventListener('keypress', (e) => {
    console.log(e)
    if (e.keyCode == 102) {
        document.getElementById('audioF').play();

    }
})
document.addEventListener('keypress', (e) => {
    console.log(e)
    if (e.keyCode == 103) {
        document.getElementById('audioG').play();

    }
})



document.addEventListener('keypress', (e) => {
    console.log(e)
    if (e.keyCode == 104) {
        document.getElementById('audioH').play();

    }
})


document.addEventListener('keypress', (e) => {
    console.log(e)
    if (e.keyCode == 106) {
        document.getElementById('audioJ').play();

    }
})

document.addEventListener('keypress', (e) => {
    console.log(e)
    if (e.keyCode == 107) {
        document.getElementById('audioK').play();

    }
})
document.addEventListener('keypress', (e) => {
    console.log(e)
    if (e.keyCode == 108) {
        document.getElementById('audioL').play();

    }
})