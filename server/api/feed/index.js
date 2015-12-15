// Dependencies.
import {Router} from 'express';
import {index, show} from './feed.controller';

// Module variables.
const router = Router();

// API Routes.
router.get('/', index);
router.get('/:page', show);


// Export the router.
export default router;
