$(document).ready(function(){

  // ********* Hamburger Menu  *********

  $('.hamburger').on('click',function(){
  $('.nav-list').toggleClass('active');
  $('body').toggleClass('active');
});


    // Link to content body

    const navlinks = document.querySelectorAll('.nav-link');
    const ul = document.querySelector('.nav-list');

    navlinks.forEach(navlink =>{
      navlink.addEventListener('click',function(){
          ul.classList.remove('active');
      })
    });


}) 
