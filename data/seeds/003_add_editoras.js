exports.seed = function (knex) {
  return knex("editoras").del()
    .then(function () {
      return knex("editoras").insert([
        {
          nome: "Companhia da Letras", cidade: "São Bernardo do Campo", estado: "São Paulo", telefone: "(49)95666-6656", rua: "Rua Matias", cep: "88898996"
        },
        {
          nome: "Aleph", cidade: "São Bernardo do Campo", estado: "São Paulo", telefone: "(59)66555-6699", rua: "Rua Santos", cep:"88897899" 
        },

        {
          nome: "Editora Rocco", cidade: "Petrópolis", estado: "Rio de Janeiro", telefone: "(59)95696-6698", rua: "Rua Matos", cep: "99699999"
        },

        {
          nome: "Harper Collins", cidade: "Guarulhos", estado: "São Paulo", telefone: "(49)95689-3325", rua: "Rua Cariris", cep: "8878556"
        },

        {
          nome: "Editora Arqueiro", cidade: "São Paulo", estado: "São Paulo", telefone: "(48)94587-6659", rua: "Rua Marianos", cep: "88896332"
        },

      ]);
    });
}
