<!DOCTYPE html>
<html>
<head>
	<title>Consecutivo</title>
	<script type="text/javascript" src="vue.min.js"></script>
</head>
<body>
<h1>Lista de Consecutivos</h1>
<div id="app" class="container">
<table border="1">
<thead>
	<th>Codigo</th>
	<th>Descripcion</th>
	<th>Consecutivo</th>
	<th>Edicion</th>
</thead>
	<tr v-for="data in all_data ">
		<td>{{data.codigo}}</td>
		<td>{{data.descripcion}}</td>
		<td>{{data.consecutivo}}</td>
		<td>{{data.edicion}}</td>
	</tr>
</ul>
</div>
<script>
	var app = new Vue({
		el: "#app",
		data: {
			all_data:[]
		},
		created: function(){
			console.log("Iniciando ...");
			this.get_lista();
		},
		methods:{
			get_lista: function(){
				fetch("./lista.vue")
				.then(response=>response.json())
				.then(json=>{this.all_data=json.lista})
			}
		}
	});
</script>
</body>
</html>
