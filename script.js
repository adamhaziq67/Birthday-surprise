$(document).ready(function(){
  // Kotak muncul mula-mula
  $("#present").addClass("animated bounceInDown");

  // Hover effect penutup
  $("#present").hover(function(){
      $("#present #top").addClass("animated bounce");
  }, function(){
      $("#present #top").removeClass("animated bounce");
  });

  // Bila kotak diklik
  $("#present").on("click", function(){
    $("#present #top").removeClass("animated bounce").addClass("animated bounceOutUp");
    $(this).unbind("click");
    $(this).unbind("mouseleave");

    // Kucing melompat & Ayat meluncur selepas 1 saat
    setTimeout(function(){
      $("#present #cat").css("top", "-130px");
      
      // Mesej meluncur ke kiri (Adjust -240px ikut lebar skrin phone anda)
      $("#message").css({
        "opacity": "1",
        "left": "-230px", 
        "top": "-40px"
      });
    }, 1000);

    // Huruf Happy Birthday jatuh satu-persatu
    $("#wish").find("div").each(function(index){
      setTimeout(bounceIn.bind(null, $(this)), 2000 + index * 80);
    });
  });

  function bounceIn(el){
    el.addClass("animated bounceInDown swing");
    setTimeout(function(){
      el.removeClass("bounceInDown").addClass("swing");
    }, 1000);
  }
});
