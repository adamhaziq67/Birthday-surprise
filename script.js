$(document).ready(function(){
  // Kotak hadiah muncul
  $("#present").addClass("animated bounceInDown");

  // Animasi hover pada penutup
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

    // Kucing melompat & Pesanan meluncur ke kiri selepas 1 saat
    setTimeout(function(){
      $("#present #cat").css("top", "-140px");
      
      // Mesej meluncur keluar
      $("#message").css({
        "opacity": "1",
        "left": "-250px", // Adjust ke kiri
        "top": "-40px"
      });
    }, 1000);

    // Ucapan jatuh satu-satu
    $("#wish").find("div").each(function(index){
      setTimeout(bounceIn.bind(null, $(this)), 2000 + index * 100);
    });
  });

  function bounceIn(el){
    el.addClass("animated bounceInDown swing");
    setTimeout(function(){
      el.removeClass("bounceInDown").addClass("swing");
    }, 1000);
  }
});
