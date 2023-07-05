//importando o framework express
const express = require("express");
//importando o framework express.Router
const router = express.Router();

//dados de conexão com o bd
const dbKnex = require("../data/db_config"); 

//método get ele retorna todos os autores do banco de dados
router.get("/",async(req,res) => {
    try{
        //para obter os autores pode-se utilizar .select().orderBy() ou apenas .orderBy()
        const autores = await dbKnex("autores").orderBy("id","esc");
        res.status(200).json(autores); //retorna statusCode ok e os dados
    }catch(error){
        res.status(400).json({msg:error.message}); //retorna status de erro e msg
    }
});

//método post é usado para inclusão
//localhost:3000/autores/cadastrar
router.post("/cadastro",async (req,res)=>{
    //faz a desestruturação dos dados recebidos no corpo da requisição
  
    const {nome, sobrenome, data_nascimento, sexo, descricao, telefone, foto} = req.body;
    
    //se algum dos campos não foi passado, irá enviar uma mensagem de erro ao retornar
    if(!nome || !sobrenome || !data_nascimento || !sexo || !descricao || !telefone || !foto ){
        res.status(400).json({msg:"Enviar nome, sobrenome, data_nascimento, sexo, descricao, telefone, foto."});
        return;
    }

    //caso ocorra algum erro na inclusão, o programa irá capturar(catch) o erro
    try{
        //insert, faz a inserção na tabela livros(e retorna o id do registro inserido)
        const novo = await dbKnex("autores").insert({nome, sobrenome, data_nascimento, sexo, descricao, telefone, foto});
        res.status(201).json({id:novo[0]}); //statuscode indica Create
    }catch(error){
        res.status(400).json({msg:error.message}); //retorna status de erro e msg
    }
});


//método put é usado para alteração. id indica o registro a ser alterado
router.put("/:id",async(req,res) => {
    const id = req.params.id; //
    const {descricao,telefone,foto} = req.body;
    try{
        //altera os campos, no registro cujo id coincidir com o parametro passado
        await dbKnex("autores").update({descricao,telefone,foto}).where({id});
        res.status(200).json(); //statusCode indica ok
    }catch(error){
        res.status(400).json({msg:error.message}); //retorna status de erro e msg
    }
});


//método delete é usado para exclusão
router.delete("/:id",async(req,res) => {
    const {id} = req.params; //id do registro a ser excluído
    try{
        await dbKnex("autores").del().where({id});
        res.status(200).json(); //statusCode indica Ok
    }catch(error){
        res.status(400).json({msg:error.message}); //retorna status de erro e msg
    }
});

//Filtro por titulo ou por autor
router.get("/filtro/:palavra", async(req,res)=> {
    const palavra = req.params.palavra; // palavra ou titulo a pesquisar
    try{
            const livros = await dbKnex("autores")
            .where("nome","like", `%${palavra}%`)
            .orWhere("sobrenome","like",`%${palavra}%`);
            res.status(200).json(autores); //retorna statusCode ok e os dados
        }catch(error){
            res.status(400).json({msg:error.message}); //retorna status de erro e msg
        }
});

//Resumo do cadastro de autores
router.get("/dados/resumo",async (req,res) =>{
    try{
        const livros = await dbKnex("autores")
        .select({quantidade:"sexo"})
        .count({num: "*"})
        .groupBy(sexo)
        const {quantidade, num, sexo} = autores[0];
        res.status(200).json({quantidade,num,sexo});
    }catch(error){
        res.status(400).json({msg:error.message}); //retorna status de erro e msg
    }
})

//Exibir o gráfico com a soma dos preços agrupados por ano
router.get("/dados/grafico",async (req,res) =>{
    try{
        //obtém ano e soma do preço dos livros, Agrupados por ano
        const tipoAutores = await dbKnex("autores")
        .select("sexo")
        .count({total:"*"})
        .groupBy("sexo");
        res.status(200).json(totalPorAno);
    }catch(error){
        res.status(400).json({msg:error.message}); //retorna status de erro e msg
    }
})


module.exports = router;