const dados = {
    filmes: [
        {
            id: 1,
            titulo: "Interestelar",
            descricao: "Uma equipe de astronautas viaja além da galáxia em busca de um novo lar para a humanidade.",
            sinopse: "Com a Terra enfrentando uma grave crise alimentar, o ex-piloto da NASA Cooper é recrutado para liderar uma missão espacial através de um buraco de minhoca próximo a Saturno. Deixando para trás sua filha Murph, ele parte em uma viagem que desafia as leis do tempo e da gravidade em busca de planetas habitáveis para salvar a humanidade.",
            genero: "Ficção Científica",
            diretor: "Christopher Nolan",
            ano: 2014,
            duracao: "169 min",
            nota: "8.7",
            destaque: true,
            imagemPrincipal: "https://upload.wikimedia.org/wikipedia/en/b/bc/Interstellar_film_poster.jpg",
            fotos: [
                { titulo: "Nave Endurance", imagem: "https://upload.wikimedia.org/wikipedia/en/a/af/Interstellar_film_-_Endurance_spacecraft.jpg" },
                { titulo: "Buraco Negro Gargântua", imagem: "https://upload.wikimedia.org/wikipedia/en/1/18/Black_hole_Interstellar.png" },
                { titulo: "Tempestade de poeira", imagem: "https://upload.wikimedia.org/wikipedia/commons/d/d2/Dust_storm_approaching_Stratford%2C_Texas.jpg" }
            ]
        },
        {
            id: 2,
            titulo: "O Poderoso Chefão",
            descricao: "A saga épica da família mafiosa Corleone em Nova York.",
            sinopse: "Vito Corleone é o patriarca de uma das famílias mafiosas mais poderosas de Nova York. Quando recusa apoio a um traficante rival, sua família é arrastada para uma guerra brutal. Seu filho caçula Michael, que tentava se manter longe do crime organizado, é forçado a assumir o negócio da família após um atentado contra o pai.",
            genero: "Drama / Crime",
            diretor: "Francis Ford Coppola",
            ano: 1972,
            duracao: "175 min",
            nota: "9.2",
            destaque: true,
            imagemPrincipal: "https://upload.wikimedia.org/wikipedia/en/1/1c/Godfather_ver1.jpg",
            fotos: [
                { titulo: "Al Pacino e Marlon Brando", imagem: "https://upload.wikimedia.org/wikipedia/en/b/b7/TheGodfatherAlPacinoMarlonBrando.jpg" },
                { titulo: "Packard 1941 do filme", imagem: "https://upload.wikimedia.org/wikipedia/commons/4/47/Vintage_Grill_%26_Car_Museum_May_2017_10_%281941_Packard_Custom_Super_Eight_One-Eighty_from_The_Godfather%29.jpg" }
            ]
        },
        {
            id: 3,
            titulo: "Joker",
            descricao: "A perturbadora origem do vilão mais icônico do universo DC.",
            sinopse: "Arthur Fleck é um comediante fracassado e perturbado mentalmente que vive em Gotham City. Após uma série de eventos traumáticos e humilhações, Arthur começa a perder o contato com a realidade e se transforma no Coringa, um agente do caos que inspira uma revolta violenta na cidade.",
            genero: "Suspense / Drama",
            diretor: "Todd Phillips",
            ano: 2019,
            duracao: "122 min",
            nota: "8.5",
            destaque: true,
            imagemPrincipal: "https://upload.wikimedia.org/wikipedia/en/e/e1/Joker_%282019_film%29_poster.jpg",
            fotos: [
                { titulo: "Metrô usado nas filmagens", imagem: "https://upload.wikimedia.org/wikipedia/commons/1/13/R32_C_at_34_Street_Penn_Station_with_0_train_rollsign_from_Joker_filming%2C_March_2019.jpg" },
                { titulo: "Teatro Paramount - locação", imagem: "https://upload.wikimedia.org/wikipedia/commons/3/3f/Paramount_Theatre_Newark_2023_jeh.jpg" }
            ]
        },
        {
            id: 4,
            titulo: "Matrix",
            descricao: "Um hacker descobre que o mundo que conhece é uma simulação controlada por máquinas.",
            sinopse: "Thomas Anderson leva uma vida dupla como programador diurno e hacker noturno chamado Neo. Ao ser contactado por Morpheus, descobre que o mundo é uma simulação computacional criada por máquinas inteligentes. Neo então se junta à resistência para libertar a humanidade da Matrix e enfrentar o temível Agente Smith.",
            genero: "Ficção Científica / Ação",
            diretor: "Lana e Lilly Wachowski",
            ano: 1999,
            duracao: "136 min",
            nota: "8.7",
            destaque: true,
            imagemPrincipal: "https://upload.wikimedia.org/wikipedia/en/d/db/The_Matrix.png",
            fotos: [
                { titulo: "Morpheus oferece as pílulas", imagem: "https://upload.wikimedia.org/wikipedia/en/e/e3/Morpheus_offering_pills.jpg" },
                { titulo: "Ponte das filmagens em Sydney", imagem: "https://upload.wikimedia.org/wikipedia/commons/8/86/Campbell_Street_train_bridge_at_intersection_of_Elizabeth_Street.jpg" },
                { titulo: "Keanu Reeves (Neo)", imagem: "https://upload.wikimedia.org/wikipedia/commons/5/59/Keanu_Reeves_2019_%28cropped%29.jpg" }
            ]
        },
        {
            id: 5,
            titulo: "Titanic",
            descricao: "Uma história de amor no naufrágio do navio mais famoso do século XX.",
            sinopse: "Jack Dawson, um artista pobre, e Rose DeWitt Bukater, uma jovem da alta sociedade, se apaixonam a bordo do RMS Titanic em sua viagem inaugural em 1912. Quando o navio colide com um iceberg e começa a afundar, seu amor é posto à prova em uma luta desesperada pela sobrevivência.",
            genero: "Romance / Drama",
            diretor: "James Cameron",
            ano: 1997,
            duracao: "194 min",
            nota: "7.9",
            destaque: false,
            imagemPrincipal: "https://upload.wikimedia.org/wikipedia/en/1/18/Titanic_%281997_film%29_poster.png",
            fotos: [
                { titulo: "Réplica do Titanic nas filmagens", imagem: "https://upload.wikimedia.org/wikipedia/en/d/d4/TitanicBaja.jpg" },
                { titulo: "Cena do navio se partindo", imagem: "https://upload.wikimedia.org/wikipedia/en/b/bb/Titanic_breaks_in_half.jpg" }
            ]
        },
        {
            id: 6,
            titulo: "Vingadores: Ultimato",
            descricao: "Os heróis da Marvel se unem em uma batalha final para reverter o estalo do Thanos.",
            sinopse: "Após Thanos eliminar metade de todos os seres vivos com um estalo de dedos, os Vingadores sobreviventes se reúnem para desfazer a catástrofe. Com uma ousada estratégia envolvendo viagem no tempo, eles embarcam em uma missão para recuperar as Joias do Infinito e restaurar o universo.",
            genero: "Ação / Aventura",
            diretor: "Anthony e Joe Russo",
            ano: 2019,
            duracao: "181 min",
            nota: "8.4",
            destaque: false,
            imagemPrincipal: "https://upload.wikimedia.org/wikipedia/en/0/0d/Avengers_Endgame_poster.jpg",
            fotos: [
                { titulo: "Robert Downey Jr. (Homem de Ferro)", imagem: "https://upload.wikimedia.org/wikipedia/commons/9/94/Robert_Downey_Jr_2014_Comic_Con_%28cropped%29.jpg" },
                { titulo: "Chris Evans (Capitão América)", imagem: "https://upload.wikimedia.org/wikipedia/commons/2/25/Chris_Evans_SDCC_2014.jpg" },
                { titulo: "Irmãos Russo - Diretores", imagem: "https://upload.wikimedia.org/wikipedia/commons/7/7d/Anthony_and_Joe_Russo_by_Gage_Skidmore.jpg" }
            ]
        },
        {
            id: 7,
            titulo: "Parasita",
            descricao: "Uma família pobre infiltra-se na vida de uma família rica com consequências inesperadas.",
            sinopse: "A família Kim vive na miséria em um porão de Seul. Quando o filho Ki-woo consegue um emprego como tutor na mansão da rica família Park, os membros da família Kim começam a se infiltrar na casa dos Park um a um. Mas um segredo enterrado sob a mansão ameaça destruir tudo.",
            genero: "Thriller / Drama",
            diretor: "Bong Joon-ho",
            ano: 2019,
            duracao: "132 min",
            nota: "8.5",
            destaque: false,
            imagemPrincipal: "https://upload.wikimedia.org/wikipedia/en/5/53/Parasite_%282019_film%29.png",
            fotos: [
                { titulo: "Locação das filmagens", imagem: "https://upload.wikimedia.org/wikipedia/commons/b/b7/Parasite_filming_location.jpg" },
                { titulo: "A mansão - antes e depois do VFX", imagem: "https://upload.wikimedia.org/wikipedia/en/e/ee/Parasite_house_before_and_after_VFX.jpg" },
                { titulo: "Bong Joon-ho e elenco", imagem: "https://upload.wikimedia.org/wikipedia/commons/e/e1/Parasite_%28film%29_director_and_cast_in_2019.jpg" }
            ]
        },
        {
            id: 8,
            titulo: "O Senhor dos Anéis: A Sociedade do Anel",
            descricao: "O hobbit Frodo herda um anel mágico e parte em jornada para destruí-lo.",
            sinopse: "O jovem hobbit Frodo Bolseiro herda o Um Anel, forjado pelo Senhor das Trevas Sauron. Para salvar a Terra-Média, ele deve levar o anel até as Fendas da Perdição para destruí-lo. Frodo parte com uma companhia de aliados — elfos, anões, humanos e hobbits — enquanto as forças do mal os perseguem sem descanso.",
            genero: "Fantasia / Aventura",
            diretor: "Peter Jackson",
            ano: 2001,
            duracao: "178 min",
            nota: "8.8",
            destaque: false,
            imagemPrincipal: "https://upload.wikimedia.org/wikipedia/en/f/fb/Lord_Rings_Fellowship_Ring.jpg",
            fotos: [
                { titulo: "A Sociedade do Anel", imagem: "https://upload.wikimedia.org/wikipedia/en/4/40/Fellowship.JPG" },
                { titulo: "Arwen e os Nazgûl", imagem: "https://upload.wikimedia.org/wikipedia/en/b/b5/Arwen_and_Ringwraiths.jpg" },
                { titulo: "Rio Arrow - locação na Nova Zelândia", imagem: "https://upload.wikimedia.org/wikipedia/commons/b/b5/Arrow_River.JPG" }
            ]
        }
    ]
};


