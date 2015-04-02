###
 # Using Rails-like standard naming convention for endpoints.
 # GET     /api/feed              ->  index
###

exports.index = (req, res) ->
  res.send feed


feed = {
  "lastestEpisodes": [
    {
      "img": "/assets/img/series/absoluteduo_min.jpg",
      "series": "Saenai Heroine no sodatekata",
      "number": 12,
      "time": "two weeks"
    },{
      "img": "/assets/img/series/absoluteduo_min.jpg",
      "series": "Absolute duo",
      "number": 12,
      "time": "two weeks"
    },{
      "img": "/assets/img/series/absoluteduo_min.jpg",
      "series": "Absolute duo",
      "number": 12,
      "time": "two weeks"
    },{
      "img": "/assets/img/series/absoluteduo_min.jpg",
      "series": "Absolute duo",
      "number": 12,
      "time": "two weeks"
    }
  ],

  "followingEpisodes": [
    {
      "img": "/assets/img/series/absoluteduo_min.jpg",
      "series": "Saenai Heroine no sodatekata",
      "number": 12,
      "time": "two weeks",
      "releases": {  
        "fullhd":[  
           {  
              "group":"HorribleSubs",
              "url":"http://www.nyaa.se/?page=download&tid=645739"
           }
        ],
        "hd":[  
           {  
              "group":"HorribleSubs",
              "url":"http://www.nyaa.se/?page=download&tid=645738"
           }
        ],
        "lq":[  
           {  
              "group":"HorribleSubs",
              "url":"http://www.nyaa.se/?page=download&tid=645737"
           }
        ]
      }
    },{
      "img": "/assets/img/series/absoluteduo_min.jpg",
      "series": "Saenai Heroine no sodatekata",
      "number": 12,
      "time": "two weeks",
      "releases": {  
        "fullhd":[  
           {  
              "group":"HorribleSubs",
              "url":"http://www.nyaa.se/?page=download&tid=645739"
           }
        ],
        "hd":[  
           {  
              "group":"HorribleSubs",
              "url":"http://www.nyaa.se/?page=download&tid=645738"
           }
        ],
        "lq":[  
           {  
              "group":"HorribleSubs",
              "url":"http://www.nyaa.se/?page=download&tid=645737"
           }
        ]
      }
    },{
      "img": "/assets/img/series/absoluteduo_min.jpg",
      "series": "Saenai Heroine no sodatekata",
      "number": 12,
      "time": "two weeks",
      "releases": {  
        "fullhd":[  
           {  
              "group":"HorribleSubs",
              "url":"http://www.nyaa.se/?page=download&tid=645739"
           }
        ],
        "hd":[  
           {  
              "group":"HorribleSubs",
              "url":"http://www.nyaa.se/?page=download&tid=645738"
           }
        ],
        "lq":[  
           {  
              "group":"HorribleSubs",
              "url":"http://www.nyaa.se/?page=download&tid=645737"
           }
        ]
      }
    }
  ]
}