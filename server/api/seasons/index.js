// Dependencies.
import {Router} from 'express';
import {show} from './seasons.controller';

// Module variables.
const router = Router();


// API Routes.
router.get('/:id', show);


// Export the router.
export default router;
