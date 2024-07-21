document.addEventListener('DOMContentLoaded', () => {
    console.log("BigMProperties website loaded!");

    let slideIndex = 0;
    const slides = document.getElementsByClassName("mySlides");

    function showSlides() {
        for (let i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
            slides[i].style.transform = "translateX(100%)";
        }

        slideIndex++;
        if (slideIndex > slides.length) { slideIndex = 1 }

        slides[slideIndex - 1].style.display = "block";
        slides[slideIndex - 1].style.transform = "translateX(0%)";

        setTimeout(showSlides, 3000); // Change image every 3 seconds
    }

    showSlides();
    
    // Form validation
    const form = document.querySelector("form");
    form.addEventListener("submit", function(event) {
        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;
        const phone = document.getElementById("phone").value;
        const message = document.getElementById("message").value;

        if (!name || !email || !phone || !message) {
            alert("All fields are required.");
            event.preventDefault();
        }
    });
});

