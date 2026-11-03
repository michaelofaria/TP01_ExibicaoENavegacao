console.log("APP CARREGADO");

const dados = {
    produtos: [

        {
            id: 1,
            nome: "iPhone 17",
            descricao: "Smartphone premium da Apple com armazenamento de 1TB e suporte à tecnologia 5G.",
            conteudo: "O iPhone 17 oferece alto desempenho, excelente qualidade de imagem e integração com o ecossistema Apple.",
            categoria: "Celulares",
            fabricante: "Apple",
            preco: 18900,
            garantia: "12 meses",
            avaliacao: 4.9,
            armazenamento: "1 TB",
            cor: "Roxo",
            destaque: true,
            emEstoque: true,
            imagemPrincipal: "./assets/imagens/Iphone/iPhone-17.jpg",

            fotos: [
                {
                    id: 1,
                    titulo: "Câmeras",
                    imagem: "./assets/imagens/Iphone/iPhone-Camera.jpg"
                },
                {
                    id: 2,
                    titulo: "Design único",
                    imagem: "./assets/imagens/Iphone/iPhone-Completo.jpg"
                },
                {
                    id: 3,
                    titulo: "Tela frontal",
                    imagem: "./assets/imagens/Iphone/iPhone-Modelos.jpg"
                }
            ]
        },

        {
            id: 2,
            nome: "Samsung Galaxy S26",
            descricao: "Smartphone topo de linha da Samsung com recursos avançados de IA.",
            conteudo: "Equipado com câmera de alta resolução, tela AMOLED e ótimo desempenho para produtividade e jogos.",
            categoria: "Celulares",
            fabricante: "Samsung",
            preco: 7020,
            garantia: "12 meses",
            avaliacao: 4.8,
            armazenamento: "256 GB",
            cor: "Titânio Azul",
            destaque: true,
            emEstoque: true,
            imagemPrincipal: "./assets/imagens/samsung/Samsung.jpg",

            fotos: [
                {
                    id: 1,
                    titulo: "Música de qualidade",
                    imagem: "./assets/imagens/samsung/Samsung2.jpg"
                },
                {
                    id: 2,
                    titulo: "Várias cores",
                    imagem: "./assets/imagens/samsung/Samsung4.jpg"
                },
                {
                    id: 3,
                    titulo: "Galeria de Recursos",
                    imagem: "./assets/imagens/samsung/Samsung3.jpg"
                }
            ]
        },

        {
            id: 3,
            nome: "Notebook Dell",
            descricao: "Notebook com processador Intel Core i5 de 13ª geração.",
            conteudo: "Ideal para estudos, trabalho remoto e aplicações corporativas.",
            categoria: "Notebooks",
            fabricante: "Dell",
            preco: 6198,
            garantia: "12 meses",
            avaliacao: 4.7,
            processador: "Intel Core i5 13ª Geração",
            memoria: "16GB",
            armazenamento: "512GB SSD",
            destaque: true,
            emEstoque: true,
            imagemPrincipal: "./assets/imagens/dell/Dell.png",

            fotos: [
                {
                    id: 1,
                    titulo: "Vista Lateral",
                    imagem: "./assets/imagens/dell/Dell01.png"
                },
                {
                    id: 2,
                    titulo: "Vista do alto",
                    imagem: "./assets/imagens/dell/Dell02.png"
                },
                {
                    id: 3,
                    titulo: "Notebook aberto",
                    imagem: "./assets/imagens/dell/Dell03.png"
                }
            ]
        },

        {
            id: 4,
            nome: "Notebook Lenovo",
            descricao: "Notebook Lenovo IdeaPad para produtividade e estudos.",
            conteudo: "Combina desempenho, mobilidade e excelente custo-benefício.",
            categoria: "Notebooks",
            fabricante: "Lenovo",
            preco: 5499,
            garantia: "12 meses",
            avaliacao: 4.6,
            processador: "Intel Core i5",
            memoria: "8GB",
            destaque: false,
            emEstoque: false,
            imagemPrincipal: "./assets/imagens/lenovo/Lenovo.jpg",

            fotos: [
                {
                    id: 1,
                    titulo: "Visão Geral",
                    imagem: "./assets/imagens/lenovo/Lenovo5.jpg"
                },
                {
                    id: 2,
                    titulo: "Tela do Equipamento",
                    imagem: "./imagens/Lenovo.jpg"
                },
                {
                    id: 3,
                    titulo: "Design Externo",
                    imagem: "./imagens/Lenovo.jpg"
                }
            ]
        },

        {
            id: 5,
            nome: "Mouse Gamer Redragon",
            descricao: "Mouse gamer RGB com alta precisão.",
            conteudo: "Possui 8 botões programáveis e sensor de até 12400 DPI. Escolha o modelo que mais define seu lado Gamer.",
            categoria: "Acessórios",
            fabricante: "Redragon",
            preco: 119,
            garantia: "6 meses",
            avaliacao: 4.8,
            dpi: "12400",
            destaque: false,
            emEstoque: true,
            imagemPrincipal: "./assets/imagens/hardware/Mouse3.png",

            fotos: [
                {
                    id: 1,
                    titulo: "Mouse Amarelo",
                    imagem: "./assets/imagens/hardware/Mouse.png"
                },
                {
                    id: 2,
                    titulo: "Mouse Branco",
                    imagem: "./assets/imagens/hardware/Mouse4.png"
                },
                {
                    id: 3,
                    titulo: "Mouse...",
                    imagem: "./assets/imagens/hardware/Mouse2.png"
                }
            ]
        },

        {
            id: 6,
            nome: "Teclado Gamer Rise Mode",
            descricao: "Teclado mecânico RGB para jogos.",
            conteudo: "Equipado com switch Outemu Brown e iluminação RGB. Escolha o modelo que mais define seu lado Gamer.",
            categoria: "Acessórios",
            fabricante: "Rise Mode",
            preco: 281,
            garantia: "12 meses",
            avaliacao: 4.7,
            tipo: "Mecânico",
            switch: "Outemu Brown",
            destaque: false,
            emEstoque: true,
            imagemPrincipal: "./assets/imagens/hardware/Teclado2.png",

            fotos: [
                {
                    id: 1,
                    titulo: "Teclado Completo",
                    imagem: "./assets/imagens/hardware/Teclado4.png"
                },
                {
                    id: 2,
                    titulo: "Teclado ...",
                    imagem: "./imagens/Teclado.png"
                },
                {
                    id: 3,
                    titulo: "Teclado ....",
                    imagem: "./imagens/Teclado.png"
                }
            ]
        },

        {
            id: 7,
            nome: "PlayStation 5",
            descricao: "Console de última geração da Sony.",
            conteudo: "Experiência imersiva com gráficos avançados e SSD de alta velocidade.",
            categoria: "Games",
            fabricante: "Sony",
            preco: 4549,
            garantia: "12 meses",
            avaliacao: 4.9,
            armazenamento: "1TB",
            destaque: true,
            emEstoque: true,
            imagemPrincipal: "./assets/imagens/Play5/PS53.png",

            fotos: [
                {
                    id: 1,
                    titulo: "Console PS5",
                    imagem: "./assets/imagens/Play5/PS5.png"
                },
                {
                    id: 2,
                    titulo: "Controle DualSense",
                    imagem: "./assets/imagens/Play5/PS52.png"
                },
                {
                    id: 3,
                    titulo: "PS",
                    imagem: "./assets/imagens/Play5/PS54.png"
                }
            ]
        },

        {
            id: 8,
            nome: "Xbox Series X",
            descricao: "Console de alto desempenho da Microsoft.",
            conteudo: "Possui armazenamento SSD e suporte para jogos em alta resolução.",
            categoria: "Games",
            fabricante: "Microsoft",
            preco: 4300,
            garantia: "12 meses",
            avaliacao: 4.8,
            armazenamento: "1TB",
            destaque: false,
            emEstoque: false,
            imagemPrincipal: "./assets/imagens/xbox/Xbox2.png",

            fotos: [
                {
                    id: 1,
                    titulo: "Xbox Series X",
                    imagem: "./assets/imagens/xbox/Xbox.png"
                },
                {
                    id: 2,
                    titulo: "Controle Xbox",
                    imagem: "./assets/imagens/xbox/Xbox4.png"
                },
                {
                    id: 3,
                    titulo: "XBOX",
                    imagem: "./assets/imagens/xbox/Xbox3.png"
                }
            ]
        }
    ]
};
const carouselContainer =
    document.getElementById("carousel-container");

    function renderCarousel() {

    if (!carouselContainer) return;

    const destaques = dados.produtos.filter(
        produto => produto.destaque
    );

    carouselContainer.innerHTML = "";

    destaques.forEach((produto, index) => {

        carouselContainer.innerHTML += `
        
        <div class="carousel-item ${index === 0 ? "active" : ""}">
        
            <img
                src="${produto.imagemPrincipal}"
                class="d-block w-100 carousel-img"
                alt="${produto.nome}"
            >

            <div class="carousel-caption bg-dark bg-opacity-75 rounded p-3">

                <h3>${produto.nome}</h3>

                <p>${produto.descricao}</p>

                 <a
                 href="detalhes.html?id=${produto.id}"
                class="btn btn-warning">

                Ver Detalhes

                </a>

            </div>

        </div>

        `;
    });
}

