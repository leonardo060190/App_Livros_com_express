//importando o framework express
const express = require("express");
//importando o framework express.Router
const router = express.Router();

//dados de conexão com o bd
const dbKnex = require("../data/db_config"); 

//método get ele retorna todos os editiras do banco de dados
router.get("/",async(req,res) => {
    try{
        //para obter os editoras pode-se utilizar .select().orderBy() ou apenas .orderBy()
        const editoras = await dbKnex("editoras").orderBy("id","cres");
        res.status(200).json(editoras); //retorna statusCode ok e os dados
    }catch(error){
        res.status(400).json({msg:error.message}); //retorna status de erro e msg
    }
});

//método post é usado para inclusão
//localhost:3000/editoras/cadastrar
router.post("/cadastro",async (req,res)=>{
    
    const {nome, cidade, estado, telefone, rua, cep } = req.body;
    
    //se algum dos campos não foi passado, irá enviar uma mensagem de erro ao retornar
    if(!nome || !cidade || !estado || !telefone || !rua || !cep ){
        res.status(400).json({msg:"Enviar nome, cidade, estado, telefone, rua, cep."});
        return;
    }

    //caso ocorra algum erro na inclusão, o programa irá capturar(catch) o erro
    try{
        //insert, faz a inserção na tabela editoas(e retorna o id do registro inserido)
        const novo = await dbKnex("editoras").insert({nome, cidade, estado, telefone, rua, cep});
        res.status(201).json({id:novo[0]}); //statuscode indica Create
    }catch(error){
        res.status(400).json({msg:error.message}); //retorna status de erro e msg
    }
});


//método put é usado para alteração. id indica o registro a ser alterado
router.put("/:id",async(req,res) => {
    const id = req.params.id; //
    const {telefone} = req.body; //campo a ser alterado
    try{
        //altera o campo preco, no registro cujo id coincidir com o parametro passado
        await dbKnex("editoras").update({telefone}).where({id});
        res.status(200).json(); //statusCode indica ok
    }catch(error){
        res.status(400).json({msg:error.message}); //retorna status de erro e msg
    }
});


//método delete é usado para exclusão
router.delete("/:id",async(req,res) => {
    const {id} = req.params; //id do registro a ser excluído
    try{
        await dbKnex("editoras").del().where({id});
        res.status(200).json(); //statusCode indica Ok
    }catch(error){
        res.status(400).json({msg:error.message}); //retorna status de erro e msg
    }
});

//Filtro por nome ou por telefone
router.get("/filtro/:palavra", async(req,res)=> {
    const palavra = req.params.palavra; // palavra ou titulo a pesquisar
    try{
            const livros = await dbKnex("editoras")
            .where("nome","like", `%${palavra}%`)
            .orWhere("telefone","like",`%${palavra}%`);
            res.status(200).json(livros); //retorna statusCode ok e os dados
        }catch(error){
            res.status(400).json({msg:error.message}); //retorna status de erro e msg
        }
});

//Resumo do cadastro de livros
router.get("/dados/resumo",async (req,res) =>{
    try{
        const livros = await dbKnex("editoras")
        .count({num: "id"})
        .max({maior: "estado"})
        const {num,maior} = editoras[0];
        res.status(200).json({num, maior});
    }catch(error){
        res.status(400).json({msg:error.message}); //retorna status de erro e msg
    }
})

//Exibir o gráfico com a soma dos preços agrupados por ano
router.get("/dados/grafico",async (req,res) =>{
    try{
        //obtém ano e soma do preço dos livros, Agrupados por ano
        const mediaEstados = await dbKnex("editoras")
        .select("estado")
        .avg({Média:"estado"})
        .groupBy("estado");
        res.status(200).json(mediaEstados);
    }catch(error){
        res.status(400).json({msg:error.message}); //retorna status de erro e msg
    }
})



module.exports = router;
