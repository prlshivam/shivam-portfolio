/* =========================================================
   MOBILE NAVIGATION
========================================================= */

const menuButton = document.getElementById("menu-button");
const navMenu = document.getElementById("nav-menu");

menuButton.addEventListener("click", () => {

    navMenu.classList.toggle("active");

});


/* Close mobile menu after clicking a link */

const navLinks = document.querySelectorAll("#nav-menu a");

navLinks.forEach(link => {

    link.addEventListener("click", () => {

        navMenu.classList.remove("active");

    });

});


/* =========================================================
   CURRENT YEAR
========================================================= */

document.getElementById("year").textContent =
    new Date().getFullYear();


/* =========================================================
   NAVBAR EFFECT
========================================================= */

const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {

    if (window.scrollY > 50) {

        navbar.style.background =
            "rgba(7, 11, 18, 0.95)";

    } else {

        navbar.style.background =
            "rgba(7, 11, 18, 0.75)";

    }

});


/* =========================================================
   SCROLL REVEAL
========================================================= */

const revealElements =
    document.querySelectorAll(
        ".research-card, .project-card, .note-card, .contact-card, .timeline-item"
    );


const revealObserver = new IntersectionObserver(
    (entries) => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.style.opacity = "1";
                entry.target.style.transform =
                    "translateY(0)";

                revealObserver.unobserve(entry.target);

            }

        });

    },
    {
        threshold: 0.15
    }
);


revealElements.forEach(element => {

    element.style.opacity = "0";

    element.style.transform =
        "translateY(30px)";

    element.style.transition =
        "opacity 0.7s ease, transform 0.7s ease";

    revealObserver.observe(element);

});


/* =========================================================
   ACTIVE NAVIGATION LINK
========================================================= */

const sections =
    document.querySelectorAll("section[id]");

const navigationLinks =
    document.querySelectorAll("nav a");


window.addEventListener("scroll", () => {

    let currentSection = "";

    sections.forEach(section => {

        const sectionTop =
            section.offsetTop - 150;

        if (window.scrollY >= sectionTop) {

            currentSection =
                section.getAttribute("id");

        }

    });


    navigationLinks.forEach(link => {

        link.style.color = "";

        if (
            link.getAttribute("href") ===
            `#${currentSection}`
        ) {

            link.style.color =
                "rgb(84, 199, 232)";

        }

    });

});


/* =========================================================
   RESEARCH CARD INTERACTION
========================================================= */

const researchCards =
    document.querySelectorAll(".research-card");

researchCards.forEach(card => {

    card.addEventListener("mouseenter", () => {

        card.style.transform =
            "translateY(-8px)";

    });

    card.addEventListener("mouseleave", () => {

        card.style.transform =
            "translateY(0)";

    });

});


/* =========================================================
   TERMINAL ANIMATION
========================================================= */

const terminalOutputs =
    document.querySelectorAll(".terminal-output");

terminalOutputs.forEach((line, index) => {

    line.style.opacity = "0";

    setTimeout(() => {

        line.style.opacity = "1";

        line.style.transition =
            "opacity 0.8s ease";

    }, 700 + index * 700);

});


/* =========================================================
   HERO PARTICLE MOVEMENT
========================================================= */

document.addEventListener("mousemove", event => {

    const x =
        (event.clientX / window.innerWidth - 0.5) * 20;

    const y =
        (event.clientY / window.innerHeight - 0.5) * 20;


    document.querySelectorAll(".particle").forEach(
        (particle, index) => {

            const multiplier =
                (index + 1) * 0.4;

            particle.style.transform =
                `translate(${x * multiplier}px,
                            ${y * multiplier}px)`;

        }
    );

});


/* =========================================================
   SMOOTH INTERNAL LINKS
========================================================= */

document.querySelectorAll('a[href^="#"]').forEach(
    link => {

        link.addEventListener("click", function (event) {

            const target =
                document.querySelector(
                    this.getAttribute("href")
                );

            if (target) {

                event.preventDefault();

                target.scrollIntoView({
                    behavior: "smooth"
                });

            }

        });

    }
);