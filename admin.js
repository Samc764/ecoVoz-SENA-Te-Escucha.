const supabase = window.supabase.createClient(
"https://qxdmgwskzdlvmvxgabey.supabase.co",
"TU_PUBLISHABLE_KEY"
)

async function cargarDatos(){

const { data, error } = await supabase
.from("pqrs")
.select("*")
.order("fecha",{ascending:false})

let tabla = document.getElementById("tabla")
tabla.innerHTML=""

data.forEach(p=>{

let fila = `
<tr>

<td>${p.id}</td>
<td>${p.categoria}</td>
<td>${p.mensaje}</td>
<td>${p.estado}</td>

<td>

<button onclick="cambiarEstado(${p.id},'visto')">Visto</button>

<button onclick="cambiarEstado(${p.id},'resuelto')">Resuelto</button>

</td>

</tr>
`

tabla.innerHTML += fila

})

document.getElementById("contador").innerText =
"Total mensajes: " + data.length

}

async function cambiarEstado(id,estado){

await supabase
.from("pqrs")
.update({estado:estado})
.eq("id",id)

cargarDatos()

}

cargarDatos()