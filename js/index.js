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
});


// - - - - - - - - - - - - - - INTRO - - - - - - - - - - - - - - - - -

const words = [
    { word: "Discover", desc: "Understand the problem through research and insights." },
    { word: "Define", desc: "Identify goals, user needs, and product requirements" },
    { word: "Ideate", desc: "Sketch ideas, create flows, and wireframes" },
    { word: "Design", desc: "Build UI components, layouts, and interactive prototypes" },
    { word: "Test", desc: "Validate with users and gather feedback" },
    { word: "Deliver", desc: "Prepare handoff with design specs and assets" },
    { word: "Refine", desc: "Iterate and improve based on results and feedback" }
  ];
  
  const root = document.getElementById('root');
  
  words.forEach(item => {
    const container = document.createElement('div');
    container.classList.add('container');
  
    const wordDiv = document.createElement('div');
    wordDiv.classList.add('word');
    wordDiv.innerText = item.word;
  
    const desc = document.createElement('div');
    desc.classList.add('description');
    desc.innerText = item.desc;
  
    container.appendChild(wordDiv);
    container.appendChild(desc);
    root.appendChild(container);
  });
  
  const revealContainers = document.querySelectorAll('.container');
  
  function handleScroll() {
    const triggerBottom = window.innerHeight * 0.85;
  
    revealContainers.forEach(container => {
      const containerTop = container.getBoundingClientRect().top;
  
      if (containerTop < triggerBottom) {
        container.classList.add('visible');
      } else {
        container.classList.remove('visible');
      }
    });
  }
  
  window.addEventListener('scroll', handleScroll);
  window.addEventListener('load', handleScroll);
  
  

