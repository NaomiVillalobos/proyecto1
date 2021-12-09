<!DOCTYPE html>
<html Lang="es">
<head>
	<meta charset="UTF-8"></meta>
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<title>Hola mundo con Vue.js!</title>
	<script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>
</head>
<body>
	<div id='app'>
		<h1>{{Roles}}</h1>
    <h2>{{Administrador}}</h2>
    <h2>{{Seguridad}}</h2>
    <h2>{{Consecutivo}}</h2>
    <h2>{{Mantemiento}}</h2>
    <h2>{{Consulta}}</h2>
	</div>
	
	<script>
		app = new Vue({
			el: '#app',
			data: {
				Roles: "Estos son los roles:",
       			        Administrador: "Administrador",
                                Seguridad: "Seguridad",
                                Consecutivo: "Consecutivo",
                                Mantenimiento: "Mantenimiento",
                                Consulta: "Consulta"
			}
		})
	</script>
</body>
</html>
