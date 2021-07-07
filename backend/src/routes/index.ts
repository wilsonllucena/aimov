import { Router } from 'express';
import { authenticateRoutes } from './authenticate.routes';
import { scoreRoutes } from './score.routes';

import { userRoutes } from './users.routes';

const router = Router();

router.use("/api/login", authenticateRoutes)
router.use("/api/users", userRoutes);
router.use("/api/scores", scoreRoutes);

export { router }
