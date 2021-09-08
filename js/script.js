$(function(){
   $('.slider').bxSlider({
      auto:true,
      speed:1000,
   });

   $('.slider div').ripples({
      resolution: 512,
      dropRadius: 20, //px
      perturbance: 0.04,
    });

});
