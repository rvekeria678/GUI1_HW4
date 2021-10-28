const TblAdd = document.querySelector("#submit-btn");
TblAdd.addEventListener("click", mulfcn);
/* Reference: https://www.w3schools.com/jsref/prop_pushbutton_disabled.asp
*/
document.getElementById("clear-btn").disabled = true;
function mulfcn()
{
    /* Reference: https://www.w3schools.com/Jsref/met_document_getelementbyid.asp
    */
    document.getElementById("clear-btn").disabled = false;
    var rmin = document.getElementById("rowmin").value; 
    var rmax = document.getElementById("rowmax").value;
    var cmin = document.getElementById("colmin").value;
    var cmax = document.getElementById("colmax").value;

    var rminVal = document.getElementById("rowmin");
    var rmaxVal = document.getElementById("rowmax");
    var cminVal = document.getElementById("colmin");
    var cmaxVal = document.getElementById("colmax");

    /* Reference: https://stackoverflow.com/questions/61550004/check-if-string-contains-any-letter-javascript-jquery
    */
   /* Reference: https://www.w3schools.com/jsref/prop_html_innerhtml.asp
   */
    var regExp = /[a-zA-Z]/g;
    if (regExp.test(rmin)) {
        document.getElementById('table-container').innerHTML = 'Please make sure the row minimum has no letters!';
        /* Reference: https://www.w3schools.com/jsref/prop_style_backgroundcolor.asp
        */
        rminVal.style.backgroundColor = "salmon";
    }
    else if (regExp.test(rmax)) {
        document.getElementById('table-container').innerHTML = '<h2>Please make sure the row minimum has no letters!</h2>';
        rmaxVal.style.backgroundColor = "salmon";
    }
    else if (regExp.test(cmin)) {
        document.getElementById('table-container').innerHTML = '<h2>Please make sure the column minimum has no letters!</h2>';
        cminVal.style.backgroundColor = "salmon";
    }
    else if (regExp.test(cmax)) {
        document.getElementById('table-container').innerHTML = '<h2>Please make sure the row minimum has no letters!</h2>';
        cmaxVal.style.backgroundColor = "salmon";
    }
    else if (+rmin > +rmax) {
    /*  https://stackoverflow.com/questions/1133770/how-to-convert-a-string-to-an-integer-in-javascript */
        document.getElementById('table-container').innerHTML = '<h2>Please make sure the row minimum is less than or equal to row maximum!</h2>';
        rminVal.style.backgroundColor = "salmon";
    }
    else if (+cmin > +cmax) {
        document.getElementById('table-container').innerHTML = '<h2>Please make sure the column minimum is less than or equal to column maximum!</h2>';
        cminVal.style.backgroundColor = "salmon";
    }
    else if (+rmin > 50 || +rmin < -50) {
        document.getElementById('table-container').innerHTML = '<h2>Please make sure the row minimum is between -50 and 50!</h2>';
        rminVal.style.backgroundColor = "salmon";                    
    }
    else if (+rmax > 50 || +rmax < -50) {
        document.getElementById('table-container').innerHTML = '<h2>Please make sure the row minimum is between -50 and 50!</h2>';
        rmaxVal.style.backgroundColor = "salmon";
    }
    else if (+cmin > 50 || +cmin < -50) {
        document.getElementById('table-container').innerHTML = '<h2>Please make sure the row minimum is between -50 and 50!</h2>';
        cminVal.style.backgroundColor = "salmon";
    }
    else if (+cmax > 50 || +cmax < -50) {
        document.getElementById('table-container').innerHTML = '<h2>Please make sure the row minimum is between -50 and 50!</h2>';
        cmaxVal.style.backgroundColor = "salmon";
    }
    else {
        rminVal.style.backgroundColor = "white";
        rmaxVal.style.backgroundColor = "white";
        cminVal.style.backgroundColor = "white";
        cmaxVal.style.backgroundColor = "white";

        var table = '';
        var y = +rmin;

        table += '<tr>' + '<td>' + ' ' + '</td>';                       
        for (var x = +cmin; x <= +cmax; ++x) {
            table += '<td>' + x + '</td>';
        }
        table += '</tr>';

        for (var i = +rmin; i <= +rmax; i++) {
            table += '<tr>';
            table += '<td>' + y + '</td>';
            ++y;
            for (var j = +cmin; j <= +cmax; j++) {
                table += '<td>' + i * j + '</td>';
            }
            table += '</tr>';
        }
        document.getElementById('table-container').innerHTML = '<table>' + table + '</table>';
    }
}
function clr()
{
    document.getElementById("clear-btn").disabled = true;
    document.getElementById("rowmin").value="";
    document.getElementById("rowmax").value="";
    document.getElementById("colmin").value="";
    document.getElementById("colmax").value="";
    document.getElementById("table-container").innerHTML = '';

}