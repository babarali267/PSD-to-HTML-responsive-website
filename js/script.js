const search_btn  = document.getElementById('search_btn')
const search_div = document.querySelector('.search_input')

const toggle_Btn  = document.getElementById('toggle_Btn')
const nav = document.querySelector('.navbar .nav nav')


search_btn.addEventListener('click',()=>{
    if(search_div.style.display === "none"){
        search_div.style.display = "block"
    }else{
        search_div.style.display = "none"

    }
})


toggle_Btn.addEventListener('click',()=>{
    if(nav.style.display === "none"){
        nav.style.display = "block"
    }else{
        nav.style.display = "none"

    }
})

// 

// scroll animation

function reveal() {
    var reveals = document.querySelectorAll(".reveal");
  
    for (var i = 0; i < reveals.length; i++) {
      var windowHeight = window.innerHeight;
      var elementTop = reveals[i].getBoundingClientRect().top;
      var elementVisible = 150;
  
      if (elementTop < windowHeight - elementVisible) {
        reveals[i].classList.add("active");
      } else {
        reveals[i].classList.remove("active");
      }
    }
  }
  
  window.addEventListener("scroll", reveal);