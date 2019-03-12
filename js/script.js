var searchbtn = document.querySelector(".search-hotel__button");
var searchform = document.querySelector(".search-hotel-form");

searchform.classList.add("visually-hidden");

searchbtn.addEventListener("click", function (event) {
    event.preventDefault();
    searchform.classList.toggle("visually-hidden");
  });
