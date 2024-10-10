import { Router } from "express";
import suspeitosRoutes from "./suspeitos.routes.js";

const routes = Router();

routes.get("/", (req, res) => {
    return res.status(200).send({ message:"Tá rodando pow!" })
})

routes.use("/suspeitos", suspeitosRoutes);

export default routes;