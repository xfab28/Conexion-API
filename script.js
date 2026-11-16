const getInformacion = async () => {
    let id = parseInt(document.getElementById("busqueda").value);

    try {
        const respuesta = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
        const informacion = await respuesta.json();

        document.getElementById("name").innerHTML = informacion.name;
        document.getElementById("user").innerHTML = informacion.username;
        document.getElementById("email").innerHTML = informacion.email;
        document.getElementById("city").innerHTML = informacion.address.city;

        document.querySelector(".mensaje").classList.add("mensaje-verde");
        document.querySelector(".mensaje").innerHTML = "Usuario encontrado";

    } catch (error) {
        document.querySelector(".mensaje").classList.add("mensaje-rojo");
        document.querySelector(".mensaje").innerHTML = "Usuario no encontrado";
    }
}

document.getElementById("btn-buscar").addEventListener("click", getInformacion);