import { Router } from 'express';
import multer from 'multer';
import { ensureAuthenticated } from '../../middlewares/ensureAuthenticated';
import uploadConfig from '../../config/upload'
import { CreateImovelController } from '@modules/imoveis/useCases/CreateImovel/CreateImovelController';
import { ListImoveisController } from '@modules/imoveis/useCases/ListImoveis/ListImoveisController';
import { GetImovelController } from '@modules/imoveis/useCases/GetImovel/GetImovelController';
import { UpdateImovelController } from '@modules/imoveis/useCases/UpdateImovel/UpdateImovelController';
import { DeleteImovelController } from '@modules/imoveis/useCases/DeleteImovel/DeleteImovelController';
import { UploadController } from '@modules/imoveis/useCases/Images/Upload/UploadController';
const upload = multer(uploadConfig.upload("./tmp/upload/imagens/"))

const imovelRoutes = Router();
const createImovelController = new CreateImovelController();
const listImoveisController = new ListImoveisController();
const getImovelController = new GetImovelController();
const updateImovelController = new UpdateImovelController();
const deleteImovelController = new DeleteImovelController();
const uploadController = new UploadController()

imovelRoutes.get("/api/imoveis", ensureAuthenticated, listImoveisController.handle);
imovelRoutes.post("/api/imovel", ensureAuthenticated, createImovelController.handle);
imovelRoutes.get("/api/imovel/:id", ensureAuthenticated, getImovelController.handle);
imovelRoutes.put("/api/imovel", ensureAuthenticated, updateImovelController.handle);
imovelRoutes.delete("/api/imovel/:id", ensureAuthenticated, deleteImovelController.handle);
imovelRoutes.post("/api/imovel/:id_imovel/imagens", ensureAuthenticated, upload.single('file'), uploadController.handle);

export { imovelRoutes }

