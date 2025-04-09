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


    // TOOLTIP ON SCROLL
    // ✅ Console message for debugging
console.log("✅ JS is loaded");

// 📍 This runs after the DOM is ready
document.addEventListener("DOMContentLoaded", function () {
    const tooltip = document.getElementById('tooltip');
    const steps = document.querySelectorAll('.step');

    function revealTooltipIfVisible() {
        let tooltipShown = false;

        for (const step of steps) {
            const rect = step.getBoundingClientRect();
            const stepMidY = rect.top + rect.height / 2;
            const isInView = stepMidY > 0 && stepMidY < window.innerHeight;

            if (isInView && !tooltipShown) {
                const scrollTop = window.scrollY || document.documentElement.scrollTop;
                const scrollLeft = window.scrollX || document.documentElement.scrollLeft;

                const tooltipText = step.getAttribute('data-info');
                tooltip.textContent = tooltipText;

                // Make tooltip temporarily visible to measure size
                tooltip.style.opacity = 0;
                tooltip.style.display = 'block';
                tooltip.style.left = '0';

                void tooltip.offsetWidth; // force reflow

                const tooltipWidth = tooltip.offsetWidth;
                const tooltipHeight = tooltip.offsetHeight;

                const top = rect.top + scrollTop + (rect.height - tooltipHeight) / 2;
                const left = rect.right + scrollLeft + 20; // 20px to the right

                tooltip.style.top = `${top}px`;
                tooltip.style.left = `${left}px`;
                tooltip.style.opacity = 1;
                tooltip.style.transform = 'translateY(0)';

                tooltipShown = true;
                break;
            }
        }

        if (!tooltipShown) {
            tooltip.style.opacity = 0;
            tooltip.style.left = '-9999px';
        }
    }

    window.addEventListener('scroll', revealTooltipIfVisible);
    revealTooltipIfVisible(); // trigger on page load
});

    

    window.addEventListener('scroll', revealTooltipIfVisible);
});
  