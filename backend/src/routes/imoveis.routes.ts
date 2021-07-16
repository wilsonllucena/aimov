import { Router } from 'express';
import { ensureAuthenticated } from '../middlewares/ensureAuthenticated';
import { CreateImovelController } from '@modules/imoveis/useCases/CreateImovel/CreateImovelController';

const imovelRoutes = Router();
const createImovelController = new CreateImovelController();

imovelRoutes.post("/", ensureAuthenticated, createImovelController.handle);

export { imovelRoutes }

