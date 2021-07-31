import { Router } from "express";
import { ensureAuthenticated } from "../../middlewares/ensureAuthenticated";

import { CreateProprietarioController } from "@modules/imoveis/useCases/CreateProprietario/CreateProprietarioController";
import { ListProprietariosController } from "@modules/imoveis/useCases/ListProprietarios/ListProprietariosController";
import { GetProprietarioController } from "@modules/imoveis/useCases/GetProprietarioId/GetProprietarioController";
import { UpdateProprietarioController } from "@modules/imoveis/useCases/UpdateProprietario/UpdateProprietarioController";
import { DeleteProprietarioController } from "@modules/imoveis/useCases/DeleteProprietario/DeleteProprietarioController";

const proprieatrioRoute = Router();
const createProprietarioController = new CreateProprietarioController();
const listProprietariosController = new ListProprietariosController();
const getProprietarioController = new GetProprietarioController();
const updateProprietarioController = new UpdateProprietarioController();
const deleteProprietarioController = new DeleteProprietarioController();

proprieatrioRoute.get(
	"/imovel/:id_imovel/proprietarios",
	ensureAuthenticated,
	listProprietariosController.handle
);
proprieatrioRoute.post(
	"/imovel/:id_imovel/proprietarios",
	ensureAuthenticated,
	createProprietarioController.handle
);
proprieatrioRoute.get(
	"/proprietario/:id",
	ensureAuthenticated,
	getProprietarioController.handle
);
proprieatrioRoute.put(
	"/proprietario/:id",
	ensureAuthenticated,
	updateProprietarioController.handle
);
proprieatrioRoute.delete(
	"/proprietario/:id",
	ensureAuthenticated,
	deleteProprietarioController.handle
);

export { proprieatrioRoute };
