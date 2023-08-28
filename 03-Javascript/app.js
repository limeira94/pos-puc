var Cadastro = [{
    "nome": "João",
    "cidade": "São Paulo",
    "idade": 25,
    "veiculos": [{
        "marca": "Volkswagen",
        "modelo": "Gol",
        "ano": 2012,
        "placa": "ABC-1234"
    }]
}, {
    "nome": "Maria",
    "cidade": "São Paulo",
    "idade": 27,
    "veiculos": [{
        "marca": "Fiat",
        "modelo": "Palio",
        "ano": 2010,
        "placa": "DEF-5678"
    }]
}, {
    "nome": "José",
    "cidade": "São Paulo",
    "idade": 30,
    "veiculos": [{
        "marca": "Ford",
        "modelo": "Ka",
        "ano": 2015,
        "placa": "GHI-9012"
    }]
}];

function ExibirCadastro() {
    var textoHTML = '';
    for (let x = 0; x < Cadastro.length; x++) {
        textoHTML += `Pessoa: ${Cadastro[x].nome} <br>`;

        if (Cadastro[x].veiculos.length > 0) {
            textoHTML += '<ul>';
        }
        for (let y = 0; y < Cadastro[x].veiculos.length; y++) {
            let marca = Cadastro[x].veiculos[y].marca;
            let modelo = Cadastro[x].veiculos[y].modelo;
            let ano = Cadastro[x].veiculos[y].ano;
            let placa = Cadastro[x].veiculos[y].placa;
            textoHTML += `<li>${marca} - ${modelo} - ${ano} - ${placa}</li>`;
        }
        if (Cadastro[x].veiculos.length > 0) {
            textoHTML += '</ul>';
        }
    };

    var tela = document.getElementById('tela');
    tela.innerHTML = textoHTML;

    // alert(textoHTML);

}