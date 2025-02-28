let menu = document.querySelector('.menu-icon');
let navbar = document.querySelector('.menu');


menu.onclick = () => {
    navbar.classList.toggle('active')
    menu.classList.toggle('move');
    bell.classList.remove('active');
}

//Notification
let bell = document.querySelector('.notification');

document.querySelector('#bell-icon').onclick = () =>{
    bell.classList.toggle('active');
}
// swiper
var swiper = new Swiper(".trending-content", {
    slidesPerView: 1,
    spaceBetween: 10,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    autoplay:{
        delay:5000,
        disableOnInteraction: false,

    },
    breakpoints: {
      640: {
        slidesPerView: 2,
        spaceBetween: 10,
      },
      768: {
        slidesPerView: 3,
        spaceBetween: 15,
      },
      1068: {
        slidesPerView: 4,
        spaceBetween: 20,
      },
    },
  });
  
  function postComment() {
    let commentInput = document.getElementById("commentInput");
    let commentsList = document.getElementById("commentsList");

    if (commentInput.value.trim() === "") {
        alert("Comment cannot be empty!");
        return;
    }

    let commentDiv = document.createElement("div");
    commentDiv.classList.add("comment");
    commentDiv.textContent = commentInput.value;
    
    commentsList.prepend(commentDiv);
    
    commentInput.value = ""; // Clear the input field after posting
}
