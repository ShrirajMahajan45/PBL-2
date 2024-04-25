
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



// add to cart start

window.onscroll = () => {
  menu.classList.remove('fa-times');
  navbar.classList.remove('active');
}

document.querySelector('#cart-icon').onclick = () => {
  document.title = 'Shoping  Cart'
  document.querySelector('#cart-section').classList.toggle('active');
}

document.querySelector('#cart-close').onclick = () => {
  document.querySelector('#cart-section').classList.remove('active');
}
// add to cart end



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


// card added dynamically
/*

let str = ` `
const cards = [
  { key: 1, name: "saish", price: 100 },
  { key: 2, name: "shri", price: 50 },
]


cards.forEach((ele, index) => {
  let newStr = 
  `<div class="box" id='sai'>
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

*/

// localstorage demo


// addToCard.addEventListener('click', () => {
//   console.log('mi call ')
// })

let rep;
let c = 0;


function counter() {
  console.log("function");
  if (rep === 0) {
    rep++;
    console.log("c:", c);
    console.log("rep:", rep);
    return c;
  }
  else if (rep != 0) {
    c = c + 1;
    console.log("c:", c);
    return c;
  }

}

function showTotal(x) {
  console.log("x:", x)

  return x;
}


const addToCard = (key, name, price, imgUrl) => {
  if (localStorage.getItem('card') === null) {    // localstorage branch container name 'card'
    let arr = [];
    c = 0;
    rep = 0;
    totalModify = 0;
    let total = 0;
    total = Number(price);
    arr.push({ key, name, price, imgUrl, total })  // pushing 
    localStorage.setItem('card', JSON.stringify(arr))
    localStorage.setItem('total', total)
    
  }
  else {
    let value = localStorage.getItem('card');
    let get = JSON.parse(value);


    let prvtotal =Number(localStorage.getItem('total'))+Number(price)

    get.push({ key, name, price, imgUrl, total })

    localStorage.setItem('card', JSON.stringify(get))
    localStorage.setItem('total', prvtotal)

    showTotal(total)
  
    
  }
  location.reload();
}


let addToCardStr = ''
let addToCardArr = JSON.parse(localStorage.getItem('card'))





addToCardArr?.forEach((ele, index) => {

  let newStr =
    `<div class="item-list">
      <img src='${ele.imgUrl}' alt="">

      <div class="info-box">
          <h1 id="item-name">${ele.name}</h1>
          <h1 id="no-item">1</h1>
          <h3 id="remove-single-item" onclick="RemoveCard(${ele.key})">Remove</h3>
          <h2 id="item-price">${ele.price}</h2>
      </div>
  </div>`
  addToCardStr += newStr

})

document.querySelector('#cardItems').innerHTML = addToCardStr
document.querySelector('#total-price').innerHTML =localStorage.getItem('total');



const RemoveCard = (key) => {
  let itemIdx;
  let value = localStorage.getItem('card');
  let get = JSON.parse(value)
  get.forEach((ele,idx)=>{
      if(key === ele.key){
        itemIdx=idx;
      }
  })
  get.splice(itemIdx, 1)
  localStorage.setItem('card', JSON.stringify(get))
  location.reload();
}

const removeAll = () => {
  const check = confirm('are you sure to delete items from add to card')
  if (check) {
    localStorage.clear()
    location.reload();
  }
}

