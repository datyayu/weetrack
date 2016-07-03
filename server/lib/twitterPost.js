import Twitter from 'twitter';

const TWITTER_TWEET_ENDPOINT = 'statuses/update';

const client = new Twitter({
  consumer_key: process.env.TWITTER_API_KEY || '',
  consumer_secret: process.env.TWITTER_API_SECRET || '',
  access_token_key: process.env.TWITTER_ACCESS_KEY || '',
  access_token_secret: process.env.TWITTER_ACCESS_SECRET || '',
});


export default function tweet(message) {
  var message = { status: message };

  client.post(TWITTER_TWEET_ENDPOINT, message, error => {
    if (error) console.log(error);
  });
};
