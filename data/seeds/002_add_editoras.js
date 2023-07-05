exports.seed = function (knex) {
  return knex("editoras").del()
    .then(function () {
      return knex("editoras").insert([

        {
          nome: "Nova Tec", cidade: "São Paulo", estado: "São Paulo",
          telefone: "(011)2959-6529", rua: "Rua Luis Antônio dos Santos, 110", cep: "02460-000"
        },
        {
          nome: "Alta Books", cidade: "Rio de Janeiro ", estado: "Rio de Janeiro ",
          telefone: "(21)3995-7512", rua: "Rua Viúva Claudio, 291", cep: "20970-031"
        },
        {
          nome: "Viseu", cidade: "Máringa", estado: "Paraná",
          telefone: "(11)3185-0185", rua: "R. Ver. Basílio Sautchuk 762 Sobreloja Novo - Centro", cep: "87013-190"
        },
        {
          nome: "Panda Books", cidade: "Pinheiros", estado: " São Paulo",
          telefone: "(11)96398-5172", rua: "Rua Henrique Schaumann, 286", cep: " 05413-010 "
        },
        {
          nome: "ALEPH", cidade: "Itaim Bibi ", estado: "São Paulo",
          telefone: "(11)3743-3202", rua: "Rua Tabapuã, 81", cep: "04533-010"
        },
        {
          nome: " Pensamento", cidade: "Ipiranga", estado: "São Paulo",
          telefone: "(11)2066-9000", rua: "Rua Doutor Mario Vicente, 374 ", cep: "04270-001"
        },


      ]);
    });
}
