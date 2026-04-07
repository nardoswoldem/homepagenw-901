$(".dark-btn").click(
    function(){
  $(".box").toggleClass("dark");
  $(".container").toggleClass("dark");
}
);


$(".spin-btn").click(
    function(){
        $(".box").toggleClass("spin");
    }

);

$(".reveal-btn").click(
    function(){
  //$(".cat").toggleClass("reveal");
 // $(".cat").css("display", "block");
 $(".cat").show();
 $(".reveal-btn").hide();

    }
);

$(".draggable").draggable({ 
   containment:".container",
   scroll:false,
   snap: true
   });

