// Dependencies.
import {Router} from 'express';
import {index, show, create, update, destroy} from './series.controller';

// Module variables.
const router = Router();


// API Routes.
router.get('/', index);
router.get('/:id', show);
router.post('/', create);
router.put('/:id', update);
router.patch('/:id', update);
router.delete('/:id', destroy);


// Export the router.
export default router;
