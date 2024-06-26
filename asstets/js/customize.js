
$(document).ready(function () {
    $('.banner').owlCarousel({
      loop: true,
      margin: 10,
      nav: true,
      autoplay:true,
        autoplayTimeout:2000,
        autoplayHoverPause:false,
      responsive: {
        0: {
          items: 1
        },
        600: {
          items: 1
        },
        1000: {
          items: 1
        }
      }
    });
  });


  $(document).ready(function () {
    $('.univercitySlider').owlCarousel({
      loop: true,
      margin: 10,
      nav: true,
      autoplay:true,
      autoplayTimeout:2000,
      autoplayHoverPause:false,

      responsive: {
        0: {
          items: 1
        },
        600: {
          items: 2
        },
        1000: {
          items: 3
        }
      }
    });
  });

  $(document).ready(function () {
    $('.topClleges').owlCarousel({
      loop: true,
      margin: 10,
      nav: true,
      autoplay:true,
      autoplayTimeout:2000,
      autoplayHoverPause:false,

      responsive: {
        0: {
          items: 1
        },
        600: {
          items: 2
        },
        1000: {
          items: 3
        }
      }
    });
  });


  $(document).ready(function () {
    $('.states').owlCarousel({
      loop: true,
      margin: 40,
      nav: true,
      autoplay:true,
      autoplayTimeout:3000,
      autoplayHoverPause:false,

      responsive: {
        0: {
          items: 1
        },
        600: {
          items: 3
        },
        1000: {
          items: 7
        }
      }
    });
  });


  $(document).ready(function () {
    $('.tranding').owlCarousel({
      loop: true,
      margin: 10,
      nav: true,

      responsive: {
        0: {
          items: 2
        },
        600: {
          items: 2
        },
        1000: {
          items: 5
        }
      }
    });
  });


  $(document).ready(function () {
    $('.topCollections').owlCarousel({
      loop: true,
      margin: 10,
      nav: true,
      autoplay:true,
      autoplayTimeout:2000,
      autoplayHoverPause:false,

      responsive: {
        0: {
          items: 1
        },
        600: {
          items: 2
        },
        1000: {
          items: 3
        }
      }
    });
  });


  $(document).ready(function () {
    $('.popularExam').owlCarousel({
      loop: true,
      margin: 10,
      nav: true,

      responsive: {
        0: {
          items: 1
        },
        600: {
          items: 2
        },
        1000: {
          items: 3
        }
      }
    });
  });

  $(document).ready(function () {
    $('.abord').owlCarousel({
      loop: true,
      margin: 10,
      nav: true,
      autoplay:true,
      autoplayTimeout:2000,
      autoplayHoverPause:false,

      responsive: {
        0: {
          items: 1
        },
        600: {
          items: 2
        },
        1000: {
          items: 3
        }
      }
    });
  });

  $(document).ready(function () {
    $('.sikshapedia').owlCarousel({
      loop: true,
      margin: 10,
      nav: true,

      responsive: {
        0: {
          items: 1
        },
        600: {
          items: 2
        },
        1000: {
          items: 3
        }
      }
    });
  });
  

  function scrollToTop() {
  // Scroll to top logic
  rootElement.scrollTo({
    top: 0,
    behavior: "smooth"
  })
}





$(".newsStories").owlCarousel({
  autoplay: false,
  loop: true,
  margin: 30,
  dots: false,
  slideTransition: "linear",
  autoplayTimeout: 4500,
  autoplayHoverPause: true,
  autoplaySpeed: 4500,
  responsive: {
    0: {
      items: 1
    },
    500: {
      items: 1
    },
    600: {
      items: 2
    },
    800: {
      items: 3
    },
    1200: {
      items: 4
    }
  }
});

