

$(window).scroll(function() {
    if ($(this).scrollTop() > 20) {
      $('.navbar').addClass('scrolled');
      $('.navbar-link').addClass('a-scrolled');
    } else {
      $('.navbar').removeClass('scrolled');
      $('.navbar-link').removeClass('a-scrolled');
    }
  });


  $(document).ready(function() {
    
     $('.navbar-toggler').click(() => {
     $('.navbar-collapse').toggleClass('show');
       });

    //    $('.next-step').click(function(event) {
    //     event.preventDefault();

    //     console.log('Botón clickeado, pero el formulario no se enviará.');
    // });

  




 });

//  (() => {
//   'use strict'

//   // Fetch all the forms we want to apply custom Bootstrap validation styles to
//   const forms = document.querySelectorAll('.needs-validation')

//   // Loop over them and prevent submission
//   Array.from(forms).forEach(form => {
//     form.addEventListener('submit', event => {
//       if (!form.checkValidity()) {
//         event.preventDefault()
//         event.stopPropagation()
//       }

//       form.classList.add('was-validated')
//     }, false)
//   })
// })()


 var currentStep = 1;
var updateProgressBar;

  function displayStep(stepNumber) {
    if (stepNumber >= 1 && stepNumber <= 8) {
      $(".step-" + currentStep).hide();
      $(".step-" + stepNumber).show();
      currentStep = stepNumber;
      updateProgressBar();
    }
  }

  $(document).ready(function() {
    $('#multi-step-form').find('.step').slice(1).hide();


    (() => {
      'use strict'
    

      const forms = document.querySelectorAll('.needs-validation')
    
    
      Array.from(forms).forEach(form => {
        form.addEventListener('submit', event => {
          if (!form.checkValidity()) {
            event.preventDefault()
            event.stopPropagation()
          }
    
          form.classList.add('was-validated')
          event.preventDefault()
        }, false)
      })
    })()

    $(".next-step").click(function() {
      if (currentStep < 8) {
        $(".step-" + currentStep).addClass("animate__animated animate__fadeOutLeft");
        currentStep++;
        setTimeout(function() {
          $(".step").removeClass("animate__animated animate__fadeOutLeft").hide();
          $(".step-" + currentStep).show().addClass("animate__animated animate__fadeInRight");
          updateProgressBar();
        }, 500);
      }
    });


    $(".prev-step").click(function() {
      if (currentStep > 1) {
        $(".step-" + currentStep).addClass("animate__animated animate__fadeOutRight");
        currentStep--;
        setTimeout(function() {
          $(".step").removeClass("animate__animated animate__fadeOutRight").hide();
          $(".step-" + currentStep).show().addClass("animate__animated animate__fadeInLeft");
          updateProgressBar();
        }, 500);
      }
    });

    updateProgressBar = function() {
      var progressPercentage = ((currentStep - 1) / 7) * 100;
      $(".progress-bar").css("width", progressPercentage + "%");
    }


    var checkbox = document.getElementById('tituloSecundarioNo');
    var miDiv = document.getElementById('secundarioVisible');

    // Agrega un event listener para el cambio del checkbox
    checkbox.addEventListener('change', function() {
        // Si el checkbox está marcado, muestra el div; de lo contrario, ocúltalo
        console.log("funco");
        miDiv.style.display = checkbox.checked ? 'none' : 'block';
    });

    
  });