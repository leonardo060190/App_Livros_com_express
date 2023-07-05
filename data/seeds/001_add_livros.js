exports.seed = function (knex) {
    return knex("livros").del()
        .then(function () {
            return knex("livros").insert([
                {
                    titulo: "Web Design Responsivo", autor: "Mauricio Silva", ano: 2014, preco: 73.0, foto: "https://d1pkzhm5uq4mnt.cloudfront.net/imagens/capas/4e37aef84e7eb21870481f92721651377842bc42.jpg"
                },
                {
                    titulo: " Lógica de programação e algoritmos com JavaScript ", autor: " Edécio Fernando Iepsen ", ano: 2022,
                    preco: 72.30, foto: "https://m.media-amazon.com/images/I/41+6FmZ+qRL._SX363_BO1,204,203,200_.jpg"
                },
                {
                    titulo: " Estruturas de Dados e Algoritmos com JavaScript ", autor: " Loiane Groner  ", ano: 2019,
                    preco: 80.80, foto: "https://m.media-amazon.com/images/I/41QGA9y1LZL._SX357_BO1,204,203,200_.jpg"
                },
                {
                    titulo: " Código limpo: Habilidades práticas do Agile Software ", autor: " Robert C. Martin", ano: 2009,
                    preco: 86.58, foto: "https://m.media-amazon.com/images/I/41aHzYSXZkL._SX380_BO1,204,203,200_.jpg"
                },
                {
                    titulo: " Introdução à Linguagem SQL: Abordagem Prática Para Iniciantes ", autor: "Thomas Nield", ano: 2016,
                    preco: 41.80, foto: "https://m.media-amazon.com/images/I/51Meg8yMu8L._SX347_BO1,204,203,200_.jpg"
                },



            ]);
        });
}

