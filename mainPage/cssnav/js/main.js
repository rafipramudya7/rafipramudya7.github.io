document.addEventListener('DOMContentLoaded', (event) => {
    const navMenu = document.getElementById('nav-menu'),
          toggleMenu = document.getElementById('nav-toggle'),
          closeMenu = document.getElementById('nav-close');

    /*SHOW*/ 

    $("#nav-toggle").click(function () {
        // $("#line-progress").css("width", "33%");
        $("#nav-menu").addClass("show");
      });

    /*HIDDEN*/
closeMenu.addEventListener('click', ()=>{
    navMenu.classList.remove('show')
})

    /*===== ACTIVE AND REMOVE MENU =====*/
    const navLink = document.querySelectorAll('.nav__link');   

    function linkAction(){
        /*Active link*/
        navLink.forEach(n => n.classList.remove('active'));
        this.classList.add('active');

        /*Remove menu mobile*/
        navMenu.classList.remove('show');
    }
    navLink.forEach(n => n.addEventListener('click', linkAction));
});
