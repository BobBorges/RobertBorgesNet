$(document).ready(function(){
    $("#sidenav-cont").stick_in_parent({
        offset_top: 0
    });
});

$(document).ready(function(){
    $("#topnav").stick_in_parent({
        offset_top: 0
    });
});

$(document).ready(function(){

  $("div.sidenav-items").each(function() {
    var $dropdown = $(this);

        $("a.sidenav-item", $dropdown).click(function(e) {
          
          e.preventDefault();
          
          $div = $("div.dropdown-container", $dropdown);
          $div.toggle();
          
        });

    });
     
});





// comment out below this
//$(document).ready(function(){
//
//  $('div.dropdown').each(function() {
//    var $dropdown = $(this);
//
//        $("a.dropdown-link", $dropdown).click(function(e) {
//          
//          e.preventDefault();
//          
//          $div = $("div.dropdown-container", $dropdown);
//          $div.toggle();
//          
//        });
//
//    });
//     
//});