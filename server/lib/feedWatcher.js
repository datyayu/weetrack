// Dependencies
import {writeFileSync, readFileSync, appendFileSync} from 'fs';
import async from 'async';
import Watcher from 'feed-watcher';
import Series from '../api/series/series.model';
import {saveRelease} from './episodeParser';

// Torrent feed.
const feed = 'http://www.nyaa.se/?page=rss';

// Regex to torrent filtering.
const regexFile = './server/regex.txt';

// Create a new watcher
const watcher = new Watcher(feed, 10);


// Check a release to find matching series.
// If a match is founded, try to store it to db.
function checkRelease(release, callback) {
  let calledCallback = false;

  // Get filter patterns from pattern file.
  const patterns = readFileSync(regexFile, 'utf8').split('\n');

  if (release.categories[0] === 'English-translated Anime') {
    for (const pattern of patterns) {
      const patternRegex = new RegExp(pattern, 'i');

      if (release.title.match(patternRegex)) {
        console.log(`\nNew release founded matching regex "${pattern}"`);
        console.log(release.title);

        saveRelease(release, pattern, callback);
        calledCallback = true;
        break;
      }
    }
  }

  // Call callback if passed and it didn't found a match at
  // pattern matching.
  if (callback && !calledCallback) {
    callback();
  }
}


// Setup regex file
function populateRegexFile(file, callback) {
  const sampleMessage = 'THIS_LINE_FIXES_PROBLEMS';

  writeFileSync(file, sampleMessage, 'utf-8');

  Series.find({}, (findError, seriesList) => {
    if (findError) { return console.log(findError); }
    seriesList.map(series => appendFileSync(regexFile, `\n${series.regex}`));
    callback();
  });
}


// Check initial feed.
function checkOldReleases() {
  watcher.checkAll()
    .then((releases) => {
      async.eachSeries(releases, checkRelease, (error) => {
        if (error) { console.log(error); }
      });
    })
    .catch(error => console.log(error));
}


// Setup watchers.
function start() {
  watcher.stop(); // Close already existing watcher.

  checkOldReleases();

  watcher.start();

  // Update on new episode.
  watcher.on('new entries', (releases) => {
    async.eachSeries(releases, checkRelease, (error) => {
      if (error) { console.log(error); }
    });
  });
}


export default {
  start() {
    populateRegexFile(regexFile, start);
  },
  checkOldReleases,
};
