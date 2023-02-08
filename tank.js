function goTop() {
    let Top = parseInt(document.getElementById('tank').style['top']);
    document.getElementById('tank').style['top'] = Top - 19 + "px";
}

function goBottom() {
    let Bottom = parseInt(document.getElementById('tank').style['top']);
    document.getElementById('tank').style['top'] = Bottom + 19 + "px";
}

function goLeft() {
    let Left = parseInt(document.getElementById('tank').style['left']);
    document.getElementById('tank').style['left'] = Left - 19 + "px";
}

function goRight() {
    let Right = parseInt(document.getElementById('tank').style['left']);
    document.getElementById('tank').style['left'] = Right + 19 + "px";
}