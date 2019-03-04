var main = $("#main-content").height();
var headHeight = 0;


//var imgHeight = str(child.height());


if ($("#headerPic").length > 0) {
    var headHeight = 375;
}


var contHeight = main+headHeight;
var contHeight = contHeight + "px";
var headHeight = headHeight + "px";


//document.getElementById("sidenav-item2").innerHTML = imgHeight;
document.getElementById("header").style.height = headHeight;
document.getElementById("body").style.height = contHeight;

