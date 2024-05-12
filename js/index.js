
window.addEventListener('scroll', change);

function change() {
    const scrollValue = Math.ceil(window.scrollY);
    const nav = document.getElementById('navbar');
    const color = document.querySelectorAll('.navbar .navbar-nav .nav-link');
    const title = document.querySelector('.navbar h2.navbar-brand');
    var navbar =document.querySelector('.navbar')
    var colorI = document.querySelector('.navbar-toggler i');
    if (scrollValue >= 690) {
        nav.classList.add('bg-white');
        title.classList.add('brand-color');
        navbar.classList.add('shadow')
        colorI.classList.remove('color-white');
        color.forEach(item => {
            item.classList.add('black-background');
            item.classList.add('dark-color');
            item.classList.add('after-black-background')
        });
    }else if(scrollValue==0){
        colorI.classList.add('color-white');
    } 
    else {
        colorI.classList.add('color-white');
        nav.classList.remove('bg-white');
        title.classList.remove('brand-color');
        navbar.classList.remove('shadow')
        color.forEach(item => {
            item.classList.remove('black-background');
            item.classList.remove('dark-color');
            item.classList.remove('after-black-background')
        });
    }
}