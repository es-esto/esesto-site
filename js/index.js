// - - - - - - - - - - - - - - FORM - - - - - - - - - - - - - - - - - - -

function sendEmail() {
    Email.send({
        Host: "smtp.yourisp.com",
        Username: "username",
        Password: "password",
        To: 'them@website.com',
        From: document.getElementById("email").value,
        Subject: "New Contact Form Enquiry",
        Body: "Name: " + document.getElementById("name").value
            + "<br> Email: " + document.getElementById("email").value
            + "<br> Phone nº: " + document.getElementById("phone").value
            + "<br> Message: " + document.getElementById("message").value
    }).then(
        message => alert("Message Sent Succesfully")
    );
}

console.log("✅ JS is loaded");


// - - - - - - - - - - - - - - MAIN INTERACTIONS - - - - - - - - - - - - - - - - -

document.addEventListener("DOMContentLoaded", function () {
    // MOTION LINE INIT
    const motionline1 = document.querySelector('.motionLinePrime');
    const section = document.querySelector('.about');

    function checkScroll() {
        const sectionTop = section.getBoundingClientRect().top;
        const sectionBottom = section.getBoundingClientRect().bottom;
        const windowHeight = window.innerHeight;

        if (sectionTop < windowHeight && sectionBottom > 0) {
            motionline1.classList.add('animateBottom');
        } else {
            motionline1.classList.remove('animateBottom');
        }
    }

    window.addEventListener('scroll', checkScroll);


    document.addEventListener("DOMContentLoaded", function () {
        const tooltip = document.getElementById("tooltip");
        const steps = document.querySelectorAll(".step");
    
        function revealTooltipIfVisible() {
            let foundVisible = false;
    
            for (const step of steps) {
                const rect = step.getBoundingClientRect();
                const stepMidY = rect.top + rect.height / 2;
                const inView = stepMidY >= window.innerHeight * 0.2 && stepMidY <= window.innerHeight * 0.8;
    
                if (inView && !foundVisible) {
                    foundVisible = true;
    
                    const scrollTop = window.scrollY || document.documentElement.scrollTop;
                    const scrollLeft = window.scrollX || document.documentElement.scrollLeft;
    
                    const tooltipText = step.getAttribute("data-info");
                    tooltip.textContent = tooltipText;
    
                    // Show tooltip and measure
                    tooltip.style.display = "block";
                    tooltip.style.opacity = "0";
                    tooltip.style.left = "0px";
                    void tooltip.offsetWidth; // Force reflow
    
                    const tooltipHeight = tooltip.offsetHeight;
                    const tooltipWidth = tooltip.offsetWidth;
    
                    const top = rect.top + scrollTop + rect.height / 2 - tooltipHeight / 2;
                    const left = rect.left + scrollLeft + rect.width + 16;
    
                    tooltip.style.top = `${top}px`;
                    tooltip.style.left = `${left}px`;
                    tooltip.style.opacity = "1";
                    tooltip.style.transform = "translateY(0)";
                    break;
                }
            }
    
            if (!foundVisible) {
                tooltip.style.opacity = "0";
                tooltip.style.left = "-9999px";
            }
        }
    
        window.addEventListener("scroll", revealTooltipIfVisible);
    });
    
      

    

    window.addEventListener('scroll', revealTooltipIfVisible);
});
  