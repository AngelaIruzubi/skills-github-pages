// Datos de películas
const peliculas = {
  "Nausicaä del Valle del Viento": {
      sinopsis: "En un futuro post-apocalíptico, una joven princesa intenta salvar su mundo.",
      reparto: "Algunos actores de voz incluyen a: Mahito Tsujimura, Sumi Shimamoto.",
      imagen: "imagenes/Nusica.jpg" // Ruta de la imagen
      
  },
  "El castillo en el cielo": {
      sinopsis: "Dos niños se embarcan en una aventura para encontrar un castillo flotante.",
      reparto: "Actores destacados: Anna Paquin, James Van Der Beek.",
      imagen: "imagenes/Castillo.jpg"
  },
  "La tumba de las luciernagas": {
      sinopsis: "Una historia conmovedora sobre dos hermanos tratando de sobrevivir en la Japón de la Segunda Guerra Mundial.",
      reparto: "Actores destacados: Tsutomu Tatsumi, Ayano Shiraishi.",
      imagen: "imagenes/Luciernagas.jpg"
  },
  "Mi vecino Totoro": {
      sinopsis: "Dos niñas hacen amistad con una criatura mágica llamada Totoro.",
      reparto: "Actores destacados: Dakota Fanning, Elle Fanning.",
      imagen: "imagenes/Totoro.jpg"
  },
  "Nicky, la aprendiz de bruja": {
      sinopsis: "Una joven bruja se muda a una nueva ciudad y comienza su propio negocio de entrega.",
      reparto: "Actores destacados: Kirsten Dunst, Phil Hartman.",
      imagen: "imagenes/Bruja.jpg"
  },
  "Recuerdos del ayer": {
      sinopsis: "Una niña recuerda su infancia y las aventuras que tuvo.",
      reparto: "Actores destacados: Kiki's Delivery Service, Jiji.",
      imagen: "imagenes/Ayer.jpg"
  },
  "Porco Rosso": {
      sinopsis: "Un piloto de hidroavión se convierte en un cerdo en un mundo de piratas aéreos.",
      reparto: "Actores destacados: Michael Keaton, Cary Elwes.",
      imagen: "imagenes/Porco.jpg"
  },
  "Pompoko": {
      sinopsis: "Un grupo de tanukis lucha para proteger su hogar de los desarrolladores urbanos.",
      reparto: "Actores destacados: Sōsuke Takaoka, Kōichi Yamadera.",
      imagen: "imagenes/Pompoko.jpg"
  },
  "La princesa Mononoke": {
      sinopsis: "Una joven princesa lucha para proteger su hogar de fuerzas destructivas.",
      reparto: "Actores destacados: Billy Crudup, Claire Danes.",
      imagen: "imagenes/Mononoke.jpg"
  },
  "Mis vecinos los Yamada": {
      sinopsis: "Las aventuras de una familia japonesa moderna.",
      reparto: "Actores destacados: Kitarō Kōsaka, Yukiji Asaoka.",
      imagen: "imagenes/Yamada.jpg"
  },
  "El viaje de Chihiro": {
      sinopsis: "Una niña se encuentra atrapada en un mundo espiritual y debe encontrar la forma de volver a sus padres.",
      reparto: "Actores destacados: Rumi Hiiragi, Miyu Irino.",
      imagen: "imagenes/Chihiro.jpg"
  },
  "Castillo Ambulante": {
      sinopsis: "Una joven es transformada en una anciana por una bruja y busca ayuda de un mago.",
      reparto: "Actores destacados: Jean Simmons, Christian Bale.",
      imagen: "imagenes/Ambulante.jpg"
  },
  "Ponyo en el acantilado": {
      sinopsis: "Una pez dorado se convierte en humana tras hacer un amigo.",
      reparto: "Actores destacados: Noah Cyrus, Frankie Jonas.",
      imagen: "imagenes/Ponyo.jpg"
  },
  "El viento se levanta": {
      sinopsis: "La vida de un ingeniero aeronáutico en el periodo entre guerras.",
      reparto: "Actores destacados: Joseph Gordon-Levitt, Emily Blunt.",
      imagen: "imagenes/Viento.jpg"
  },
  "El cuento de la princesa Kaguya": {
      sinopsis: "La historia de una princesa que viene de la luna.",
      reparto: "Actores destacados: Aki Asakura, Kengo Kora.",
      imagen: "imagenes/Kaguya.jpg"
  },
  "El chico y la garza": {
      sinopsis: "Un niño se encuentra en un mundo mágico y hace amistad con una garza.",
      reparto: "Actores destacados: Masaki Suda, Nana Mori.",
      imagen: "imagenes/Garza.jpg"
  },
};

// Función para mostrar información de la película seleccionada
function mostrarBotones() {
  const select = document.getElementById("peliculas");
  const peliculaSeleccionada = select.value;

  const info = peliculas[peliculaSeleccionada];

  document.getElementById("tituloPelicula").innerText = peliculaSeleccionada;
  document.getElementById("tituloPelicula").style.display = "block";

  document.getElementById("tituloSinopsis").style.display = "block";
  document.getElementById("sinopsis").innerText = info.sinopsis;

  document.getElementById("tituloReparto").style.display = "block";
  document.getElementById("reparto").innerText = info.reparto;

  const imagen = document.getElementById("imagenPelicula");
  imagen.src = info.imagen; // Establecer la ruta de la imagen
  imagen.style.display = "block"; // Mostrar la imagen
}
function scrollToHistoria() {
  const historiaSection = document.getElementById("Historia");
  if (historiaSection) {
      historiaSection.scrollIntoView({ behavior: "smooth" });
  }
}




