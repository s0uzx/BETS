import { Router } from "express";

const suspeitosRoutes = Router();

let suspeitos = [
    {
        id: Math.floor(Math.random() * 1000000),
        nome: 'Neymar Junior',
        profissao: 'Atleta',
        envolvimento: "Sim", // envolvimento em apostas
        nivelSus: "Alto", // nível de suspeita
    },

]

//Rota para buscar todas os suspeitos
suspeitosRoutes.get("/", (req, res) => {
    return res.status(200).send({ suspeitos });
});

//Rota para criar suspeitos
suspeitosRoutes.post("/", (req, res) => {
    const { nome, profissao, envolvimento, nivelSus } = req.body;

    //validação dos campos nome e profissao
    if (!nome || !profissao) {
        return res.status(400).send({ error: "O nome e a profissão do suspeito são obrigatórios." })
    }

    //validação de idade
    if (nivelSus != "Baixo" && nivelSus != "Médio" && nivelSus != "Alto") {
        return res.status(400).send({ message: "O nível de suspeita não coincide com as opções." })
    }

    if (envolvimento != "Sim" && envolvimento != "Não") {
        return res.status(400).send({ message: "Não foi possível constatar o envolvimento do suspeito." })
    }

    const novoSuspeito = {
        id: Math.floor(Math.random() * 1000000),
        nome,
        profissao,
        envolvimento,
        nivelSus,
    };

    suspeitos.push(novoSuspeito);

    return res.status(201)
        .json({
            mensagem: "Suspeito adicionado com sucesso!",
            novoSuspeito,
        });

});


//Rota para buscar pelo id
suspeitosRoutes.get("/:id", (req, res) => {
    const { id } = req.params;


    //console.log(id);
    const suspeito = suspeitos.find((suspect) => suspect.id == id);


    if (!suspeito) {
        return res.status(404).send({ message: "Suspeito não encontrado" });
    }


    return res.status(200).send({ message: "Suspeito encontrado", suspeito });
});

export default suspeitosRoutes;