var indiceSlide = 0;

var filmesDestaque = [];


function criarSlider() {
    filmesDestaque = [];
    for (var i = 0; i < dados.filmes.length; i++) {
        if (dados.filmes[i].destaque === true) {
            filmesDestaque.push(dados.filmes[i]);
        }
    }

    var containerSlider = document.getElementById("area-slider");
    if (!containerSlider) return;

    var html = '<div class="slider-wrapper">';

    html += '<div class="slides-container" id="slides-container">';
    for (var i = 0; i < filmesDestaque.length; i++) {
        var filme = filmesDestaque[i];
        html += '<div class="slide">';
        html += '<div class="slide-bg">';
        html += '<img src="' + filme.imagemPrincipal + '" alt="' + filme.titulo + '" class="slide-imagem" onerror="this.style.opacity=\'0\'">';
        html += '</div>';
        html += '<div class="slide-overlay">';
        html += '<div class="slide-info">';
        html += '<h2 class="slide-titulo">' + filme.titulo + '</h2>';
        html += '<p class="slide-descricao">' + filme.descricao + '</p>';
        html += '<a href="detalhes.html?id=' + filme.id + '" class="btn-ver-mais">Ver Detalhes</a>';
        html += '</div>';
        html += '</div>';
        html += '</div>';
    }
    html += '</div>';

    html += '<button class="btn-slider btn-anterior" onclick="slideAnterior()">&#9664; Anterior</button>';
    html += '<button class="btn-slider btn-proximo" onclick="proximoSlide()">Próximo &#9654;</button>';

    html += '<div class="indicadores" id="indicadores"></div>';

    html += '</div>';

    containerSlider.innerHTML = html;

    atualizarSlider();
}


