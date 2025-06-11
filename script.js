const img = document.getElementById("homeIMG")
const map = document.getElementById("homeMAP")
const horario = new Date();

const largura = window.innerWidth;
const altura = window.innerHeight;

function abrirPopUp(src) {
  document.getElementById('popup').style.display = 'block';
  document.getElementById('pop-up').src = src;
}
function fecharPopUp() {
  document.getElementById('popup').style.display = 'none';
}

function Area(shape, coords, alt, src) {
    const elemente = document.createElement("area");
    elemente.shape = shape;
    elemente.coords = coords;
    elemente.alt = alt;
    elemente.href = '#';
    elemente.onclick = () => abrirPopUp(src);
    return elemente;
}

if(largura > altura) {
    img.style.height = "90vh";
    document.getElementById("popup").style.height = "70vh";
    document.getElementById("pop-up").style.height = "65vh";
} else {
    img.style.width = "90vw";
    document.getElementById("popup").style.width = "70vw";
    document.getElementById("pop-up").style.width = "65vw";
}

if(horario.getHours() > 19 || horario.getHours() < 7) {
    img.src = "src/BaseNoite.png";
    map.appendChild(Area("poly", "15, 669, 127, 577, 235, 625, 321, 501, 405, 617, 577, 657, 541, 699, 537, 729, 475, 743, 389, 809, 301, 757, 243, 803, 137, 797", "cidade", "src/7-cidade.jpg"));
    map.appendChild(Area("rect", "651, 775, 777, 953", "sorvete", "src/8-sorvete.jpg"));
    map.appendChild(Area("circle", "136, 1034, 85", "flor", "src/9-flores.jpg"));
    map.appendChild(Area("poly", "733, 87, 959, 223, 517, 219", "nuvemE", "src/10-nuvemE.jpg"));
    map.appendChild(Area("rect", "360, 860, 580, 1090", "onibus", "src/11-onibus.jpg"));
    map.appendChild(Area("circle", "1024, 1536, 334", "morango", "src/12-morangos.jpg"));
} else {
    img.src = "src/BaseDia.png";
    map.appendChild(Area("circle", "1024, 0, 234", "ceu", "src/1-ceu.jpg"));
    map.appendChild(Area("rect", "0, 1120, 1024, 1536", "rua", "src/2-rua.jpg"));
    map.appendChild(Area("rect", "197, 761, 313, 1073", "placaOnibus", "src/3-placaOnibus.jpg"));
    map.appendChild(Area("rect", "365, 849, 581, 1077", "onibus", "src/4-onibus.jpg"));
    map.appendChild(Area("rect", "601, 481, 913, 593", "placaSorvete", "src/5-placaSorvete.png"));
    map.appendChild(Area("circle", "133, 521, 66", "cidade", "src/6-cidade.jpg"));
}

imageMapResize();
