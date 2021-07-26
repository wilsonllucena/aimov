import { Router } from 'express';
import { ensureAuthenticated } from '../middlewares/ensureAuthenticated';
import { CreateImovelController } from '@modules/imoveis/useCases/CreateImovel/CreateImovelController';
import { ListImoveisController } from '@modules/imoveis/useCases/ListImoveis/ListImoveisController';
import { GetImovelController } from '@modules/imoveis/useCases/GetImovel/GetImovelController';
import { UpdateImovelController } from '@modules/imoveis/useCases/UpdateImovel/UpdateImovelController';
import { DeleteImovelController } from '@modules/imoveis/useCases/DeleteImovel/DeleteImovelController';

const imovelRoutes = Router();
const createImovelController = new CreateImovelController();
const listImoveisController = new ListImoveisController();
const getImovelController = new GetImovelController();
const updateImovelController = new UpdateImovelController();
const deleteImovelController = new DeleteImovelController();

imovelRoutes.get("/", ensureAuthenticated, listImoveisController.handle);
imovelRoutes.post("/create", ensureAuthenticated, createImovelController.handle);
imovelRoutes.get("/:id", ensureAuthenticated, getImovelController.handle);
imovelRoutes.put("/", ensureAuthenticated, updateImovelController.handle);
imovelRoutes.delete("/:id", ensureAuthenticated, deleteImovelController.handle);

export { imovelRoutes }

