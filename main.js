$(document).ready(function(){
  $('.header').height($(window).height());
  //lines below were added by meSS
  //$("#formButton").click(function() {
    //$("#form1").toggle();
  //});
})

//function myFunction(){

  //document.getElementById("demo").innerHTML = "Hello World";
//}

var ap=document.getElementById('a');
//var b=document.getElementById('b');
ap.addEventListener('click',function(){
    ap.style.display= "none"; //if button clicked first content dissappears
    //b.style.display="none";
    document.getElementById('form1').innerHTML="Hello!";
});
//b.addEventListener('click',function(){
  //  a.style.display="none";
    //b.style.display="none";
    //document.getElementById('b_form').style.display="";
//});
