
let menu = document.querySelector('#menu-bars');
let navbar = document.querySelector('.navbar');

menu.onclick = () => {
  menu.classList.toggle('fa-times');
  navbar.classList.toggle('active');
}

let section = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header .navbar a');

window.onscroll = () => {
  menu.classList.remove('fa-times');
  navbar.classList.remove('active');

  section.forEach(sec => {

    let top = window.scrollY;
    let height = sec.offsetHeight;
    let offset = sec.offsetTop - 150;
    let id = sec.getAttribute('id');

    if (top => offset && top < offset + height) {
      navLinks.forEach(links => {
        links.classList.remove('active');
        document.querySelector('header .navbar a[href*=' + id + ']').classList.add('active');
      });
    };


  });

}

document.querySelector('#search-icon').onclick = () => {
  document.title = 'searching...'
  document.querySelector('#search-form').classList.toggle('active');
}
document.querySelector('#close').onclick = () => {
  document.title = 'restro'
  document.querySelector('#search-form').classList.remove('active');
}

var swiper = new Swiper(".home-slider", {
  spaceBetween: 30,
  centeredSlides: true,
  autoplay: {
    delay: 7500,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  loop: true,
});

// for review section
var swiper = new Swiper(".review-slider", {
  spaceBetween: 20,
  centeredSlides: true,
  autoplay: {
    delay: 7500,
    disableOnInteraction: false,
  },
  loop: true,
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    640: {
      slidesPerView: 2,
    },
    768: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    },
  },
});

function loader() {
  document.querySelector('.loader-container').classList.add('fade-out');
}

function fadeOut() {
  setInterval(loader, 1000);
}

window.onload = fadeOut;

/*
// card added dynamically

let str = ` `
const cards = [
  { key: 1, name: "saish", price: 100 },
  { key: 2, name: "shri", price: 50 },
]


cards.forEach((ele, index) => {
  let newStr = `<div class="box" id='sai'>
  <a href="#" class="fas fa-heart"></a>
  <a href="#" class="fas fa-eye"></a>
  <img src="Assets/image3.jpg" alt="">
  <h3 id='heading'>tasty food</h3>
  <div class="stars">
      <i class="fas fa-star"></i>
      <i class="fas fa-star"></i>
      <i class="fas fa-star"></i>
      <i class="fas fa-star"></i>
      <i class="fas fa-star"></i>
      <i class="fas fa-star-half-alt"></i>
  </div>
  <span>${ele.name}</span>
  <span id='cardId'>${ele.key}</span>
  <button class="btn" onclick=addToCard(${index})>add to cart</button>
  </div>`
  str += newStr
})

document.querySelector('#manipulated').innerHTML = str


// localstorage demo


// addToCard.addEventListener('click', () => {
//   console.log('mi call ')
// })




const addToCard = (idx) => {
  console.log(cards[idx])

  if (localStorage.getItem('card') === null) {
    let arr = []
    arr.push(cards[idx])
    localStorage.setItem('card', JSON.stringify(arr))
  }
  else {
    let value = localStorage.getItem('card');
    let get = JSON.parse(value)
    get.push(cards[idx])
    localStorage.setItem('card', JSON.stringify(get))

  }
  location.reload();
}


let addToCardStr = ''
let addToCardArr = JSON.parse(localStorage.getItem('card'))

console.log(addToCardArr)


addToCardArr.forEach((ele, index) => {
  let newStr = `<div class="box" id='sai'>
  <a href="#" class="fas fa-heart"></a>
  <a href="#" class="fas fa-eye"></a>
  <h3 id='heading'>tasty food</h3>
  <span>${ele.name}</span>
  <span id='cardId'>${ele.key}</span>
  <button class="btn" onclick=RemoveCard(${index})>-</button>
  </div>`
  addToCardStr += newStr

})

document.querySelector('#addToCardSec').innerHTML = addToCardStr


const RemoveCard = (idx) => {
  let value = localStorage.getItem('card');
  let get = JSON.parse(value)
  get.splice(idx, 1)
  localStorage.setItem('card', JSON.stringify(get))
  location.reload();
}

*/

