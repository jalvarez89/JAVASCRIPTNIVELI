function procesarAlumnos(){
	for (i=1;i<=nroNotas;i++){
		nombre=prompt("Nombre "+i+"/"+nroNotas+":")
		esMasculino=confirm("Es Masculino?");
		if (!esMasculino)
			mujeres++;
		nota=parseInt(prompt("Intr. la nota:"));
		if (isNaN(nota))
			alert("Nota Invalida");
		else
			if (nota>=80){
				if (!esMasculino)
					mujeresAprobadas++;
				alert("Ud. Aprobo");
				console.log("Aprobado ",i);
			}
			else{
				alert("Ud. Reprobo");
				console.log("Reprobado ",i);
			}
	}	
}