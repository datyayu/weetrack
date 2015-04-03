# Dependencies
mongoose = require "mongoose" 
Schema   = mongoose.Schema


# Series
seriesSchema = new Schema 
  content:
    title: String
    img: String
    min: String
    status: String
    episodes: Number
    season: String
    description: String
    pvs: [ String ]
    links: 
      official: String
      twitter: String
      mal: String
  
  episodes: [
    type: Schema.Types.ObjectId
    ref: "Episode"
  ]
  
  createdAt:
    type: Date
    default: Date.now

  updatedAt:
    type: Date


# Export model
Series = mongoose.model "Series", seriesSchema
 
module.exports = Series