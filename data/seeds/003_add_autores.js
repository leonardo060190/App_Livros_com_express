exports.seed = function (knex) {
  return knex("autores").del()
    .then(function () {
      return knex("autores").insert([

        {
          nome: " Mauricio ", sobrenome: " Silva ", data_nascimento: "1890-01-25",
          sexo: "M", telefone: "(60)98458-5896", descricao: "", foto: ""
        },
        {
          nome: " Edécio ", sobrenome: " Fernando Iepsen ", data_nascimento: "1789-02-30",
          sexo: "M", telefone: "(45)97856-2345", descricao: "", foto: ""
        },
        {
          nome: " Loiane ", sobrenome: " Groner ", data_nascimento: "1980-08-01",
          sexo: "M", telefone: "(54)94578-5632", descricao: "", foto: ""
        },
        {
          nome: " Robert ", sobrenome: " C. Martin ", data_nascimento: "1899-12-28",
          sexo: "M", telefone: "(47)96589-6329", descricao: "", foto: ""
        },
        {
          nome: " Thomas ", sobrenome: " Nield ", data_nascimento: "1989-16-23",
          sexo: "M", telefone: "(65)93215-6594" , descricao: "", foto: ""
        },

      ]);
    });
}

