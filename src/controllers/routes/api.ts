import { Router } from 'express';

// Sub domains
import defaultRoute from './readings/readings';

const router = Router();

/*
@route    GET /api/reading
@desc     Get data for earliest recording (2019-04-29)
@access   public
*/
router.get('/reading', defaultRoute);

export default router;
