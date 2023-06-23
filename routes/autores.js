

// importando o framework express
const express = require("express");
// importando o framework express.Router
const router = express.Router();

//dados de conexão com db
const dbKnex = require("../data/db_config"); //dados de conexão com o bd


//método get é usado para consulta
router.get("/", async (req, res) => {
    try {
        //para obter os autores pode-se utilizar .select().orderBy() ou apenas .orderBy()
        const autores = await dbKnex("autores").orderBy("id", "cres");
        res.status(200).json(autores); //retorna statusCode ok e os dados
    } catch (error) {
        res.status(400).json({ msg: error.message }); //retorna status de erro e msg
    }
});


//método post é usado para inclusão
router.post("/cadastro", async (req, res) => {
    //faz a desestruturação dos dados recebidos no corpo da requisição
    const {nome, sobrenome, data_nascimento, sexo, descricao, telefone, foto } = req.body;


    //se algum dos campos não foi passado, irá enviar uma mensagem de erro ao retornar
    if (!nome || !sobrenome || !data_nascimento || !sexo || !descricao || !telefone || !foto ) {
        res.status(400).json({ msg: "Enviar nome, sobrenome, data_nascimento, sexo, descricao, telefone, foto." });
        return;
    }


    //caso ocorra algum erro na inclusão, o programa irá capturar(catch) o erro
    try {
        //insert, faz a inserção na tabela autores(e retorna o id do registro inserido)
        const novo = await dbKnex("autores").insert({nome, sobrenome, data_nascimento, sexo, descricao, telefone, foto});
        res.status(201).json({ id: novo[0] }); //statuscode indica Create
    } catch (error) {
        res.status(400).json({ msg: error.message }); //retorna status de erro e msg
    }
});


//método put é usado para alteração. id indica o registro a ser alterado
router.put("/:id", async (req, res) => {
    const id = req.params.id; //
    const {descricao,telefone,foto} = req.body; //campo a ser alterado
    try {
        //altera o campo preco, no registro cujo id coincidir com o parametro passado
        await dbKnex("autores").update({descricao,telefone,foto}).where({ id });
        res.status(200).json(); //statusCode indica ok
    } catch (error) {
        res.status(400).json({ msg: error.message }); //retorna status de erro e msg
    }
});


//método delete é usado para exclusão
router.delete("/:id", async (req, res) => {
    const { id } = req.params; //id do registro a ser excluído
    try {
        await dbKnex("autores").del().where({ id });
        res.status(200).json(); //statusCode indica Ok
    } catch (error) {
        res.status(400).json({ msg: error.message }); //retorna status de erro e msg
    }
});

module.exports = router;
