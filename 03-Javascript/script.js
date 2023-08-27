var elem = document.getElementById('btnHello');
elem.addEventListener('click', function () {
    var divTela = document.getElementById('tela');
    divTela.innerHTML = "Hello World";
}, false);

var elem2 = document.getElementById('btnWorld');
elem2.addEventListener('click', function () {
    alert("World Hello");
}, false);