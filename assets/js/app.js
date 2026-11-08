const dados = {
  lugares: [

    {
      id: 1,
      nome: "Praça da Liberdade",
      descricao: "Principal cartão-postal cultural de Belo Horizonte.",
      conteudo: "A Praça da Liberdade reúne importantes centros culturais, jardins históricos e edifícios que representam a história política e cultural de Minas Gerais.",
      categoria: "Turismo Cultural",
      bairro: "Funcionários",
      endereco: "Praça da Liberdade",
      horario: "06h às 22h",
      destaque: true,
      imagemPrincipal: "./assets/imagens/praca-liberdade/praca-liberdade.jpg",

      fotos: [
        {
          id: 1,
          titulo: "Palácio da Liberdade",
          imagem: "./assets/imagens/praca-liberdade/palacio.jpg"
        },
        {
          id: 2,
          titulo: "Jardins da Praça",
          imagem: "./assets/imagens/praca-liberdade/jardins.jpg"
        },
        {
          id: 3,
          titulo: "Circuito Cultural",
          imagem: "./assets/imagens/praca-liberdade/circuito.jpg"
        }
      ]
    },

    {
      id: 2,
      nome: "Mercado Central",
      descricao: "Um dos mercados mais tradicionais do Brasil.",
      conteudo: "Local ideal para experimentar a culinária mineira, comprar artesanato, queijos, doces e conhecer a cultura da cidade.",
      categoria: "Gastronomia",
      bairro: "Centro",
      endereco: "Av. Augusto de Lima, 744",
      horario: "08h às 18h",
      destaque: true,
      imagemPrincipal: "./assets/imagens/mercado-central/mercado.jpg",

      fotos: [
        {
          id: 1,
          titulo: "Corredores Internos",
          imagem: "./assets/imagens/mercado-central/corredores.jpg"
        },
        {
          id: 2,
          titulo: "Queijos Mineiros",
          imagem: "./assets/imagens/mercado-central/queijos.jpg"
        },
        {
          id: 3,
          titulo: "Artesanato Regional",
          imagem: "./assets/imagens/mercado-central/artesanato.jpg"
        }
      ]
    },

    {
      id: 3,
      nome: "Lagoa da Pampulha",
      descricao: "Um dos maiores símbolos de Belo Horizonte.",
      conteudo: "Conjunto arquitetônico projetado por Oscar Niemeyer com paisagens, museus, parques e a famosa Igreja São Francisco de Assis.",
      categoria: "Patrimônio Cultural",
      bairro: "Pampulha",
      endereco: "Região da Pampulha",
      horario: "Acesso Livre",
      destaque: true,
      imagemPrincipal: "./assets/imagens/pampulha/pampulha.jpg",

      fotos: [
        {
          id: 1,
          titulo: "Igreja São Francisco",
          imagem: "./assets/imagens/pampulha/igreja.jpg"
        },
        {
          id: 2,
          titulo: "Orla da Lagoa",
          imagem: "./assets/imagens/pampulha/orla.jpg"
        },
        {
          id: 3,
          titulo: "Vista Panorâmica",
          imagem: "./assets/imagens/pampulha/panoramica.jpg"
        }
      ]
    },

    {
      id: 4,
      nome: "Mineirão",
      descricao: "Maior estádio de Minas Gerais.",
      conteudo: "Palco de grandes partidas de futebol, shows nacionais e internacionais, além de oferecer visitas guiadas para turistas.",
      categoria: "Esporte",
      bairro: "Pampulha",
      endereco: "Av. Antônio Abrahão Caram, 1001",
      horario: "09h às 17h",
      destaque: true,
      imagemPrincipal: "./assets/imagens/mineirao/mineirao.jpg",

      fotos: [
        {
          id: 1,
          titulo: "Museu do Futebol",
          imagem: "./assets/imagens/mineirao/museu.jpg"
        },
        {
          id: 2,
          titulo: "Arquibancadas",
          imagem: "./assets/imagens/mineirao/arquibancada.jpg"
        },
        {
          id: 3,
          titulo: "Vista Aérea",
          imagem: "./assets/imagens/mineirao/aerea.jpg"
        }
      ]
    },

    {
      id: 5,
      nome: "Parque Municipal",
      descricao: "Área verde localizada no centro da cidade.",
      conteudo: "Possui lagos, áreas para caminhada, brinquedos, monumentos históricos e muito contato com a natureza.",
      categoria: "Lazer",
      bairro: "Centro",
      endereco: "Av. Afonso Pena",
      horario: "06h às 18h",
      destaque: false,
      imagemPrincipal: "./assets/imagens/parque-municipal/parque.jpg",

      fotos: [
        {
          id: 1,
          titulo: "Lago Principal",
          imagem: "./assets/imagens/parque-municipal/lago.jpg"
        },
        {
          id: 2,
          titulo: "Alamedas",
          imagem: "./assets/imagens/parque-municipal/alameda.jpg"
        },
        {
          id: 3,
          titulo: "Área Verde",
          imagem: "./assets/imagens/parque-municipal/verde.jpg"
        }
      ]
    },

    {
      id: 6,
      nome: "Mercado Novo",
      descricao: "Centro gastronômico e cultural moderno.",
      conteudo: "Espaço revitalizado que reúne bares, restaurantes, cafeterias e diversas experiências culturais.",
      categoria: "Gastronomia",
      bairro: "Centro",
      endereco: "Av. Olegário Maciel, 742",
      horario: "10h às 23h",
      destaque: false,
      imagemPrincipal: "./assets/imagens/mercado-novo/mercado-novo.jpg",

      fotos: [
        {
          id: 1,
          titulo: "Área Gastronômica",
          imagem: "./assets/imagens/mercado-novo/gastronomia.jpg"
        },
        {
          id: 2,
          titulo: "Lojas Criativas",
          imagem: "./assets/imagens/mercado-novo/lojas.jpg"
        },
        {
          id: 3,
          titulo: "Eventos Culturais",
          imagem: "./assets/imagens/mercado-novo/eventos.jpg"
        }
      ]
    },

    {
      id: 7,
      nome: "Feira Hippie",
      descricao: "Maior feira de artesanato da América Latina.",
      conteudo: "Realizada aos domingos na Avenida Afonso Pena, reúne milhares de expositores e visitantes.",
      categoria: "Artesanato",
      bairro: "Centro",
      endereco: "Avenida Afonso Pena",
      horario: "08h às 14h",
      destaque: false,
      imagemPrincipal: "./assets/imagens/feira-hippie/feira.jpg",

      fotos: [
        {
          id: 1,
          titulo: "Artesanato Mineiro",
          imagem: "./assets/imagens/feira-hippie/artesanato.jpg"
        },
        {
          id: 2,
          titulo: "Barracas",
          imagem: "./assets/imagens/feira-hippie/barracas.jpg"
        },
        {
          id: 3,
          titulo: "Produtos Regionais",
          imagem: "./assets/imagens/feira-hippie/produtos.jpg"
        }
      ]
    },

    {
      id: 8,
      nome: "Mirante das Mangabeiras",
      descricao: "Uma das vistas mais bonitas da cidade.",
      conteudo: "Localizado na Serra do Curral, proporciona uma visão panorâmica de Belo Horizonte, especialmente ao pôr do sol.",
      categoria: "Natureza",
      bairro: "Mangabeiras",
      endereco: "Parque das Mangabeiras",
      horario: "08h às 20h",
      destaque: false,
      imagemPrincipal: "./assets/imagens/mirante/mirante.jpg",

      fotos: [
        {
          id: 1,
          titulo: "Vista da Cidade",
          imagem: "./assets/imagens/mirante/cidade.jpg"
        },
        {
          id: 2,
          titulo: "Pôr do Sol",
          imagem: "./assets/imagens/mirante/por-do-sol.jpg"
        },
        {
          id: 3,
          titulo: "Serra do Curral",
          imagem: "./assets/imagens/mirante/serra.jpg"
        }
      ]
    }

  ]
};