let btnMenu = document.getElementById('btn-menu');
let mainNav = document.getElementById('main-nav');
btnMenu.addEventListener('click', function(){
mainNav.classList.toggle('mostrar');
});

const slider = document.querySelector("#slider");
let sliderSection = document.querySelectorAll(".slider__section");
let sliderSectionLast = sliderSection[sliderSection.length -1];

const btnLeft = document.querySelector("#btn-left");
const btnRight = document.querySelector("#btn-right");

slider.insertAdjacentElement('afterbegin', sliderSectionLast);

function Next() {
  let sliderSectionFirst = document.querySelectorAll(".slider__section")[0];
  slider.style.marginLeft = "-200%";
  slider.style.transition = "all 0.5s";
  setTimeout(function(){
    slider.style.transition = "none";
    slider.insertAdjacentElement('beforeend', sliderSectionFirst);
    slider.style.marginLeft = "-100%";
  }, 500);
}

function Prev() {
  let sliderSection = document.querySelectorAll(".slider__section");
  let sliderSectionLast = sliderSection[sliderSection.length -1];
  slider.style.marginLeft = "0";
  slider.style.transition = "all 0.5s";
  setTimeout(function(){
    slider.style.transition = "none";
    slider.insertAdjacentElement('afterbegin', sliderSectionLast);
    slider.style.marginLeft = "-100%";
  }, 500);
}

btnRight.addEventListener('click', function(){
  Next();
});

btnLeft.addEventListener('click', function(){
  Prev();
});

setInterval(function(){
  Next();
}, 5000);

let cart = [];
let cartTotal = 0;

const cartBtn = document.getElementById('cart-btn');
const cartModal = document.getElementById('cart-modal');
const closeBtn = document.getElementsByClassName('close')[0];
const cartElement = document.getElementById('cart-items');
const cartTotalElement = document.getElementById('cart-total');
const cartCountElement = document.getElementById('cart-count');
const products = document.querySelectorAll('.product');



products.forEach(product => {
    product.querySelector('.product__icon').addEventListener('click', () => {
        const name = product.querySelector('.product__title').innerText;
        const price = parseInt(product.querySelector('.product__price').dataset.price);
        addItemToCart(name, price);
    });
});
const sliderBuyButtons = document.querySelectorAll('.slider__section .btn-shop');
sliderBuyButtons.forEach(button => {
  button.addEventListener('click', () => {
      const productContainer = button.closest('.slider__section');
      const productName = productContainer.querySelector('.slider__title').textContent;
      const productPrice = parseInt(productContainer.querySelector('.slider__txt').textContent.replace(/\D/g, ''));
      addItemToCart(productName, productPrice);
  });
});

cartBtn.onclick = function() {
    cartModal.style.display = "block";
}

closeBtn.onclick = function() {
    cartModal.style.display = "none";
}

window.onclick = function(event) {
    if (event.target === cartModal) {
        cartModal.style.display = "none";
    }
}

function addItemToCart(name, price) {
    const item = cart.find(item => item.name === name);
    if (item) {
        item.quantity += 1;
    } else {
        cart.push({ name, price, quantity: 1 });
    }

    updateCart();
}

function updateCart() {
    cartElement.innerHTML = '';

    if (cart.length === 0) {
        cartElement.innerHTML = '<p>El carrito está vacío</p>';
    } else {
        cart.forEach(item => {
            const itemElement = document.createElement('li');
            itemElement.innerHTML = `
                ${item.name} x ${item.quantity} - $${item.price * item.quantity}
                <button onclick="removeItemFromCart('${item.name}')">Eliminar</button>
            `;
            cartElement.appendChild(itemElement);
        });
    }

    cartTotal = cart.reduce((total, item) => total + item.price * item.quantity, 0);
    cartTotalElement.innerText = cartTotal;
    cartCountElement.innerText = cart.reduce((count, item) => count + item.quantity, 0);
}

function removeItemFromCart(name) {
    const itemIndex = cart.findIndex(item => item.name === name);
    if (itemIndex !== -1) {
        cart.splice(itemIndex, 1);
    }

    updateCart();
}



