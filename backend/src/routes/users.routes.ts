import { Router } from 'express';
import multer from 'multer';
import { CreateUserController } from '../modules/accounts/useCases/createUsers/CreateUserController';
import { UpdateUserAvatarController } from '../modules/accounts/useCases/updateUserAvatar/UpdateUserAvatarController';
import { ensureAuthenticated } from '../middlewares/ensureAuthenticated';
import { UpdateUserController } from '@modules/accounts/useCases/updateUser/UpdateUserController';
import { ListUsersController } from '@modules/accounts/useCases/ListUsers/ListUsersController';
import { EnableDisableUserController } from '@modules/accounts/useCases/EnableDisableUser/EnableDisableUserController';
import { ShowUserController } from '@modules/accounts/useCases/ShowUser/ShowUserController';
import uploadConfig from '../config/upload'

const userRoutes = Router();
const uploadAvatar = multer(uploadConfig.upload("./tmp/avatar"))

const listUsersController = new ListUsersController();
const createUserController = new CreateUserController();
const updateUserController = new UpdateUserController();
const showUserController = new ShowUserController();
const enableDisableUserController = new EnableDisableUserController();
const updateUserAvatarController = new UpdateUserAvatarController();


userRoutes.get("/", listUsersController.handle);
userRoutes.post("/", createUserController.handle);
userRoutes.put("/", ensureAuthenticated, updateUserController.handle)
userRoutes.get("/:user_id", ensureAuthenticated, showUserController.handle)
userRoutes.patch("/active/:user_id", ensureAuthenticated, enableDisableUserController.handle)
userRoutes.patch("/avatar", ensureAuthenticated, uploadAvatar.single('avatar_file'), updateUserAvatarController.handle)

export { userRoutes }

