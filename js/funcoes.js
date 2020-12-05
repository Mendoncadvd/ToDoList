$(document).ready(function () {
    criarTabela();
});

function criarTabela() {
    $("#tabela").remove();
    $("#section2").append(
        "<table id = 'tabela'>" +
        "<tr>" +
        "<th>Check</th>" +
        "<th>Item</th>" +
        "<th>Excluir</th>" +
        "</tr>" +
        "</table>"
    );
    var arrayKeys = Object.keys(localStorage);
    var arrayOrdenado = ordenaArray(arrayKeys);
    for (var id = 0; id < localStorage.length; id++) {
        var item = localStorage.getItem(arrayOrdenado[id]);
        $("#tabela").append(
            "<tr id = 'row" + arrayOrdenado[id] + "'>" +
            "<td> <input type='checkbox' id = 'checkbox" + arrayOrdenado[id] + "'" +
            "onclick='lineThrough( " + arrayOrdenado[id] + ")'" + " value = 'false'></td>" +
            "<td id = 'linha" + arrayOrdenado[id] + "'>" + item + "</td>" +
            "<td><button type = 'button' class='botao' id = 'botao" + arrayOrdenado[id] + "'" +
            "onclick = 'deletaLinha( " + arrayOrdenado[id] + ")'>" +
            "<img src='assets/lixocinza.ico'></button></td>" +
            "</tr>"
        );
        var idToString = "#linha" + arrayOrdenado[id];
        $(idToString).css("width", "300px");
    }
}

$("#btn").click(function enviaDado() {
    var usuarioInput = $("#listInput").val();
    var id = localStorage.length;
    localStorage.setItem(id.toString(), usuarioInput);
    criarTabela();
    $("#listInput").val('');
});

function lineThrough() {
    var pegaId = arguments[0];
    pegaId.toString();
    var idCheckBox = "#checkbox" + pegaId;
    var linha = "#linha" + pegaId;

    if ($(idCheckBox).val() == "false") {
        $(linha).css("text-decoration", "line-through");
        $(idCheckBox).val("true");

    } else {
        $(linha).css("text-decoration", "none");
        $(idCheckBox).val("false");

    }
}

function deletaLinha() {
    var pegaId = arguments[0].toString();
    var item = localStorage.getItem(pegaId)
    var resposta = confirm("Deseja realmente excluir o item: " + item + "?");
    if (resposta == true) {
        localStorage.removeItem(pegaId);
        criarTabela();
    }
}

function ordenaArray(ordena) {
    var pegaArray = ordena;
    pegaArray.sort(function (a, b) { return a - b });
    return ordena;
}
