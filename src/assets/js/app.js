// Banner start
$(document).ready(function(){
    let open = true;
    $(".banner").click(function(){
    if(open){
        $(".banner").slideUp("slow");
          open = false;
      }
     else{
        $(".banner").slideDown("slow");
          open = true;
      }
    });
  });

// Banner end

// Navbar start

const menuBtn = document.querySelector('.menu-btn');
const navBlock = document.querySelector('.mobile-nav-block');
const mobileNavList = document.querySelector('.mobile-nav-list');
menuBtn.addEventListener('click', () => {
    menuBtn.classList.toggle('open');
    navBlock.classList.toggle('active');
    mobileNavList.classList.toggle('active');
});

//Navbar end 

// Contact form 

const inputs = document.querySelectorAll('input');
const form = document.querySelector('#contact-form');
const textareas = document.querySelectorAll('textarea');

if (form) {
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        inputs.forEach(input => {
            if (input.value == '' || input.value == null) {
                input.nextElementSibling.classList.add('active');
            } else {
                input.nextElementSibling.classList.remove('active');
            }
        })
        textareas.forEach(textarea => {
            if (textarea.value == '' || textarea.value == null) {
                textarea.nextElementSibling.classList.add('active');
            } else {
                textarea.nextElementSibling.classList.remove('active');
            }
        })
    })
}