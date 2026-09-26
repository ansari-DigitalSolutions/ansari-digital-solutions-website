const menuToggle = document.querySelector(".menu-toggle");
const navWrap = document.querySelector(".nav-wrap");
const navLinks = document.querySelectorAll(".nav-links a");

if (menuToggle && navWrap) {
    menuToggle.addEventListener("click", () => {
        const isOpen = navWrap.classList.toggle("open");
        document.body.classList.toggle("menu-open", isOpen);
        menuToggle.setAttribute("aria-expanded", String(isOpen));
        menuToggle.setAttribute("aria-label", isOpen ? "Close navigation" : "Open navigation");
    });

    navLinks.forEach((link) => {
        link.addEventListener("click", () => {
            navWrap.classList.remove("open");
            document.body.classList.remove("menu-open");
            menuToggle.setAttribute("aria-expanded", "false");
            menuToggle.setAttribute("aria-label", "Open navigation");
        });
    });
}

const header = document.querySelector(".site-header");

window.addEventListener("scroll", () => {
    if (!header) return;
    header.classList.toggle("scrolled", window.scrollY > 12);
}, { passive: true });

/* GA4 conversion tracking */
function trackLead(method) {
    if (typeof gtag === "function") {
        gtag("event", "generate_lead", {
            method,
            transport_type: "beacon"
        });
    }
}

document.querySelectorAll('a[href^="mailto:"]').forEach((link) => {
    link.addEventListener("click", () => trackLead("email"));
});

document.querySelectorAll('a[href^="tel:"]').forEach((link) => {
    link.addEventListener("click", () => trackLead("phone"));
});

document.querySelectorAll('a[href^="https://wa.me/"]').forEach((link) => {
    link.addEventListener("click", () => trackLead("whatsapp"));
});