$(".coursesIcon").owlCarousel({
  autoplay: true,
  loop: true,
  margin: 5,
  dots: false,
  slideTransition: "linear",
  autoplayTimeout: 4500,
  autoplayHoverPause: true,
  autoplaySpeed: 4500,
  responsive: {
    0: {
      items: 2
    },
    500: {
      items: 3
    },
    600: {
      items: 5
    },
    800: {
      items: 8
    },
    1200: {
      items: 10
    }
  }
});

$(document).ready(function(){
  $('.navbar-toggler').click(function(){
      $('.navbar-collapse').slideToggle(300);
  });
  
  smallScreenMenu();
  let temp;
  function resizeEnd(){
      smallScreenMenu();
  }

  $(window).resize(function(){
      clearTimeout(temp);
      temp = setTimeout(resizeEnd, 100);
      resetMenu();
  });
});


const subMenus = $('.sub-menu');
const menuLinks = $('.menu-link');

function smallScreenMenu(){
  if($(window).innerWidth() <= 992){
      menuLinks.each(function(item){
          $(this).click(function(){
              $(this).next().slideToggle();
          });
      });
  } else {
      menuLinks.each(function(item){
          $(this).off('click');
      });
  }
}

function resetMenu(){
  if($(window).innerWidth() > 992){
      subMenus.each(function(item){
          $(this).css('display', 'none');
      });
  }
}


//nurshing menu start

const nurshing = document.getElementById("nurshingMenu")
let nurshingsub = document.querySelector(".nurshingSubMenu");
nurshing.addEventListener('click', function(){
  if (nurshingsub.style.display === "none") {
    nurshingsub.style.display = "block"; 
  }
  else {
    nurshingsub.style.display = "none";
  }
}); 


//engineering menu start

const engineering = document.getElementById("engineeringMenu")
let engineeringsub = document.querySelector(".engineeringSubMenu");
engineering.addEventListener('click', function(){
  if (engineeringsub.style.display === "none") {
    engineeringsub.style.display = "block"; 
  }
  else {
    engineeringsub.style.display = "none";
  }
}); 

//nurshing menu start

const pharmacy = document.getElementById("pharmacyMenu")
let pharmacysub = document.querySelector(".pharmacySubMenu");
pharmacy.addEventListener('click', function(){
  if (pharmacysub.style.display === "none") {
    pharmacysub.style.display = "block"; 
  }
  else {
    pharmacysub.style.display = "none";
  }
}); 

//medical menu start

const medical = document.getElementById("medicalMenu")
let medicalsub = document.querySelector(".medicalSubMenu");
medical.addEventListener('click', function(){
  if (medicalsub.style.display === "none") {
    medicalsub.style.display = "block"; 
  }
  else {
    medicalsub.style.display = "none";
  }
}); 

//PARAMEDICAL menu start

const paramedical = document.getElementById("paramedicalgMenu")
let paramedicalsub = document.querySelector(".paramedicalgSubMenu");
paramedical.addEventListener('click', function(){
  if (paramedicalsub.style.display === "none") {
    paramedicalsub.style.display = "block"; 
  }
  else {
    paramedicalsub.style.display = "none";
  }
}); 

//law menu start

const law = document.getElementById("lawMenu")
let lawsub = document.querySelector(".lawSubMenu");
law.addEventListener('click', function(){
  if (lawsub.style.display === "none") {
    lawsub.style.display = "block"; 
  }
  else {
    lawsub.style.display = "none";
  }
}); 

//management menu start

const management = document.getElementById("managementMenu")
let managementsub = document.querySelector(".managementSubMenu");
management.addEventListener('click', function(){
  if (managementsub.style.display === "none") {
    managementsub.style.display = "block"; 
  }
  else {
    managementsub.style.display = "none";
  }
}); 













// document.getElementsByClassName("nurshing").onclick = function() {
//   var secondDiv = document.getElementsByClassName("nurshingMenu");
//   if (secondDiv.style.display === "none") {
//       secondDiv.style.display = "block";
//   } else {
//       secondDiv.style.display = "none";
//   }
// };