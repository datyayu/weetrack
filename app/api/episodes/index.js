// Dependencies.
import {Router} from 'express';
import {index, show, create, update, destroy} from './episodes.controller';


// Module variables.
const router = Router();

// API Routes.
router.get('/', index);
router.get('/:series', show);
router.post('/', create);
router.put('/:id', update);
router.patch('/:id', update);
router.delete('/:id', destroy);


// Export the router.
export default router;
