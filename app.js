let amigos = [];

function agregarAmigo() {
    let amigo = document.getElementById("amigo").value;
    if (amigo.length > 0) {
        //verifica si el nombre ya existe
        if (amigos.includes(amigo)) {
            alert("El nombre ya existe");
        } else {
            amigos.push(amigo);
            // Agregar el amigo a la lista de amigos
            const listaAmigos = document.getElementById("listaAmigos");
            const li = document.createElement("li");
            li.textContent = amigo;
            listaAmigos.appendChild(li);
        }
    } else {
        alert("Debes ingresar un nombre");
    }
    document.getElementById("amigo").value = "";
}

function sortearAmigo() {
    // Verificar si hay al menos 2 amigos
    if (amigos.length < 2) {
        alert("Debes ingresar al menos 2 amigos");
        return;
    }
    // Sortear amigo secreto

    const resultado = amigos[Math.floor(Math.random() * amigos.length)];
    document.getElementById("resultado").textContent = "tu amigo secreto es " + resultado;
    const listaAmigos = document.getElementById("listaAmigos");

}
