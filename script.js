function roundar(numero)
{
    numero *= 10000;
    numero = Math.round(numero);
    numero /= 10000;
    return(numero);
}
var segundoRun = 0;
var result;
var foto;
var blowing;
function segundo()
{   
    document.getElementById("x1x2").innerHTML.replace("");
    if (segundoRun > 0)
    {
            window.clearInterval(window.result);
            window.clearInterval(window.foto);
            window.clearTimeout(window.blowing);
    }
    segundoRun ++;
    var a = parseFloat(document.getElementById("txtbA").value);
    var b = parseFloat(document.getElementById("txtbB").value);
    var c = parseFloat(document.getElementById("txtbC").value);
    var delta = Math.pow(b,2) - 4 * a * c;
    if (delta >= 0)
    {
        var x1 = (- b + Math.sqrt(delta)) / 2 * a;
        var x2 = (- b - Math.sqrt(delta)) / 2 * a;
        x1 = roundar(x1);
        x2 = roundar(x2);
        document.getElementById("x1x2").innerHTML = (x1 + "; " + x2);
        
        blowing = setTimeout(function(){foto = setInterval(function(){document.getElementById("x1x2").innerHTML = ("<img src='Pictures/blow.gif' />");},2000);}, 1000);
        result = setInterval(function() {document.getElementById("x1x2").innerHTML = ("<img src=''/>" + x1 + "; " + x2);},2000);

    }
    else
    {
        delta = Math.sqrt(delta * -1) / (2 * a);
        var x1 = (-b) / (2 * a);
        delta = roundar(delta);
        x1 = roundar(x1);
        document.getElementById("x1x2").innerHTML = (x1 + " + " + delta + "i;<br>" + x1 + " - " + delta + "i");
        
        blowing = setTimeout(function(){foto = setInterval(function(){document.getElementById("x1x2").innerHTML = ("<img src='Pictures/blow.gif' />");},2000);}, 1000);
        result = setInterval(function() {document.getElementById("x1x2").innerHTML = ("<img src=''/>" + x1 + " + " + delta + "i;<br>" + x1 + " - " + delta + "i");},2000);
    }
}

function foco(esse)
{
    if (esse.value == esse.defaultValue)
        esse.value = '';
}

function blurou(esse)
{
    if (esse.value == '')
        esse.value = esse.defaultValue;
}

function system1()
{
    var A = parseFloat(document.getElementById("txtbA").value);
    var B = parseFloat(document.getElementById("txtbB").value);
    var C = parseFloat(document.getElementById("txtbC").value);
    var D = parseFloat(document.getElementById("txtbD").value);
    var E = parseFloat(document.getElementById("txtbE").value);
    var F = parseFloat(document.getElementById("txtbF").value);
    var aux = A;
    A *= (D * (-1)); B *= (D * (-1)); C *= (D * (-1));
    D *= aux; E *= aux; F *= aux;
    var y = (C + F) / (B + E);
    var x = (C - (B * y)) / A;
    document.getElementById("xy").innerHTML = ("(" + x + "; " + y + ")");
    
    blowing = setTimeout(function(){foto = setInterval(function(){document.getElementById("xy").innerHTML = ("<img src='Pictures/blow.gif' />");},2000);}, 1000);
    result = setInterval(function() {document.getElementById("xy").innerHTML = ("(" + x + "; " + y + ")");},2000);
  return(0);
}

function change(move)
{
    document.getElementById("foto").src=move;
}

function volta()
{
    document.getElementById("foto").src="Pictures/Movimentos/Movimentos.jpg";
}