import { Router } from 'express';
import { authenticateRoutes } from './authenticate.routes';
import { imovelRoutes } from './imoveis/imoveis.routes';
import { scoreRoutes } from './score.routes';

import { userRoutes } from './users.routes';

const router = Router();

router.use("/login", authenticateRoutes)
router.use("/users", userRoutes);
router.use("/scores", scoreRoutes);
router.use("/", imovelRoutes);


export { router }
