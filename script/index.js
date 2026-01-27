const menu = document.getElementById('profileMenu');
menu.style.display = 'none';

document.addEventListener("DOMContentLoaded", function () {
  const sidebar = document.getElementById("sidebar");
  const toggleButton = document.getElementById("toggleSidebar");
  const menu_button = document.getElementById("menu-button");

  toggleButton.addEventListener("click", function () {
    sidebar.classList.toggle("expanded");
    menu_button.classList.toggle("rotate");
  });
});

function toggleMenu() {
  menu.style.display = menu.style.display === "block" ? "none" : "block";
}

document.addEventListener('click', function(event) {
  const isClickInside = document.getElementById('btnProfile').contains(event.target);
  if (!isClickInside) {
    menu.style.display = 'none';
  }
});
//formulario-Kristin
(() => {
    'use strict'

    // Fetch all forms we want to apply custom Bootstrap validation styles to
    const forms = document.querySelectorAll('.needs-validation')

    // Loop over them and prevent submission if invalid
    Array.from(forms).forEach(form => {
      form.addEventListener('submit', event => {
        if (!form.checkValidity()) {
          event.preventDefault()
          event.stopPropagation()
        }
        form.classList.add('was-validated')
      }, false)
    })
  })()
