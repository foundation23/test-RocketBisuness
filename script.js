const prev = document.querySelector(".prev")
const next = document.querySelector(".next")
const items = document.querySelectorAll(".slider__item")
let maxItems = document.querySelector(".slider__navigation__pageMax")
let currentItem = document.querySelector(".slider__navigation__page")

let itemIndex = 0;

maxItems.innerHTML = items.length

currentItem.innerHTML = 1

function show() {
    items[itemIndex].classList.add("block");
    currentItem.innerHTML = itemIndex + 1
}

function hideItem() {
    items[itemIndex].classList.remove("block");
}

function nextItem() {
    hideItem()
    itemIndex++;
    if (itemIndex > items.length - 1) {
        itemIndex = 0;
    }
    show()
}

function prevItem() {
    hideItem()
    itemIndex--;
    if (itemIndex < 0) {
        itemIndex = items.length - 1;
    }
    show()
}

prev.addEventListener("click", prevItem)
next.addEventListener("click", nextItem)


let menu = document.querySelector(".header__top__menu")
let close = document.querySelector(".header__top__menu-close")
let area = document.querySelector(".header__popup__area")

function openMenu() {
    menu.classList.add("block");
    close.classList.add("active");
}

function closeMenu() {
    close.classList.remove("active");
    menu.classList.remove("block");
}

menu.addEventListener("click", openMenu)
close.addEventListener("click", closeMenu)
area.addEventListener("click", closeMenu)

const form = document.getElementById("form")
const areaForm = document.getElementById("area")

function openForm() {
    form.style.opacity = '1'
    form.style.visibility = 'visible';
}

function closeForm(){
    form.style.opacity = '0'
    form.style.visibility = 'hidden';
}

areaForm.addEventListener("click", closeForm)

