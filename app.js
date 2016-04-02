$(function(){
var randomGif = {};
$("#randomButton").on("click", function(){
  // $("h1").toggleClass("highlighted");  <--- just for toggleClass fun.
  $.ajax({
    url:"http://api.giphy.com/v1/gifs/random?api_key=dc6zaTOxFJmzC",
    type: "get"
  }).done(function(response){
    $(".randomDisplay > img").remove();
    console.log(response);
    randomGif = response.data;
    console.log(randomGif.image_url)
    $(".randomDisplay").append("<img src=" + randomGif.image_url + ">");
  })
//closes click handler
})


// var orderGif = {}
// $("#").on("click", function(){
//   // $("h1").toggleClass("highlighted");  <--- just for toggleClass fun.
//   $.ajax({
//     url:"http://api.giphy.com/v1/gifs/search?q=funny+cat&api_key=dc6zaTOxFJmzC",
//     type: "get"
//   }).done(function(response){
//     $(".orderDisplay > img").remove();
//     console.log(response);
//     orderGif = response.data;
//     console.log(orderGif.image_url)
//     $(".orderDisplay").append("<img src=" + orderGif.image_url + ">");
//   })
// //closes click handler
// })




  //closes doument ready
})
