var app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

var friends = require("../data/friends.js");

module.exports = function(app){
    app.get("/api/friends", function(res, req){
        res.json(friends);
    });
    app.post("/api/friends", function(res, req){

        // friends Information
        var friendScores = req.body.scores;
        var count = 0;
        var scores = [];
        var match = 0;
        
        // goes through friends in list
        for(var i = 0; i < friends.length; i++){
            var difference = 0;

            //goes through scores
            for (var x = 0; x < friendScore.length; i++){
                difference += (Math.abs(parseInt(friends[i] - parseInt(friendScores[x]))));
            }

            // pushes info int scores
            scores.push(difference);
        }
        //Find Match
        for(var i = 0; i < scores.length; i++){
            if(scores[i]<= scores[match]){
                match = i;
            }
        }

        //returns matched friend
        var bestMatch = friends[match];
        res.json(bestMatch);

        //pushes best Match to friends
        friends.push(req.body);
    })
};//End of module.exports