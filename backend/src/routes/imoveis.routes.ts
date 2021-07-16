import { Router } from 'express';
import { ensureAuthenticated } from '../middlewares/ensureAuthenticated';
import { CreateImovelController } from '@modules/imoveis/useCases/CreateImovel/CreateImovelController';
import { ListImoveisController } from '@modules/imoveis/useCases/ListImoveis/ListImoveisController';

const imovelRoutes = Router();
const createImovelController = new CreateImovelController();
const listImoveisController = new ListImoveisController();

imovelRoutes.get("/", ensureAuthenticated, listImoveisController.handle);
imovelRoutes.post("/create", ensureAuthenticated, createImovelController.handle);

export { imovelRoutes }