function atualizarSlider() {
    var slides = document.querySelectorAll(".slide");

    for (var i = 0; i < slides.length; i++) {
        slides[i].classList.remove("ativo");
    }

    if (slides[indiceSlide]) {
        slides[indiceSlide].classList.add("ativo");
    }

    atualizarIndicadores();
}


function atualizarIndicadores() {
    var container = document.getElementById("indicadores");
    if (!container) return;

    var html = "";
    for (var i = 0; i < filmesDestaque.length; i++) {
        if (i === indiceSlide) {
            html += '<span class="indicador ativo" onclick="irParaSlide(' + i + ')"></span>';
        } else {
            html += '<span class="indicador" onclick="irParaSlide(' + i + ')"></span>';
        }
    }
    container.innerHTML = html;
}


function irParaSlide(index) {
    indiceSlide = index;
    atualizarSlider();
}


function proximoSlide() {
    indiceSlide++;
    if (indiceSlide >= filmesDestaque.length) {
        indiceSlide = 0;
    }
    atualizarSlider();
}


function slideAnterior() {
    indiceSlide--;
    if (indiceSlide < 0) {
        indiceSlide = filmesDestaque.length - 1;
    }
    atualizarSlider();
}


function criarCards() {
    var container = document.getElementById("area-filmes");
    if (!container) return;

    var html = '<div class="filmes-grid">';

    for (var i = 0; i < dados.filmes.length; i++) {
        var filme = dados.filmes[i];

        html += '<a href="detalhes.html?id=' + filme.id + '" class="filme-card">';
        html += '<div class="card-imagem-container">';
        html += '<img src="' + filme.imagemPrincipal + '" alt="' + filme.titulo + '" class="card-imagem" onerror="this.style.opacity=\'0\'">';
        html += '<div class="card-titulo-placeholder">' + filme.titulo + '</div>';
        html += '</div>';
        html += '<div class="card-info">';
        html += '<h3 class="card-nome">' + filme.titulo + '</h3>';
        html += '<p class="card-descricao">' + filme.descricao + '</p>';
        html += '<div class="card-rodape">';
        html += '<span class="card-genero">' + filme.genero + '</span>';
        html += '<span class="card-nota">&#9733; ' + filme.nota + '</span>';
        html += '</div>';
        html += '</div>';
        html += '</a>';
    }

    html += '</div>';

    container.innerHTML = html;
}


