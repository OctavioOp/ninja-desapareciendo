/*$('img').on('click',function(){
    $(this).fadeOut(1000);
})
*/
//metodo adicional

$("img").on("click", function () {
  let random = Math.round(Math.random());
  console.log(random);
  if (random == 0) {
    $(this).fadeOut(1000);
  } else if (random == 1) {
    $(this).slideUp(1000);
  }
});

$(".btn").on("click", function () {
  $("img").fadeIn(2000);
});
