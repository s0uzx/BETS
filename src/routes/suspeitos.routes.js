import {Router}from "express";

const suspeitosRoutes = Router();

let suspeitos = [
    {
        id: Math.floor(Math.random() * 1000000),
        nome: 'Neymar Junior',
        profissão: 'Atleta',
        envolvimento: "Sim", // envolvimento em apostas
        nivelSus: "Alto", // nível de suspeita
    },
   
]

//Rota para buscar todas os suspeitos
suspeitosRoutes.get("/", (req, res) => {
    return res.status(200).send({ suspeitos });
});

//Rota para criar emoções
suspeitosRoutes.post("/", (req, res) => {
    const { nome, profissão, envolvimento, nivelSus } = req.body;

     //validação dos campos nome e partido
     if (!nome || !profissão){
        return res.status(400).send({ error: "O nome e a profissão do suspeito são obrigatórios."})
     }

     //validação de idade
     if (nivelSus != "Baixo" && nivelSus != "Médio" && nivelSus != "Alto") {
        return res.status(400).send({ message: "O nível de suspeita não coincide com as opções."})
     }

     if (envolvimento != "Sim" && envolvimento != "Não") {
        return res.status(400).send({ message: "Não foi possível constatar o envolvimento do suspeito."})
     }

    const novoSuspeito = {
        id: Math.floor(Math.random() * 1000000),
        nome,
        profissão,
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


export default suspeitosRoutes;

