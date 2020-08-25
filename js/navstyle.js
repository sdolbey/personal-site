document.addEventListener("DOMContentLoaded", function() {
    //let scroll = window.scrollY;
    const navbar = document.querySelector(".navbar");
    //console.log(navbar);
    //const navbarHeight = navbar.offsetHeight;
    
    const add_class = () => navbar.classList.add("scrolled");
    const remove_class = () => navbar.classList.remove("scrolled");
    
    window.addEventListener('scroll', function() {
        if (window.scrollY >= 1) {
            add_class();
        } else {
            remove_class();
        }
    })
});