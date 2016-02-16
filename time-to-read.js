var body = document.getElementsByTagName('body');
var bodyString = "";
for (var i = 0; i < body.length; i++){
  bodyString += body[i].innerHTML;
}
var wordsArray = bodyString.trim().replace(/\W\s/gi,'').split(" ");
var timeToRead = function() {
  var min = 0;
  for(var i = 0; i < wordsArray.length; i += 230){
    min = min += 1;
  }
  console.log(wordsArray.length);
  console.log(min + " minutes");
  return min + " minutes"
}

timeToRead();

document.getElementsByClassName('reading-time')[0].innerText = "It takes " + timeToRead() + " to read this page."
