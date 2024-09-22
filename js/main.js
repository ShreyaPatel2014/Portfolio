(function ($) {
  "use strict";

  // preloader start
  let preloader = document.querySelector("#preloader");
  window.addEventListener("load", function () {
    preloader.classList.add("preloaded");
    setTimeout(function () {
      preloader.remove();
    }, 1500);
  });
  // preloader end

  // meanmenu start
  $(".main_menu").meanmenu({
    meanMenuContainer: ".mobile_menu",
    meanScreenWidth: "1399",
  });

  $(".main_menu_2").meanmenu({
    meanMenuContainer: ".mobile_menu_2",
    meanScreenWidth: "991",
  });
  // meanmenu end

  // mobile menu start
  let menutoggole = document.querySelector(".toggle_menu");
  let mobilemenu = document.querySelector(".mobile-menu");
  menutoggole.onclick = function () {
    menutoggole.classList.toggle("active");
    mobilemenu.classList.toggle("active");
  };
  // mobile menu end

 
  // portfolio port start

  
  // portfolio filter end

  // contact form
  $(".input-box.name").click(function () {
    $(".input-box.name").addClass("height");
    $(".input-box.name").css("borderBottom", "1px solid #FE7878");
    $(".input-lebel.name").css("color", "#FE7878");
  });

  $(".input-box.gmail").click(function () {
    $(".input-box.gmail").addClass("height");
    $(".input-box.gmail").css("borderBottom", "1px solid #1B74E4");
    $(".input-lebel.gmail").css("color", "#1B74E4");
  });

  $(".input-box.message").click(function () {
    $(".input-box.message").addClass("height");
    $(".input-box.message").css("borderBottom", "1px solid #CE65F3");
    $(".input-lebel.message").css("color", "#CE65F3");
  });
  // contact form end

  // data background
  $("[data-background]").each(function () {
    $(this).css(
      "background-image",
      "url(" + $(this).attr("data-background") + ") "
    );
  });
  // WOW active
  new WOW().init();
})(jQuery);
