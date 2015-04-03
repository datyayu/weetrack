# Dependencies
mongoose = require "mongoose" 
Schema   = mongoose.Schema


# Episode Schema
episodeSchema = new Schema
  series: 
    type: Schema.Types.ObjectId
    ref: "Series"

  number: Number

  releases:
    fullhd: [ 
      group: String
      url: String
    ]
    hd: [ 
      group: String
      url: String
    ]
    lq: [ 
      group: String
      url: String
    ]

  createdAt:
    type: Date
    default: Date.now
  
  updatedAt:
    type: Date
    default: Date.now



# Export model
Episode = mongoose.model "Episode", episodeSchema

module.exports = Episode
