

// (function hideOnPageLoad(){
//     // $('#me1').hide();
//     // $('#me2').hide();
//     // $('#me3').hide();
//     // $('#me4').hide();
//     // $('#me5').hide();
//     // $('#me6').hide();
//     $(".fact-list").toggle();
// }());


var options = [
    {selector: '.fact-list', offset: 300, callback: function(){
        Materialize.showStaggeredList(".fact-list");
    } }
  ];
  Materialize.scrollFire(options);