function filtrarFilmes(texto) {
    var cards = document.querySelectorAll(".filme-card");
    var textoBusca = texto.toLowerCase();

    for (var i = 0; i < cards.length; i++) {
        var tituloCard = cards[i].querySelector(".card-nome").textContent.toLowerCase();

        if (tituloCard.indexOf(textoBusca) !== -1) {
            cards[i].style.display = "block";
        } else {
            cards[i].style.display = "none";
        }
    }
}


function mostrarDetalhes() {
    var params = new URLSearchParams(window.location.search);
    var id = parseInt(params.get("id"));

    var filme = null;
    for (var i = 0; i < dados.filmes.length; i++) {
        if (dados.filmes[i].id === id) {
            filme = dados.filmes[i];
            break;
        }
    }

    if (filme === null) {
        var container = document.getElementById("area-detalhes");
        container.innerHTML = '<p class="erro-msg">Filme não encontrado. <a href="index.html">Voltar ao início</a></p>';
        return;
    }

    document.title = "LucasFlix - " + filme.titulo;

    var container = document.getElementById("area-detalhes");
    var html = '<div class="detalhe-container">';

    html += '<div class="detalhe-imagem-container">';
    html += '<img src="' + filme.imagemPrincipal + '" alt="' + filme.titulo + '" class="detalhe-imagem" onerror="this.style.opacity=\'0\'">';
    html += '<div class="detalhe-imagem-placeholder">' + filme.titulo + '</div>';
    html += '</div>';

    html += '<div class="detalhe-info">';
    html += '<h1 class="detalhe-titulo">' + filme.titulo + '</h1>';
    html += '<p class="detalhe-sinopse">' + filme.sinopse + '</p>';

    html += '<ul class="detalhe-lista">';
    html += '<li><span class="detalhe-label">Diretor</span><span>' + filme.diretor + '</span></li>';
    html += '<li><span class="detalhe-label">Gênero</span><span>' + filme.genero + '</span></li>';
    html += '<li><span class="detalhe-label">Ano</span><span>' + filme.ano + '</span></li>';
    html += '<li><span class="detalhe-label">Duração</span><span>' + filme.duracao + '</span></li>';
    html += '<li><span class="detalhe-label">Nota IMDb</span><span class="detalhe-nota">&#9733; ' + filme.nota + '</span></li>';
    html += '</ul>';

    html += '</div>';
    html += '</div>';

    container.innerHTML = html;

    criarGaleria(filme.fotos);
}


