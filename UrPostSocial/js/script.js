document
  .querySelector(".publish form")
  .addEventListener("submit", function (event) {
    event.preventDefault(); // Evitar que el formulario se envíe

    const textarea = document.querySelector(".publish_textarea textarea");
    const contenido = textarea.value;

    if (contenido.trim() !== "") {
      const feed = document.querySelector(".publish");

      // Crear nuevo post en el DOM
      const nuevoPost = `
            <div class="row border-radius">
                <div class="feed">
                    <div class="feed_title">
                        <img src="images/user.jpg" alt="" />
                        <span><b>Tú</b> publicaste un <a href="#">estado</a><br>
                            <p>Justo ahora</p>
                        </span>
                    </div>
                    <div class="feed_content">
                        <p>${contenido}</p>
                    </div>
                    <div class="feed_footer">
                        <ul class="feed_footer_left">
                            <li class="hover-orange"><i class="fa fa-heart"></i> 0</li>
                            <li><span>Sé el primero en darle like a esto</span></li>
                        </ul>
                        <ul class="feed_footer_right">
                            <li class="hover-orange"><i class="fa fa-share"></i> 0</li>
                            <a href="#" style="color:#515365;">
                                <li class="hover-orange"><i class="fa fa-comments-o"></i> 0 comentarios</li>
                            </a>
                        </ul>
                    </div>
                </div>
            </div>`;

      feed.insertAdjacentHTML("afterend", nuevoPost); // Agregar el nuevo post al inicio del feed

      textarea.value = ""; // Limpiar el textarea
    }
  });

const usuarios = [
  {
    nombre: "Francis Smith",
    imagen: "images/user-4.jpg",
    contenido: "¡Hola a todos! Este es mi primer post.",
  },
  {
    nombre: "Hugh Wilson",
    imagen: "images/user-2.jpg",
    contenido: "Hoy es un gran día para la ciencia.",
  },
  {
    nombre: "Karen Masters",
    imagen: "images/user-6.jpg",
    contenido: "Adiós mundo cruel!.",
  },
];

const amigosSugeridos = document.querySelectorAll(
  ".suggestions_row .row_contain button"
);

amigosSugeridos.forEach((boton) => {
  boton.addEventListener("click", function () {
    const usuarioNombre =
      this.previousElementSibling.querySelector("b").innerText;

    this.innerText = "Siguiendo";
    this.classList.add("button-following");
    this.disabled = true;

    // Buscar al usuario por nombre y obtener su imagen y contenido
    const usuario = usuarios.find((u) => u.nombre === usuarioNombre);

    if (usuario) {
      seguirPersona(usuario.nombre, usuario.contenido, usuario.imagen);
    }
  });
});

function seguirPersona(nombre, contenido, imagen) {
  const post = `
    <div class="row border-radius">
      <div class="feed">
        <div class="feed_title">
          <img src="${imagen}" alt="Imagen de perfil">
          <span><b>${nombre}</b> publicó:</span>
        </div>
        <div class="feed_content">
          <p>${contenido}</p>
        </div>
        <div class="feed_footer">
          <ul class="feed_footer_left">
            <li class="hover-orange"><i class="fa fa-heart"></i> Me gusta</li>
            <li class="hover-orange"><i class="fa fa-comment"></i> Comentar</li>
          </ul>
          <ul class="feed_footer_right">
            <li class="hover-orange"><i class="fa fa-share"></i> Compartir</li>
          </ul>
        </div>
      </div>
    </div>`;

  const publishSection = document.querySelector(".publish");
  publishSection.insertAdjacentHTML("afterend", post);
}
