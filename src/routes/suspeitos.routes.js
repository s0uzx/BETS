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



export default suspeitosRoutes;

