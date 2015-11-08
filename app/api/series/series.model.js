// Dependencies
import mongoose, {Schema} from 'mongoose';


// Series
const seriesSchema = new Schema({
  // Series info
  content: {
    title: String,
    img: String,
    min: String,
    status: String,
    releaseDate: String,
    episodes: Number,
    season: String,
    description: String,
    pvs: [ String ],
    links: {
      official: String,
      twitter: String,
      mal: String,
    },
  },

  // Regex for torrent filtering.
  regex: [ String ],

  // List of episodes.
  episodes: [{
    type: Schema.Types.ObjectId,
    ref: 'Episode',
  }],

  // Date/Time info
  createdAt: Number,
  updatedAt: Number,
});


// Export model.
export default mongoose.model('Series', seriesSchema);
