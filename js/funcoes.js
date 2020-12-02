var id = 0;

$("#section2").hide();

$("#btn").click(function listagem() {
    $("#section2").show();
    var usuarioInput = $("#listInput").val();
    $("#tabela").append(
        "<tr id = 'row" + id + "'>" +
        "<td> <input type='checkbox' id = '" + id + "'" + "onclick='lineThrough( " + id + ")'" + "></td>" +
        "<td id = 'linha" + id + "'>" + usuarioInput + "</td>" +
        "<td><button type = 'button' id = 'botao" + id + "'" + "onclick = 'deletaLinha( " + id + ")'" + ">Excluir</button></td>" +
        "</tr>"
    );
    $("#listInput").val('');
    var idToString ="#linha" + id.toString();
    $(idToString).css("width", "300px");
    id++
});

function lineThrough() {
    var pegaId = arguments[0];
    pegaId.toString();
    var linha = "#linha" + pegaId;
    $(linha).css("text-decoration", "line-through");
}

function deletaLinha() {
    var pegaId = arguments[0];
    pegaId.toString();
    var linha = "#row" + pegaId;
    var resposta = confirm("Deseja realmente excluir este item?");
    if (resposta == true) {
        $(linha).remove();
    }

}
