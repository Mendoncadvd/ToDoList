var id = 0;
$(document).ready(function() {

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
    for (var i = 0; i < localStorage.length; i++) {
        if (parseInt(arrayOrdenado[i]) > id) {
            id = parseInt(arrayOrdenado[i]);
        }
        var item = JSON.parse(localStorage.getItem(arrayOrdenado[i]));
        $("#tabela").append(
            "<tr id = 'row" + arrayOrdenado[i] + "'>" +
            "<td> <input type='checkbox' id = 'checkbox" + arrayOrdenado[i] + "'" +
            "onclick='lineThrough( " + arrayOrdenado[i] + ")'" + " value = '" + item.check + "'></td>" +
            "<td id = 'linha" + arrayOrdenado[i] + "'>" + item.input + "</td>" +
            "<td><button type = 'button' class='botao' id = 'botao" + arrayOrdenado[i] + "'" +
            "onclick = 'deletaLinha( " + arrayOrdenado[i] + ")'>" +
            "<img src='assets/lixocinza.ico'></button></td>" +
            "</tr>"
        );
        var idToString = "#linha" + arrayOrdenado[i];
        $(idToString).css("width", "300px");
        var linha = "#linha" + arrayOrdenado[i].toString();
        var idCheckbox = "#checkbox" + arrayOrdenado[i];
        if (item.check == true) {
            $(linha).css("text-decoration", "line-through");
            $(idCheckbox).attr("checked", "checked");
        } else {
            $(linha).css("text-decoration", "none");
        }
    }
}

$("#btn").click(function enviaDado() {
    var usuarioInput = $("#listInput").val();
    id += 1;
    var dados = { input: usuarioInput, check: false };
    localStorage.setItem(id.toString(), JSON.stringify(dados));
    criarTabela();
    $("#listInput").val('');
});

function lineThrough() {
    var pegaId = arguments[0];
    var idCheckBox = "#checkbox" + pegaId.toString();
    var item = JSON.parse(localStorage.getItem(pegaId));
    var usuarioInput = item.input;

    if ($(idCheckBox).val() == "false") {
        item = { input: usuarioInput, check: true };
        localStorage.setItem(pegaId.toString(), JSON.stringify(item));
    } else {
        item = { input: usuarioInput, check: false };
        localStorage.setItem(pegaId.toString(), JSON.stringify(item));
    }
    criarTabela();

}

function deletaLinha() {
    var pegaId = arguments[0].toString();
    var item = JSON.parse(localStorage.getItem(pegaId));
    var resposta = confirm("Deseja realmente excluir o item: " + item.input + "?");
    if (resposta == true) {
        localStorage.removeItem(pegaId);
        criarTabela();
    }
}

function ordenaArray(ordena) {
    var pegaArray = ordena;
    pegaArray.sort(function(a, b) { return a - b });
    return ordena;
}