const productList =
    document.getElementById("product-list");
    function renderProducts() {

    if (!productList) return;

    productList.innerHTML = "";

    dados.produtos.forEach(produto => {

        productList.innerHTML += `

        <div class="col-md-6 col-lg-4">

            <div class="card h-100 shadow">

                <img
                    src="${produto.imagemPrincipal}"
                    class="card-img-top"
                    alt="${produto.nome}"
                    style="height: 220px; object-fit: contain; background-color: #fff;"
                >

                <div class="card-body">

                    <h5 class="card-title">
                        ${produto.nome}
                    </h5>

                    <p class="card-text">
                        ${produto.descricao.substring(0, 60)}...
                    </p>

                    <p>
                        <strong>Categoria:</strong>
                        ${produto.categoria}
                    </p>

                    <p>
                        <span class="badge ${
                            produto.emEstoque
                            ? "bg-success"
                            : "bg-danger"
                        }">
                            ${produto.emEstoque
                            ? "Em estoque"
                            : "Indisponível"
                        }
                        </span>
                    </p>

<p>
    <strong>Preço:</strong>
    R$ ${produto.preco.toLocaleString('pt-BR', {
        minimumFractionDigits: 2
    })}
</p>

                </div>

                <div class="card-footer bg-white border-0">

                    <a
                        href="detalhes.html?id=${produto.id}"
                        class="btn btn-primary w-100">

                        Ver Detalhes

                    </a>

                </div>

            </div>

        </div>

        `;
    });

}
function renderDetails() {

    const detalhes =
        document.getElementById("product-details");

    const galeria =
        document.getElementById("galeria-fotos");

    if (!detalhes || !galeria) return;

    const parametros =
        new URLSearchParams(window.location.search);

    const id =
        parseInt(parametros.get("id"));

    const produto =
        dados.produtos.find(
            p => p.id === id
        );

    if (!produto) {

        detalhes.innerHTML = `
            <div class="alert alert-danger">
                Produto não encontrado.
            </div>
        `;

        return;
    }

    detalhes.innerHTML = `

        <div class="card shadow">

            <div class="row g-0">

                <div class="col-md-4">

                    <img
                        src="${produto.imagemPrincipal}"
                        class="img-fluid rounded-start"
                        alt="${produto.nome}">

                </div>

                <div class="col-md-8">

                    <div class="card-body">

                        <h1 class="card-title">
                            ${produto.nome}
                        </h1>

                        <h3 class="text-success">
                            R$ ${produto.preco.toLocaleString(
                                'pt-BR',
                                { minimumFractionDigits: 2 }
                            )}
                        </h3>

                        <p>
                            <strong>Categoria:</strong>
                            ${produto.categoria}
                        </p>

                        <p>
                            <strong>Fabricante:</strong>
                            ${produto.fabricante}
                        </p>

                        <p>
                            <strong>Garantia:</strong>
                            ${produto.garantia}
                        </p>

                        <p>
                            <strong>Avaliação:</strong>
                            ⭐ ${produto.avaliacao}
                        </p>

                        <p>
                            <strong>Status:</strong>

                            <span class="badge ${
                                produto.emEstoque
                                    ? "bg-success"
                                    : "bg-danger"
                            }">

                                ${
                                    produto.emEstoque
                                        ? "Em estoque"
                                        : "Indisponível"
                                }

                            </span>

                        </p>

                        <p>
                            <strong>Descrição:</strong>
                            ${produto.conteudo}
                        </p>

                    </div>

                </div>

            </div>

        </div>

    `;

    produto.fotos.forEach(foto => {

        galeria.innerHTML += `

            <div class="col-md-4">

                <div class="card h-100 shadow">

                    <img
                        src="${foto.imagem}"
                        class="card-img-top"
                        alt="${foto.titulo}"
                        style="height:250px;object-fit:contain;">

                    <div class="card-body text-center">

                        <h5>
                            ${foto.titulo}
                        </h5>

                    </div>

                </div>

            </div>

        `;

    });

}

renderCarousel();
renderProducts();
renderDetails();

const carousel = new bootstrap.Carousel(
    elementoCarousel,
    {
        interval: 3000,
        wrap: true
    }
);

carousel.cycle();