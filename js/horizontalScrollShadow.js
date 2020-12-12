document.addEventListener("DOMContentLoaded", function() {
    const topObject = document.querySelector(".top-element");
    const scrollable = document.querySelector(".shadow-please");
    
    const add_class = () => topObject.classList.add("scrolled");
    const remove_class = () => topObject.classList.remove("scrolled");
    
    scrollable.addEventListener('scroll', function() {
        if (scrollable.scrollX >= 1) {
            console.log("scrolled!");
            add_class();
        } else {
            remove_class();
        }
    })
});