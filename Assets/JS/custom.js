/*jshint esnext: true */
/* navigation */
$("#toggler").click(()=>{
  $("#menu").toggleClass("max-lg:-translate-y-full")
  $("#menu").toggleClass("max-lg:top-0")
  $("#menu").toggleClass("max-lg:top-full")
  $("#toggler").toggleClass("h-5")
  $("#toggler > :nth-child(1)").toggleClass("rotate-45")
  $("#toggler > :nth-child(2)").toggleClass("opacity-0")
  $("#toggler > :nth-child(3)").toggleClass("-rotate-45")
  $("body").toggleClass("overflow-hidden")
  $("#overlay").toggleClass("hidden")
})
