function add(){
var tweet = $('<div class="card" ><br> <img src="tweet.png" width="40px"  class="center-block"><br><h5 class="card-title">Card title</h5><p clas="card-text">Sample tweet will go here</p> </div>');
tweet.appendTo('#interest1');
}
function add2(){

var tweet = $('<div id="tweet1" class="card" ><img src="tweet.png" width="40px"  class="center-block"><div class="card-body"> <button type="button" class="btn btn-primary btn-danger btn-circle btn-sm" style="border-radius: 50%;" onclick="deleteCard()">-</button><br> <br><h5 class="card-title">Card title</h5><p clas="card-text">Sample tweet will go here</p> </div></div>');
tweet.appendTo('#interest2');
}

function add3(){
  var tweet = $('<div class="card" ><br> <img src="tweet.png" width="40px"  class="center-block"><br><h5 class="card-title">Card title</h5><p clas="card-text">Sample tweet will go here</p> </div>');
tweet.appendTo('#interest3');
}
function addCard(interestID){
                //var myID = document.getElementById(interestID);
                var tweet = $('<div class="card" style = "width: 18rem;" ><img class = "card-img-top" src=twitter.png><div class = "card-body"><p class="card-text">This is a tweet</p></div></div>');
                tweet.appendTo('#interestID');
            }

function deleteCard(){
  document.getElementById('tweet1').remove()

}
