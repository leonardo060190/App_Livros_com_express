exports.seed = function (knex) {
    return knex("livros").del()
        .then(function () {
            return knex("livros").insert([
                {
                    titulo: "Web Design Responsivo", autor: "Mauricio Silva", ano: 2014, preco: 73.0, foto: "https://d1pkzhm5uq4mnt.cloudfront.net/imagens/capas/4e37aef84e7eb21870481f92721651377842bc42.jpg"
                },
                {
                    titulo: "Código limpo: Habilidades práticas do Agile Software", autor: "Robert C. Martin", ano: 2009,
                    preco: 86.58, foto: "https://m.media-amazon.com/images/I/41aHzYSXZkL._SX380_BO1,204,203,200_.jpg"
                },
                {
                    titulo: "Lógica de Programação e Algoritmos com JavaScript", autor: "Edécio Fernando Iepsen", ano: 2022,
                    preco: 72.30, foto: "https://m.media-amazon.com/images/I/41+6FmZ+qRL._SX363_BO1,204,203,200_.jpg"
                },
                {
                    titulo: "Introdução à Linguagem SQL: Abordagem Prática Para Iniciantes", autor: "Thomas Nield", ano: 2016,
                    preco: 41.80, foto: "https://m.media-amazon.com/images/I/51Meg8yMu8L._SX347_BO1,204,203,200_.jpg"
                },
                {
                    titulo: "JavaScript: O Guia Definitivo", autor: "David Flanagan", ano: 2012,
                    preco: 189.75, foto: "https://m.media-amazon.com/images/I/41Mj94QmgtL._SX348_BO1,204,203,200_.jpg"
                },


            ]);
        });
}

