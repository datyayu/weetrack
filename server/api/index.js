// Dependencies.
import {Router} from 'express';
import episodes from './episodes';
import feed from './feed';
import seasons from './seasons';
import series from './series';


// Module variables.
const router = Router();

// API Routes.
router.use('/episodes', episodes);
router.use('/feed', feed);
router.use('/seasons', seasons);
router.use('/series', series);


// Export router.
export default router;
