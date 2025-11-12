// Page load entrance animations
function animateIntro() {
  var tl = gsap.timeline();
  tl.from("nav h1, nav h6, nav button", {
    y: -40,
    duration: 1,
    delay: 0.2,
    opacity: 0,
    stagger: 0.16
  })
  .from(".c1 h1", {
    x: -80,
    opacity: 0,
    duration: 0.5
  })
  .from(".c1 p", {
    x: -50,
    opacity: 0,
    duration: 0.5
  }, "-=0.25")
  .from(".c1 button", {
    x: -70,
    opacity: 0,
    duration: 0.5
  }, "-=0.25")
  .from(".c2 img", {
    opacity: 0,
    x: 60,
    duration: 0.7
  }, "-=0.6")
  .from(".bottom img", {
    opacity: 0,
    y: 30,
    stagger: 0.11
  }, "-=0.3");
}
animateIntro();

// Services scroll animation
gsap.registerPlugin(ScrollTrigger);
let tl2 = gsap.timeline({
  scrollTrigger: {
    trigger: ".section2",
    start: "top 70%",
    end: "bottom 30%",
    marker:true,
    scrub: 2,
    ease: "power2.out"
  }
});
tl2.from(".services h3", {
  x: -70,
  opacity: 0,
  duration: 0.7,
  scale: 1.1
})
.from(".elem.left", {
  x: -100, y: -44, opacity:0, duration:1.1
}, "elem")
.from(".elem-black.right", {
  x: 100, y: -44, opacity:0, duration:1.1
}, "elem")
.from(".elem.line2.left", {
  x: -60, y: -60, opacity:0, duration:1.2
}, "elem2")
.from(".elem-black.line2.right", {
  x: 60, y: 60, opacity:0, duration:1.2
}, "elem2");

// Pricing scroll animation
gsap.from(".pricing-card", {
  scrollTrigger: {
    trigger: ".section3",
    start: "top 85%",
    end: "top 25%",
    marker:true,
    scrub: 1.5
  },
  opacity: 0,
  y: 120,
  stagger: 0.25,
  duration: 1
});
gsap.from(".pricing-footer div", {
  scrollTrigger: {
    trigger: ".pricing-footer",
    start: "top 95%",
    end: "top 60%",
    scrub: 1
  },
  opacity: 0,
  duration: 1,
  y: 50
});

// AI section cards animation
gsap.from(".ai-card", {
  scrollTrigger: {
    trigger: ".section4",
    start: "top 90%",
    end: "top 30%",
    scrub: 2
  },
  opacity: 0,
  scale: 0.7,
  stagger: 0.2,
  ease: "back.out(1.7)"
});

// Testimonials animation
gsap.from(".testimonial-card", {
  scrollTrigger: {
    trigger: ".section5",
    start: "top 92%",
    end: "top 32%",
    scrub: 2
  },
  opacity: 0,
  y: 70,
  stagger: 0.2,
  duration: 1
});




// Smooth scroll handlers for nav buttons
const aboutBtn = document.getElementById("p1"); // About Us
const servicesBtn = document.getElementById("page2");               // Services
const useCaseBtn = document.getElementById("p3"); // Use Cases
const pricingBtn = document.getElementById("p4"); // Pricing
const trainerBtn = document.getElementById("p5"); 


// Scroll to section2 (Services) on "About Us"
aboutBtn.addEventListener("click", () => {
  document.querySelector(".section2").scrollIntoView({ behavior: "smooth" });
});

// Scroll to section3 (Pricing) on "Use Cases"
useCaseBtn.addEventListener("click", () => {
  document.querySelector(".section3").scrollIntoView({ behavior: "smooth" });
});

// Scroll to section4  on "Pricing"
pricingBtn.addEventListener("click", () => {
  document.querySelector(".ai-services").scrollIntoView({ behavior: "smooth" });
});


servicesBtn.addEventListener("click", () => {
  document.location.href="index.html";
});

trainerBtn.addEventListener("click", () => {
  document.querySelector(".trainers-section").scrollIntoView({ behavior: "smooth" });
});




// for local storage
window.addEventListener("DOMContentLoaded", () => {
  const userData = JSON.parse(localStorage.getItem("user"));

  if (userData) {
    document.getElementById("welcome-user").textContent = 
      `Welcome back, ${userData.email}!`;
  } else {
    // if no user found, redirect to login
    window.location.href = "login.html";
  }
});






// ==================== BODY MODEL SCRIPT ====================

window.addEventListener("load", initBodyModel);

function initBodyModel() {
const panel = document.getElementById("bodyPanel");
const panelTitle = document.getElementById("panelTitle");
const exerciseList = document.getElementById("exerciseList");

const exercises = {
  chest: [
    { name: "Bench Press", sets: "4x8" },
    { name: "Push Ups", sets: "3x15" },
    { name: "Incline Dumbbell Press", sets: "3x10" }
  ],
  shoulders: [
    { name: "Overhead Press", sets: "3x10" },
    { name: "Lateral Raises", sets: "3x12" },
    { name: "Arnold Press", sets: "3x10" }
  ],
  biceps: [
    { name: "Barbell Curl", sets: "4x12" },
    { name: "Hammer Curl", sets: "3x10" }
  ],
  abs: [
    { name: "Crunches", sets: "3x20" },
    { name: "Plank", sets: "3x1 min" }
  ],
  legs: [
    { name: "Squats", sets: "4x10" },
    { name: "Lunges", sets: "3x12 each leg" }
  ],
};

// Intro animation: flash highlights
const tl = gsap.timeline({ repeat: 1, yoyo: true });
tl.to(".highlight", {
  opacity: 1,
  duration: 0.5,
  stagger: 0.2,
});

// Hotspot interactivity
document.querySelectorAll(".hotspot").forEach(hs => {
  hs.addEventListener("mouseenter", () => {
    gsap.to(`.${hs.dataset.part}`, { opacity: 1, duration: 0.2 });
  });
  hs.addEventListener("mouseleave", () => {
    gsap.to(`.${hs.dataset.part}`, { opacity: 0, duration: 0.4 });
  });
  hs.addEventListener("click", () => {
    const selected = hs.dataset.part;
    panel.classList.add("active");
    panelTitle.innerText =
      selected.charAt(0).toUpperCase() + selected.slice(1) + " Workouts";
    exerciseList.innerHTML = "";
    exercises[selected].forEach(ex => {
      const div = document.createElement("div");
      div.classList.add("exercise");
      div.innerHTML = `<strong>${ex.name}</strong><br>Sets: ${ex.sets}`;
      exerciseList.appendChild(div);
    });
  });
});
}

function goBack() {
document.getElementById("bodyPanel").classList.remove("active");
}
