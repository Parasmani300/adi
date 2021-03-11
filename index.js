function handleSubmit()
{
    var n = document.getElementById("marks").value;
    document.getElementById("output").innerHTML = n;
}

function handleClear()
{
    document.getElementById("marks").value = "";
    document.getElementById("output").innerHTML = "";
}