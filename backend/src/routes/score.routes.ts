import { Router } from 'express';
import { ensureAuthenticated } from '../middlewares/ensureAuthenticated';
import { ListScoresController } from '@modules/scores/useCases/listScores/ListScoresController';
import { CreateScoreController } from '@modules/scores/useCases/createScore/createScoreController';

const scoreRoutes = Router();
const listScoresController = new ListScoresController();
const createScoreController = new CreateScoreController();

scoreRoutes.get("/", ensureAuthenticated, listScoresController.handle);
scoreRoutes.post("/", ensureAuthenticated, createScoreController.handle);

export { scoreRoutes }

