$(document).ready(function(){
    $("#table-container").hide();
    $("#submit-btn").click(function(){
        $("#table-container").show();
        $("#clear-btn").prop("disabled", false);

        var rmin = $("#rowmin").val();
        var rmax = $("#rowmax").val();
        var cmin = $("#colmin").val();
        var cmax = $("#colmax").val();

        var table = '';
        var y = rmin;

        var check = 0;

        table += '<tr>' + '<td>' + ' ' + '</td>';                       
        for (var x = cmin; x <= cmax; ++x) {
            table += '<td>' + x + '</td>';
        }
        table += '</tr>';

        for (var i = rmin; i <= rmax; i++) {
            table += '<tr>';
            table += '<td>' + y + '</td>';
            ++y;
            ++check;
            for (var j = cmin; j <= cmax; j++) {
                table += '<td>' + i * j + '</td>';
            }
            table += '</tr>';
        }
        $("#table-container").html("<table>" + table + "</table>");
    });
    $("#clear-btn").click(function(){
        $("#table-container").hide();
        $("#clear-btn").prop("disabled", true);
        $("#rowmin").val("");
        $("#rowmax").val("");
        $("#colmin").val("");
        $("#colmax").val("");
    });
});