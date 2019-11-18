function init(){
//add your javascript between these two lines of code
	document.getElementById("entrybutton").addEventListener("click", myFunction);

function myFunction(){
    var text = document.getElementById('entryinput').value
    document.getElementById('textoutput').innerHTML = text;
    alert('Naveed Hussain:' + text);
}};

window.addEventListener('load', init);

