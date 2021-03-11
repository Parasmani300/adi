function handleSubmit()
{
    var n1 = document.getElementById("marks1").value;
    var n2 = document.getElementById("marks2").value;
    var n3 = document.getElementById("marks3").value;
    var n4 = document.getElementById("marks4").value;

    var n = parseInt(n1) + parseInt(n2) + parseInt(n3) + parseInt(n4); 
    var perc = (n/400)*100
    document.getElementById("output").innerHTML = "Percentage = " + perc;
}

function handleClear()
{
    document.getElementById("marks").value = "";
    document.getElementById("output").innerHTML = "";
}