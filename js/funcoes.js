var id = 0;

$(document).ready(criarTabela());

function criarTabela() {
    $("#tabela").remove();
    $("#section2").append(
        "<table id = 'tabela'>" +
            "<tr style = 'width: 300px'>" +
                "<th>Check</th>" +
                "<th>Item</th>" +
                "<th>Excluir</th>" +
            "</tr>"+
        "</table>"
    );
    
    for(id = 0; id < localStorage.length; id++) {
        $("#tabela").append(
            "<tr id = 'row" + id + "'>" +
                "<td> <input type='checkbox' id = 'checkbox" + id + "'" + 
                "onclick='lineThrough( " + id + ")'" + " value = 'false'></td>" +
                "<td id = 'linha" + id + "'>" + localStorage.getItem(id) + "</td>" +
                "<td><button type = 'button' class='botao' id = 'botao" + id + "'" + 
                "onclick = 'deletaLinha( " + id + ")'>"+
                "<img src='assets/lixocinza.ico'></button></td>" +
            "</tr>"
        );
        var idToString ="#linha" + id.toString();
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
    
    if($(idCheckBox).val() == "false") {
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
    var linha = "#row" + pegaId;
    var resposta = confirm("Deseja realmente excluir o item: " + item + "?");
    if(resposta == true) {
        localStorage.removeItem(pegaId);
        $(linha).hide();
    }
}
