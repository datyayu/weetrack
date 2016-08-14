// Dependencies.
import 'newrelic';
import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';

// Dependencie modules.
import watcher from './lib/feedWatcher';
import tweet from './lib/twitterPost';
import routes from './routes';

// Local variables.
const app = express();
const port = process.env.PORT || 9000;
const dbUrl = process.env.MONGOLAB_URI || 'mongodb://localhost/test';


// Middleware.
app.use(bodyParser.json());

// Initiate database.
mongoose.connect(dbUrl);

// Routes.
app.use(routes);

// Inititate feed watcher.
watcher.start();


// Expose or import app.
app.listen(port, () => {
  console.log('\n\t\tWeeTrack');
  console.log('Nyaa-based Anime Release Tracker by @datyayu');
  console.log(`\tListening on port ${ port }\n`);
});
