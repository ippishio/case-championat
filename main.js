

const swiper_tinder = new Swiper('.swiper', {
    direction: 'vertical',
    loop: true,
    slidesPerView: 2,
    spaceBetween : 100,
    // effect: "coverflow",
    // coverflowEffect: {
    //     rotate: 15,
    //     stretch: 25,
    //     depth: 230,
    //     modifier: 1.2,
    //     slideShadows: false,
    // },
});

const swiper = document.querySelector('.swiper').swiper
var choosed_page = 1
const button_color = "#f59f2f"
const page_numbers = { 1: "screen-home", 2: "screen-search", 3: "screen-tinder", 4: "screen-profile" }
document.getElementById("screen-home").style.visibility = "visible";
document.getElementById("home").style.backgroundColor = button_color
document.getElementById("home").addEventListener("click", function () {
    const buttons = document.querySelectorAll('.navbar-button');
    buttons.forEach(button => {
        button.style.backgroundColor = "#FFFFFF";
    })
    document.getElementById("home").style.backgroundColor = button_color
    document.getElementById(page_numbers[choosed_page]).style.visibility = "hidden";
    choosed_page = 1
    document.getElementById(page_numbers[choosed_page]).style.visibility = "visible";
})
document.getElementById("search").addEventListener("click", function () {
    const buttons = document.querySelectorAll('.navbar-button');
    buttons.forEach(button => {
        button.style.backgroundColor = "#FFFFFF";
    })
    document.getElementById("search").style.backgroundColor = button_color
    document.getElementById(page_numbers[choosed_page]).style.visibility = "hidden";
    choosed_page = 2
    document.getElementById(page_numbers[choosed_page]).style.visibility = "visible";
})
document.getElementById("profile").addEventListener("click", function () {
    const buttons = document.querySelectorAll('.navbar-button');
    buttons.forEach(button => {
        button.style.backgroundColor = "#FFFFFF";
    })
    document.getElementById("profile").style.backgroundColor = button_color
    document.getElementById(page_numbers[choosed_page]).style.visibility = "hidden";
    choosed_page = 4
    document.getElementById(page_numbers[choosed_page]).style.visibility = "visible";
})
document.getElementById("tinder").addEventListener("click", function () {
    const buttons = document.querySelectorAll('.navbar-button');
    buttons.forEach(button => {
        button.style.backgroundColor = "#FFFFFF";
    })
    document.getElementById("tinder").style.backgroundColor = button_color
    document.getElementById(page_numbers[choosed_page]).style.visibility = "hidden";
    choosed_page = 3
    document.getElementById(page_numbers[choosed_page]).style.visibility = "visible";
})
