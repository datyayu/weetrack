// Dependencies
import mongoose, {Schema} from 'mongoose';


// Episode Schema
const episodeSchema = new Schema({
  series: {
    type: Schema.Types.ObjectId,
    ref: 'Series',
  },

  number: Number,

  releases: {
    fullhd: [{ group: String, url: String }],
    hd: [{ group: String, url: String }],
    lq: [{ group: String, url: String }],
  },

  createdAt: Number,
  updatedAt: Number,
});


// Export model.
export default mongoose.model('Episode', episodeSchema);
