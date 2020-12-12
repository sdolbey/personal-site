document.addEventListener("DOMContentLoaded", function() {
    const navbar = document.querySelector(".navbar");
    
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