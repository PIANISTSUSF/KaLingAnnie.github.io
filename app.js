const observer = new IntersectionObserver((entries) =>{
    entries.forEach((entry) => {
        console.log(entry)
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        } else {
            entry.target.classList.remove('show');
        }
    });
});
const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el) => observer.observe(el));


let navbar = document.querySelector('navbar');
let menu = document.querySelector('menu');
menubar.onClick = () => {
    menu.classList.toggle('bx-x');
    navbar.classList.toggle('open');
}

