var n=0;
function mostrar(){
	alert("Hay "+n+" Alumnos");
	for(let i=n;i>=1;i--){
		alert(i);
		console.log(i);
	}
}
function leerDatos(){
	var x=parseInt(prompt("Numero de Alumnos:"));
	if (isNaN(x))
		alert("Numero Invalido");
	else
		n=x;
}