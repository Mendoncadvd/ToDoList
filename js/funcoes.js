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
        "</table>");
    
        for(id = 0; id < localStorage.length; id++) {
            if(localStorage.key(id)!=null) {
                $("#tabela").append(
                    "<tr id = 'row" + id + "'>" +
                        "<td> <input type='checkbox' id = '" + id + "'" + "onclick='lineThrough( " + id + ")'" + "></td>" +
                        "<td id = 'linha" + id + "'>" + localStorage.getItem(id) + "</td>" +
                        "<td><button type = 'button' id = 'botao" + id + "'" + 
                        "onclick = 'deletaLinha( " + id + ")'" + ">Excluir</button></td>" +
                    "</tr>"
                );
                var idToString ="#linha" + id.toString();
                $(idToString).css("width", "300px");
            } 
        }   
}

$("#btn").click(function enviaDado() {
    var usuarioInput = $("#listInput").val();
    id = localStorage.length;
    localStorage.setItem(id.toString(), usuarioInput); 
    criarTabela();
    $("#listInput").val('');
});

function lineThrough() {
    var pegaId = arguments[0];
    pegaId.toString();
    var linha = "#linha" + pegaId;
    $(linha).css("text-decoration", "line-through");
}

function deletaLinha() {
    var pegaId = arguments[0];
    /* pegaId.toString(); */
    var item = localStorage.getItem(pegaId)
    /* var linha = "#row" + pegaId; */
    var resposta = confirm("Deseja realmente excluir o item: " + item + " da id " + pegaId +"?");
    if(resposta == true) {
        localStorage.removeItem(pegaId);
        criarTabela();
    }
}
