//mobile navigation toggle

const navLinks = document.querySelector(".nav-link");
const menuToggle = document.querySelector(".menu-toggle");

if (menuToggle){
    menuToggle.addEventListener("click", ()=> {
        navLinks.classList.toggle("active");
    });
}

//mini local database
const testimonials = [
    {
        text:"CopperTech Solutions fixed my laptop in record time",
        author: "~ Happy Customer"
    },
    {
        text: "Professional service and affordable pricing",
        author: "~ Small Business Owner"
    },
    {
        text: "Highly recommend CopperTech for IT support",
        author: "~ Local Entrepreneur"
    }
];

let currentTestimonial = 0;

const textE1 = document.getElementById("testimonial-text");
const authorE1 = document.getElementById("testimonial-author");

function updateTestimonial(){
    if(!textEl || !authorEl) return;

    textEl.textContent = testimonials[currentTestimonial].text;
    authorEl.textContent = testimonials[currentTestimonial].author;

    //%testimonials.length means loop back to 0 when reaching the end
    currentTestimonial= (currentTestimonial + 1)% testimonials.length;
}

//the time it will take to run (updateTestimonial) or switch the testinmonials
setInterval(updateTestimonial, 4000);


//contact form
const form = document.getElementById("contactForm");
const statusMsg = document.getElementById("form-status");

if (form){
    form.addEventListener("submit", (e)=>{
        e.preventDefault();

        statusMsg.textContent = "sending message...";
        statusMsg.style.color = "#0A2540";

        setTimeout(() =>{
            statusMsg.textContent = "Message sent successfully! we'll get back to you shortly.";
            statusMsg.style.color = "green";
            form.reset();
        }, 1500);
    });
}


//smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor =>{
    anchor.addEventListener("click", function(e){
        e.preventDefault();
        document
        .querySelector(this.getAttribute("href"))
        .scrollIntoView({
            behavior: "smooth"
        });
    });
});