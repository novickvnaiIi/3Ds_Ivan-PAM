function soma (x,y){
    return parseInt(x)+parseInt(y)
}
function resSoma(){
    var x = document.getElementById("x").value
    var y = document.getElementById("y").value
    var z = soma(x,y)

    document.getElementById('resultado').innerHTML = z
}