// Dependencies.
import {join} from 'path';
import {Router, static as staticDir} from 'express';
import api from './api';

// Module variables
const router = Router();
const assets = join(__dirname, 'assets');
const indexFile = join(__dirname, 'assets', 'html', 'index.html');

// CORS
router.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'POST, GET, OPTIONS, PUT, DELETE');
  res.header('Access-Control-Allow-Headers', 'Origin, x-weetrack-auth, X-Requested-With, Content-Type, Accept');
  next();
});

// GZIP
router.use('/assets/js', (req, res, next) => {
  res.set('Content-Type', 'aplication/x-javascript');
  res.set('Content-Encoding', 'gzip');
  next();
});

router.use('/assets/css', (req, res, next) => {
  res.set('Content-Type', 'text/css');
  res.set('Content-Encoding', 'gzip');
  next();
});

// Static files.
router.use('/assets', staticDir(assets));

// API Routes.
router.use('/api', api);

// Regex file for debugging
router.use('/regex_file', (req, res) => {
  res.sendFile(join(__dirname, 'regex.txt'));
});

// Send index.html.
router.use('/', (req, res) => {
  res.sendFile(indexFile);
});

// Export router.
module.exports = router;
