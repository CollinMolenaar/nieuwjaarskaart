var myText = document.querySelector('title').innerText;
document.querySelector('#title').innerHTML = myText;
document.getElementById('title').classList.add('mystyle');
document.getElementById('block').classList.add('red');
var i;
var a = 0;
setInterval(() => {
    a++;
    if (a > 9) {
        a = 1;
        document.getElementById('block').classList.remove('lightred');
    }
    if (a == 1) {
        document.getElementById('block').classList.add('red');
    } else if(a == 2) {
        document.getElementById('block').classList.remove('red');
        document.getElementById('block').classList.add('orange');
    } else if(a == 3) {
        document.getElementById('block').classList.remove('orange');
        document.getElementById('block').classList.add('yellow');
    }
    else if(a == 4) {
        document.getElementById('block').classList.remove('yellow');
        document.getElementById('block').classList.add('yellowgreen');
    }
    else if(a == 5) {
        document.getElementById('block').classList.remove('yellowgreen');
        document.getElementById('block').classList.add('green');
    }
     else if(a == 6) {
        document.getElementById('block').classList.remove('green');
        document.getElementById('block').classList.add('cyan');
    }
     else if(a == 7) {
        document.getElementById('block').classList.remove('cyan');
        document.getElementById('block').classList.add('blue');
    }
     else if(a == 8) {
        document.getElementById('block').classList.remove('blue');
        document.getElementById('block').classList.add('blueviolet');
    }
     else if(a == 9) {
        document.getElementById('block').classList.remove('blueviolet');
        document.getElementById('block').classList.add('lightred');
    }
}, 1000);
