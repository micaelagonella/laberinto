const lista = [
{
    titulo: "Jorge Luis",
    descripcion: "",
    imagen: "../media/simbologia/luis.webp"
},
{
    titulo: "Jorge Luis Borges",
    descripcion: "“Hay algo de temible en esa duplicación visual de la realidad” decía sobre los espejos el genial escritor. Y por su fijación con los espejos, es que Randoll Coate espejó la palabra 'Borges' dentro del Laberinto.",
    imagen: "../media/simbologia/borges.webp"
},
{
    titulo: "86",
    descripcion: "Los años que vivió Borges coinciden con el año en que falleció en Ginebra. Este número que lo representa, está allí escondido a la vista de todos: el 86.",
    imagen: "../media/simbologia/86.webp"
},
{
    titulo: "María Kodama",
    descripcion: "Escritora, compañera de vida de Borges, contrajeron matrimonio en abril de 1986, pocos meses antes de la muerte del gran escritor.",
    imagen: "../media/simbologia/kodama.webp"
},
{
    titulo: "El Tiempo",
    descripcion: "'El tiempo es infinito y paralelo' decía Jorge Luis Borges. Aquí vemos ese pensamiento representado por dos relojes de arena y el símbolo del Infinito que no tiene principio ni fin.",
    imagen: "../media/simbologia/reloj-arena.webp"
},
{
    titulo: "El Tiempo Infinito",
    descripcion: "'El tiempo es infinito y paralelo' decía Jorge Luis Borges. Aquí vemos ese pensamiento representado por dos relojes de arena y el símbolo del Infinito que no tiene principio ni fin.",
    imagen: "../media/simbologia/infinito.webp"
},
{
    titulo: "Libro Abierto",
    descripcion: "Siempre se dice que el Laberinto es un “Libro abierto al Universo”. Aquí la prueba. El marco de la obra de arte no es otra cosa que un libro gigante que contiene en sí la vida y los símbolos de Borges.",
    imagen: "../media/simbologia/libro-abierto.webp"
},
{
    titulo: "Bastón",
    descripcion: "Su bastón, que en tantas caminatas lo acompañó.",
    imagen: "../media/simbologia/baston.webp"
},
{
    titulo: "Interrogación",
    descripcion: "El signo de interrogación, símbolo de la perplejidad, de la duda, de la curiosidad.",
    imagen: "../media/simbologia/interrogacion.webp"
},
];

function renderizarElementos(lista) {
    const contenedorCards = document.querySelector('.simbol');
    console.log(contenedorCards);
    let contador = 0;
    
    contenedorCards.addEventListener('click',()=>{

        
        
            contenedorCards.innerHTML =
                `<div class="col-lg-6 col-md-12 col-sm-12 card-imagen">
                  <img id="image" src="${lista[contador].imagen}" alt="interrogacion">
                </div>
                <div class="col-lg-6 col-md-12 col-sm-12 card-descripcion">
                  <h2 id="fontTitulo">${lista[contador].titulo}</h2>
                  <p>${lista[contador].descripcion}</p>
                  <spam>Hacé click para continuar</spam>
                </div>`;
    
                contador++;
        
    })
    
    //  <i class='fa fa-heart ${item.like ? 'favorito' : ''}'></i>

    // function getFavorito(item) {
    //     if (item.like) {
    //         return 'favorito';
    //     }

    //     return '';
    // }
}

renderizarElementos(lista);


