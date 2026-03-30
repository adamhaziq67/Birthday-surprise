$(document).ready(function(){
  // Kotak hadiah muncul dari atas
  $("#present").addClass("animated bounceInDown");

  // Efek hover
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

    // Kucing melompat & Ayat meluncur
    setTimeout(function(){
      // Kucing naik
      $("#present #cat").css("top", "-120px");
      
      // Mesej meluncur ke kiri (Nilai -180px adalah selamat untuk phone)
      $("#message").css({
        "opacity": "1",
        "left": "-185px", 
        "top": "-20px"
      });
    }, 1000);

    // Huruf ucapan jatuh satu-persatu
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
