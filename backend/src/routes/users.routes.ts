import { Router  } from 'express';
import multer from 'multer';
import { CreateUserController } from '../modules/accounts/useCases/createUsers/CreateUserController';
import { UpdateUserAvatarController } from '../modules/accounts/useCases/updateUserAvatar/UpdateUserAvatarController';
import uploadConfig from '../config/upload'
import { ensureAuthenticated } from '../middlewares/ensureAuthenticated';
import { UpdateUserController } from '@modules/accounts/useCases/updateUser/UpdateUserController';

const userRoutes = Router();
const uploadAvatar = multer(uploadConfig.upload("./tmp/avatar"))

const createUserController = new CreateUserController();
const updateUserAvatarController = new UpdateUserAvatarController();
const updateUserController = new UpdateUserController();

userRoutes.post("/", createUserController.handle);
userRoutes.put("/",ensureAuthenticated,  updateUserController.handle)

userRoutes.patch("/avatar",ensureAuthenticated, uploadAvatar.single('avatar_file'), updateUserAvatarController.handle )

export { userRoutes }

