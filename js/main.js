//mobile navigation toggle

const navLinks = document.querySelector(".nav-links");
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

const textEl = document.getElementById("testimonial-text");
const authorEl = document.getElementById("testimonial-author");

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
    form.addEventListener("submit", async (e)=>{
        e.preventDefault();

        const formData = new FormData(form);

        statusMsg.textContent = "sending message...";
        statusMsg.style.color = "#0A2540";

        try {
            const response = await fetch(form.action, {
                method: form.method,
                body: formData,
                headers: {
                    "Accept": "application/json"
                }
            });
            if (response.ok){
                statusMsg.textContent = "Message sent successfully! we'll get back to you shortly.";
                statusMsg.style.color = "green";
                form.reset();
            } else {
                statusMsg.textContent = "Failed to send message. Please try again later.";
                statusMsg.style.color = "red";
            }
        } catch (error) {
            statusMsg.textContent = "An error occurred. Please try again later.";
            statusMsg.style.color = "red";
        }
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