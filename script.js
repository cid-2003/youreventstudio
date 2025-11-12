// Mobile menu toggle
const navBtn = document.querySelector(".navBtn");
const topNav = document.querySelector(".top-nav");
const navSection = document.querySelector(".nav-section");

navBtn.addEventListener("click", () => {
  topNav.classList.toggle("active");
  const icon = navBtn.querySelector("i");
  if (topNav.classList.contains("active")) {
    icon.classList.remove("fa-bars");
    icon.classList.add("fa-times");
  } else {
    icon.classList.remove("fa-times");
    icon.classList.add("fa-bars");
  }
});

// Fermer le menu lorsqu'on clique sur un lien sur affichage téléphone
const navLinks = document.querySelectorAll(".top-nav a");
navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    topNav.classList.remove("active");
    const icon = navBtn.querySelector("i");
    icon.classList.remove("fa-times");
    icon.classList.add("fa-bars");
  });
});

window.addEventListener("scroll", () => {
  if (window.scrollY > 50) {
    navSection.classList.add("scrolled");
  } else {
    navSection.classList.remove("scrolled");
  }
});
//Fin mobile menu


// lightbox
var lightbox = new SimpleLightbox(".gallery a", {
  /*options*/
});


// Annimation hero Scroll effect
let ticking = false;

function updateParallax() {
  const scrolled = window.pageYOffset;
  const parallaxBg = document.getElementById("parallaxBg");
  const element1 = document.getElementById("element1");
  const element2 = document.getElementById("element2");
  const element3 = document.getElementById("element3");

  // Parallax du background (plus lent)
  if (parallaxBg) {
    parallaxBg.style.transform = `translateY(${scrolled * 0.4}px)`;
  }

  // Parallax des éléments décoratifs
  if (element1) {
    element1.style.transform = `translate(${scrolled * 0.15}px, ${
      scrolled * 0.25
    }px) rotate(${scrolled * 0.05}deg)`;
  }
  if (element2) {
    element2.style.transform = `translate(${-scrolled * 0.12}px, ${
      scrolled * 0.18
    }px) rotate(${-scrolled * 0.03}deg)`;
  }
  if (element3) {
    element3.style.transform = `translate(${scrolled * 0.08}px, ${
      -scrolled * 0.2
    }px) rotate(${scrolled * 0.04}deg)`;
  }

  ticking = false;
}

function requestParallaxUpdate() {
  if (!ticking) {
    window.requestAnimationFrame(updateParallax);
    ticking = true;
  }
}

// Écouteur de scroll
window.addEventListener("scroll", requestParallaxUpdate);

// Parallax au mouvement de la souris (desktop uniquement)
if (window.innerWidth > 768) {
  document.addEventListener("mousemove", (e) => {
    const moveX = (e.clientX - window.innerWidth / 2) * 0.015;
    const moveY = (e.clientY - window.innerHeight / 2) * 0.015;

    const element1 = document.getElementById("element1");
    const element2 = document.getElementById("element2");
    const element3 = document.getElementById("element3");

    if (element1) {
      element1.style.transform = `translate(${moveX}px, ${moveY}px)`;
    }
    if (element2) {
      element2.style.transform = `translate(${-moveX * 1.2}px, ${
        -moveY * 1.2
      }px)`;
    }
    if (element3) {
      element3.style.transform = `translate(${moveX * 0.8}px, ${
        -moveY * 0.8
      }px)`;
    }
  });
}

// Animation de l'indicateur de scroll qui disparaît au scroll
window.addEventListener("scroll", () => {
  const indicator = document.querySelector(".scroll-indicator");
  if (indicator) {
    if (window.scrollY > 100) {
      indicator.style.opacity = "0";
    } else {
      indicator.style.opacity = "0.8";
    }
  }
});
//// Annimation hero Scroll effect

// Section feature(section one Nos Services)  animation au scroll
const observerOptions = {
  threshold: 0.2,
  rootMargin: "0px 0px -100px 0px",
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("active");
    }
  });
}, observerOptions);

document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));

// Effet parallax léger sur les cartes au mouvement de la souris sur ordinateur
if (window.innerWidth > 768) {
  document.querySelectorAll(".service-card").forEach((card) => {
    card.addEventListener("mousemove", (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      const centerX = rect.width / 2;
      const centerY = rect.height / 2;

      const moveX = (x - centerX) / 25;
      const moveY = (y - centerY) / 25;

      card.style.transform = `translateY(-10px) rotateX(${-moveY}deg) rotateY(${moveX}deg)`;
    });

    card.addEventListener("mouseleave", () => {
      card.style.transform = "translateY(0) rotateX(0) rotateY(0)";
    });
  });
}
//Fin section feature; nos services

//Bento grid section trois annimation au scroll
const regarderOptions = {
  threshold: 0.1,
  rootMargin: "0px 0px -50px 0px",
};

const regarder = new IntersectionRegarder((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.style.animationPlayState = "running";
    }
  });
}, regarderOptions);

document.querySelectorAll(".insta-imgs > div").forEach((el) => {
  el.style.animationPlayState = "paused";
  regarder.regarde(el);
});

// Effet 3D tilt au hover (desktop uniquement)
if (window.innerWidth > 768) {
  document.querySelectorAll(".insta-imgs > div").forEach((card) => {
    card.addEventListener("mousemove", (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      const centerX = rect.width / 2;
      const centerY = rect.height / 2;

      const moveX = (x - centerX) / 20;
      const moveY = (y - centerY) / 20;

      card.style.transform = `translateY(-5px) perspective(1000px) rotateX(${-moveY}deg) rotateY(${moveX}deg)`;
    });

    card.addEventListener("mouseleave", () => {
      card.style.transform =
        "translateY(0) perspective(1000px) rotateX(0) rotateY(0)";
    });
  });
}
//Fin bento grid annimation