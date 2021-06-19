import { Router } from 'express';
import { authenticateRoutes } from './authenticate.routes';

import { scheduleRouter } from './schedules.routes';
import { subscribersRouter } from './subscribers.routes';
import { userRoutes } from './users.routes';
import { userSubscriberRouter } from './userSubscriber.routes';

const router = Router();

router.use("/api/subscriber", userSubscriberRouter)

router.use("/api/login", authenticateRoutes)
router.use("/api/users", userRoutes);
router.use("/api/schedules", scheduleRouter)
router.use("/api/subscribers", subscribersRouter)

router.post("/api/webhook(/pix)?", (request, response) => {
    console.log(request.body)

    return response.send()
});




export { router }
