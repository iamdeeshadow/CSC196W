function bigger() 
{
    var text = document.getElementById("inputText");
    text.style.fontSize = "24pt";
    alert("Hello, world!");
}

function fancySchmancy() 
{
var text = document.getElementById("inputText");
text.style.fontWeight = "bold";
text.style.color= "green";
text.style.textDecoration= "underline";
alert("Fancy Shmancy Text :D");
}

function boringBetty() 
{
var text = document.getElementById("inputText");
text.style.fontSize = "initial";
text.style.fontWeight = "normal";
text.style.color = "black";
text.style.textDecoration= "none";
alert("Boring Betty Text :(");
}

function addMoo() 
{
var text = document.getElementById("inputText");
text.style.textTransform = "uppercase";
text.value = text.value.split(".").join("-Moo");
alert("MOOs added after every sentence indicated by a period (.)")
}