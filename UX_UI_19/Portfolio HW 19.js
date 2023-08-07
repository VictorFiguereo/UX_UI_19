

<div>
$("p").click();
$("#p1").mouseenter(function(){
    alert("You entered p1!");
  });


<script><div id="target">
  Click here
<
<div id="other">


  Trigger the handler {

$( "#target" ).on( "click", function() {
  alert( "Handler for `click` called." );
} );
}

Click    {
$( "#other" ).on( "click", function() {
  $( "#target" ).trigger( "click" );
} );
}

</script>
<script src="js/index.js"></script>