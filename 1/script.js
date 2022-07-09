document.getElementById('main-box').style.fontSize = '15px';

document.getElementById('main-box').style.lineSpace= '20px';

document.getElementById('main-box').style.backgroundColor = 'aqua';
document.getElementById('main-box').style.height = '100px';
document.getElementById('main-box').style.width = '300px';
document.getElementById('main-box').style.border= 'solid 1px black';




document.getElementById('box1').innerHTML = 'New';
document.getElementById('box2').innerHTML = 'Sale';
document.getElementById('box3').innerHTML = 'Arrived';


setInterval(hide1, 2000);

setInterval(hide2, 3000);

setInterval(hide3, 4000);


setInterval(show1, 3000);

setInterval(show2, 4000);

setInterval(show3, 5000);



function hide1(){
    document.getElementById('box1').style.display = 'none';
    document.getElementById('main-box').style.display = 'inline-block';
}

function hide2(){
    document.getElementById('box2').style.display = 'none';
    document.getElementById('main-box').style.display = 'inline-block';
}

function hide3(){
    document.getElementById('box3').style.display = 'none';
    document.getElementById('main-box').style.display = 'inline-block';
}


function show1(){
    document.getElementById('box1').style.display = 'block';
}

function show2(){
    document.getElementById('box2').style.display = 'block';
}

function show3(){
    document.getElementById('box3').style.display = 'block';
}