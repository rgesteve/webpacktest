import * as $ from 'jquery';

$(function(){
  console.log("Trying out webpack and typescript");
  let $readMoreLink = $(".read-more");

  $readMoreLink.on("click", function(e){
    e.preventDefault();
    $(this).parent().next("div").show();
    $(this).remove();
  });
});
