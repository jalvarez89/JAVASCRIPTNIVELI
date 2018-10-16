function procesarAlumnos(){
	for (i=1;i<=N;i++){
		let nombre=prompt("Nombre "+i+"/"+N+":");
		esMasculino=confirm("Es masculino ?");
		
		if (!esMasculino)
			mujeres++;
			
		nota = parseInt(prompt("Intr. la nota:"));
		if (isNaN(nota))
			alert("Nota invalida");
		else
			if (nota>=80){
				if (!esMasculino)
					mujeresAprobadas++;
					
				alert("Ud Aprobo");
				console.log("Aprobado ",i);
			}
	}
	alert(nombre)
}