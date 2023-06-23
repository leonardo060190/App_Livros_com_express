exports.seed = function (knex) {
  return knex("autores").del()
    .then(function () {
      return knex("autores").insert([
        {
          nome: "Mauricio", sobrenome: "Silva", data_nascimento: "1988-02-23", sexo: "M", descricao: "Maurício Samy Silva é graduado em Engenharia Civil pelo Instituto Militar de Engenharia (IME).", telefone:"(59)945878-9659", foto:"https://s3.novatec.com.br/autores/maujor-foto.jpg"
        },
        {
          nome: "Robert", sobrenome: "C. Martin", data_nascimento: "1952-12-05", sexo: "M", descricao: "Robert Cecil Martin, também conhecido como Uncle Bob (Tio Bob em português), é uma grande personalidade da comunidade de desenvolvimento de software, métodos ágeis e software craftsmanship, atuando na área desde 1970. Atualmente é consultor internacional e autor de vários livros abordando o tema.", telefone:"(59)95693-6598", foto:"https://upload.wikimedia.org/wikipedia/commons/thumb/2/27/Robert_C._Martin_surrounded_by_computers.jpg/200px-Robert_C._Martin_surrounded_by_computers.jpg"
        },
        {
          nome: "Edécio", sobrenome: "Fernando Iepsen", data_nascimento: "1985-11-05", sexo: "M", descricao: "Edécio Fernando Iepsen atua como professor da Faculdade de Tecnologia Senac Pelotas. É graduado em Tecnologia em Processamento de Dados (UCPel), e possui Mestrado em Ciência da Computação (UCPel) e Doutorado em Informática na Educação (UFRGS).", telefone:"(25)84563-6556", foto:"https://s3.novatec.com.br/autores/edecio-iepsen-foto.jpg"
        },
        {
          nome: "Thomas", sobrenome: "Nield", data_nascimento: "1986-03-25", sexo: "M", descricao: "Thomas Nield é analista sênior e desenvolvedor de softwares empresariais no Gerenciamento de Receitas da Southwest Airlines. Atualmente ele tem interesse em programação reativa, Java, Kotlin e desenvolvimento de softwares empresariais de nível tático", telefone:"(47)61542-3363", foto:"https://s3.novatec.com.br/autores/thomasnield-foto.jpg"
        },
        {
          nome: "David", sobrenome: "Flanagan", data_nascimento: "1989-09-12", sexo: "M", descricao: "David Flanagan é um programador de computador que passa a maior parte do tempo escrevendo sobre JavaScript e Java. Seus livros com O'Reilly incluem Java in a Nutshell, Java Example in a Nutshell, Java Foundation Classes in a Nutshell, JavaScript: The Definitive Guide e JavaScript Pocket Reference. David é formado em ciência da computação e engenharia pelo Massachusetts Institute of Technology.", telefone:"(45)94589-6569", foto:"https://m.media-amazon.com/images/I/61ONpOKBYiL._SX450_.jpg"
        },
       
      ]);
    });
}
