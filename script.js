const supabase = window.supabase.createClient(
"https://qxdmgwskzdlvmvxgabey.supabase.co",
"sb_publishable_EYEeKRwLY-uX5ik2Bt_3fg_3HmmLYS2"
)

const form = document.getElementById("pqrsForm")

form.addEventListener("submit", async (e) => {

e.preventDefault()

let categoria = document.getElementById("categoria").value
let mensaje = document.getElementById("mensaje").value

if(mensaje.trim() === ""){
alert("Escribe un mensaje")
return
}

const { error } = await supabase
.from("pqrs")
.insert([
{
categoria: categoria,
mensaje: mensaje,
estado: "pendiente"
}
])

if(error){

alert("Error enviando mensaje")
console.log(error)

}else{

alert("Mensaje enviado")
document.getElementById("mensaje").value=""

}

})