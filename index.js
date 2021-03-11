function handleSubmit()
{
    var rcount = document.getElementById("mytable").rows.length;
    var n = 0;
    for(var i = 0;i<rcount-1;i++){
        var id = "marks" + i
        console.log(id);
        var temp = document.getElementById(id).value;
        n = n + parseInt(temp);
    }

    var perc = (n/rcount);
    document.getElementById("output").innerHTML = "Percentage = " + perc;
}

function handleClear()
{
    var rcount = document.getElementById("mytable").rows.length;
    for(var i = 0;i<rcount;i++){
        var id = "marks" + i
        document.getElementById(id).value = "";

    }
    document.getElementById("output").innerHTML = "";
}

function handleRow()
{
    var rcount = document.getElementById("mytable").rows.length;
    var table = document.getElementById("mytable");

    var row = table.insertRow(rcount);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);

    cell1.innerHTML = rcount;
    cell2.innerHTML = "100";
    cell3.innerHTML = `<input type="number" name='marks${rcount-1}' id='marks${rcount-1}' max="99" />`

}