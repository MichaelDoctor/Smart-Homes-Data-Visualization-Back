import { Router } from 'express';

const router = Router();

/*
@route    GET /api
@desc     api param
@access   public
*/
router.get('/', (req, res) => res.status(200).json({ msg: 'Hello world' }));

export default router;