function criarGaleria(fotos) {
    var container = document.getElementById("area-galeria");
    if (!container) return;

    if (!fotos || fotos.length === 0) {
        container.innerHTML = '<p class="sem-fotos">Nenhuma foto disponível para este filme.</p>';
        return;
    }

    var html = '<div class="galeria-scroll-wrapper">';
    html += '<div class="galeria-scroll">';

    for (var i = 0; i < fotos.length; i++) {
        var foto = fotos[i];
        html += '<div class="galeria-item">';
        html += '<div class="galeria-imagem-container">';
        html += '<img src="' + foto.imagem + '" alt="' + foto.titulo + '" class="galeria-imagem" onerror="this.style.opacity=\'0\'">';
        html += '<div class="galeria-placeholder">' + foto.titulo + '</div>';
        html += '</div>';
        html += '<p class="galeria-titulo">' + foto.titulo + '</p>';
        html += '</div>';
    }

    html += '</div>';
    html += '<button class="galeria-btn-proximo" onclick="scrollGaleria()">&#9654;</button>';
    html += '</div>';

    container.innerHTML = html;
}

function scrollGaleria() {
    var scroll = document.querySelector(".galeria-scroll");
    if (scroll) {
        scroll.scrollLeft += 320;
    }
}


window.onload = function () {

    if (document.getElementById("area-slider")) {
        criarSlider();
    }

    if (document.getElementById("area-filmes")) {
        criarCards();

        var campoBuscaCabecalho = document.getElementById("campo-busca");
        var campoBuscaFilmes = document.getElementById("campo-busca-filmes");

        if (campoBuscaCabecalho) {
            campoBuscaCabecalho.addEventListener("input", function () {
                filtrarFilmes(this.value);
                if (campoBuscaFilmes) campoBuscaFilmes.value = this.value;
            });
        }

        if (campoBuscaFilmes) {
            campoBuscaFilmes.addEventListener("input", function () {
                filtrarFilmes(this.value);
                if (campoBuscaCabecalho) campoBuscaCabecalho.value = this.value;
            });
        }
    }

    if (document.getElementById("area-detalhes")) {
        mostrarDetalhes();
    }
};
