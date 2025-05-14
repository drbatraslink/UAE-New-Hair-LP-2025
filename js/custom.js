// Function to enhance carousel nav accessibility
function enhanceCarouselAccessibility() {
  $('.owl-nav .owl-prev, .owl-nav .owl-next')
    .attr('role', 'button')
    .attr('tabindex', '0')
    .on('keydown', function (e) {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        $(this).trigger('click');
      }
    });
}

// Screenshot carousel initialization
$('.screenshot_slider').owlCarousel({
  loop: true,
  responsiveClass: true,
  nav: true,
  margin: 20,
  autoplay: true,
  autoplayTimeout: 4000,
  smartSpeed: 400,
  navText: [
    "<img src='images/previmage.webp' alt='001 prev' width='50' height='50' />",
    "<img src='images/nextimage.webp' alt='001 next' width='50' height='50' />",
  ],
  responsive: {
    0: { items: 1 },
    600: { items: 1 },
    768: { items: 2 },
    1024: { items: 2 },
    1200: { items: 3 },
  },
});

// Doctors carousel initialization
$('.doctors_slider').owlCarousel({
  loop: true,
  responsiveClass: true,
  nav: true,
  margin: 20,
  autoplay: true,
  autoplayTimeout: 4000,
  smartSpeed: 400,
  navText: [
    "<img src='images/previmage.webp' alt='002 prev' width='50' height='50' />",
    "<img src='images/nextimage.webp' alt='002 next' width='50' height='50' />",
  ],
  responsive: {
    0: { items: 1 },
    600: { items: 1 },
    768: { items: 2 },
    1024: { items: 3 },
    1200: { items: 4 },
  },
});

// Hair treatment carousel initialization
$('.hairtreatmnt_slider').owlCarousel({
  loop: true,
  responsiveClass: true,
  nav: true,
  margin: 0,
  autoplay: true,
  autoplayTimeout: 4000,
  smartSpeed: 400,
  navText: [
    "<img src='images/previmage.webp' alt='003 prev' width='50' height='50' />",
    "<img src='images/nextimage.webp' alt='003 next' width='50' height='50' />",
  ],
  responsive: {
    0: { items: 1 },
    600: { items: 1 },
    768: { items: 3 },
    1024: { items: 4 },
    1200: { items: 6 },
  },
});

// Clinic carousel initialization
$('.clinic_slider').owlCarousel({
  loop: true,
  responsiveClass: true,
  nav: true,
  margin: 20,
  autoplay: true,
  autoplayTimeout: 4000,
  smartSpeed: 400,
  navText: [
    "<img src='images/previmage.webp' alt='004 prev' width='50' height='50' />",
    "<img src='images/nextimage.webp' alt='004 next' width='50' height='50' />",
  ],
  responsive: {
    0: { items: 1 },
    600: { items: 1 },
    768: { items: 2 },
    1024: { items: 3 },
    1200: { items: 3 },
  },
});

// Google review carousel initialization
$('.google_slider').owlCarousel({
  loop: true,
  responsiveClass: true,
  nav: true,
  margin: 20,
  autoplay: true,
  autoplayTimeout: 4000,
  smartSpeed: 400,
  navText: [
    "<img src='images/previmage.webp' alt='005 prev' width='50' height='50' />",
    "<img src='images/nextimage.webp' alt='005 next' width='50' height='50' />",
  ],
  responsive: {
    0: { items: 1 },
    600: { items: 1 },
    768: { items: 2 },
    1024: { items: 3 },
    1400: { items: 4 },
  },
});

// Apply accessibility enhancement after all carousels are initialized
enhanceCarouselAccessibility();

/*** 3. Tab Functionality ***/
function setupTabs() {
  $(".tabb_content").hide().first().show();
  $("ul.nptabbs li").on("click", function () {
    const target = $(this).attr("rel");
    $(".tabb_content").hide();
    $("#" + target).fadeIn();
    $("ul.nptabbs li").removeClass("active");
    $(this).addClass("active");
    $(".tabb_drawer_heading").removeClass("d_active");
    $(".tabb_drawer_heading[rel='" + target + "']").addClass("d_active");
  });

  $(".tabb_drawer_heading").on("click", function () {
    const target = $(this).attr("rel");
    $(".tabb_content").hide();
    $("#" + target).fadeIn();
    $(".tabb_drawer_heading").removeClass("d_active");
    $(this).addClass("d_active");
    $("ul.nptabbs li").removeClass("active");
    $("ul.nptabbs li[rel='" + target + "']").addClass("active");
  });

  $("ul.nptabbs li").last().addClass("tabb_last");
}

function tabControl() {
  const tabs = $(".tabbed-content .tabs");
  if (tabs.is(":visible")) {
    tabs.find("a").on("click", function (e) {
      e.preventDefault();
      const target = $(this).attr("href");
      tabs.find("a").removeClass("active");
      $(".tabbed-content .item").removeClass("active");
      $(this).addClass("active");
      $(target).addClass("active");
    });
  } else {
    $(".tabbed-content .item").on("click", function () {
      const target = $(this).attr("id");
      const parent = $(this).parents(".tabbed-content");
      parent.find(".tabs a").removeClass("active");
      parent.find(".item").removeClass("active");
      $(this).addClass("active");
      parent.find(`.tabs a[href="#${target}"]`).addClass("active");
    });
  }
}

setupTabs();
tabControl();

let resizeTimer;
$(window).on("resize", function () {
  clearTimeout(resizeTimer);
  resizeTimer = setTimeout(tabControl, 250);
});

// Open & Close Form
function openForm() {
  document.getElementById("myForm").style.display = "block";
  $("#myForm .myForm-top-form").append($(".form-top-new"));
  $(".contactFormHolder .contactForm").hide();
}

function closeForm() {
  $(".contactFormHolder .contactForm").show().append($(".form-top-new"));
  document.getElementById("myForm").style.display = "none";
}
