//mobile navigation toggle

const navLinks = document.querySelector(".nav-link");
const menuToggle = document.querySelector(".menu-toggle");

if (menuToggle){
    menuToggle.addEventListener("click", ()=> {
        navLinks.classList.toggle("active");
    });
}

const testimonials = [
    {
        text:"CopperTech Solutions fixed my laptop in record time",
        author: "Happy Customer"
    },
    {
        text: "Professional service and affordable pricing",
        author: "Small Business Owner"
    },
    {
        text: "Highly recommend CopperTech for IT support",
        author: "Local Entrepreneur"
    }
];

let currentTestimonial = 0;

const textE1 = document.getElementById("testimonial-text");
const authorE1 = document.getElementById("testimonial-author");

function updateTestimonial(){
    if(!textE1 || !authorE1) return;

    textE1.textContent = testimonials[currentTestimonial].text;
    authorE1.textContent ='${testimonials[currentTestimonial],author}';

    currentTestimonial= (currentTestimonial + 1)% testimonials.length;
}

setInterval(updateTestimonial, 4000);


//contact form
const form = document.getElementById("contactForm");
const statusMsg = document.getElementById("form-status");

if (form){
    form.addEventListener("submit", (e)=>{
        e.preventDefault();

        statusMsg.textContent = "sending message...";
        statusMsg.style.color = "0A2540";

        setTimeout(() =>{
            statusMsg.textContent = "Message sent successfully! we'll get bak to you shortly.";
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