import { Router } from 'express';
import { authenticateRoutes } from './authenticate.routes';

import { userRoutes } from './users.routes';

const router = Router();

router.use("/api/login", authenticateRoutes)
router.use("/api/users", userRoutes);

export { router }
