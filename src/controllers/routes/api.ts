import { Router } from 'express';

// Sub domains
import defaultRoute from './reading/readingRoute';
import idRoute from './id/idRoute';
import serialRoute from './serial/serialRoute';

const router = Router();

/*
@route    GET /api/reading
@route    GET /api/reading?day=2019-04-30&sn=M709000844&id=99941666
@desc     Get data for earliest recording (2019-04-29)
@access   public
*/
router.get('/reading', defaultRoute);

/*
@route    GET /api/serial
@desc     Get all unique sn
@access   public
*/
router.get('/serial', serialRoute);

/*
@route    GET /api/id
@desc     Get all unique ids
@access   public
*/
router.get('/id', idRoute);

export default router;
