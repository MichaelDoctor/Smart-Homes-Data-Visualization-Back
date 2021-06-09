import { Router } from 'express';

// Sub domains
import defaultRoute from './readings/readings';

const router = Router();

/*
@route    GET /api/reading
@route    GET /api/reading?day=2019-04-30&sn=M709000844&id=99941666
@desc     Get data for earliest recording (2019-04-29)
@access   public
*/
router.get('/reading', defaultRoute);

export default router;
