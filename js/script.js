

if(window.innerWidth > 600){
    console.log(window.innerWidth);
    
    var options = [
                    {selector: '.fact-list', 
                     offset: 300, 
                     callback: function(){
                     Materialize.showStaggeredList(".fact-list");
                     } 
                    }
                  ];
                    
  Materialize.scrollFire(options);
}
else{
    console.log(window.innerWidth);
   var options = [
                   {selector: '.fact-list', 
                    offset: 300, 
                    callback: function() {
                    Materialize.fadeInImage($('#numOne'));
                    Materialize.fadeInImage($('#numTwo'));
                    Materialize.fadeInImage($('#numThree'));
                    Materialize.fadeInImage($('#numFour'));
                    Materialize.fadeInImage($('#numFive'));
                    Materialize.fadeInImage($('#numSix'));
                    } 
                   },
                 ];
  Materialize.scrollFire(options);
}
  
  
  