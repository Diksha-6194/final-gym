// window.addEventListener("load", init);

// function init() {
//   gsap.to()
//   const panel = document.getElementById("panel");
//   const panelTitle = document.getElementById("panelTitle");
//   const exerciseList = document.getElementById("exerciseList");

//   const exercises = {
//     chest: [
//       { name: "Bench Press", sets: "4x8" },
//       { name: "Push Ups", sets: "3x15" },
//       { name: "Incline Dumbbell Press", sets: "3x10" }
//     ],
//     shoulders: [
//       { name: "Overhead Press", sets: "3x10" },
//       { name: "Lateral Raises", sets: "3x12" },
//       { name: "Arnold Press", sets: "3x10" }
//     ],
//     biceps: [
//       { name: "Barbell Curl", sets: "4x12" },
//       { name: "Hammer Curl", sets: "3x10" }
//     ],
//     abs: [
//       { name: "Crunches", sets: "3x20" },
//       { name: "Plank", sets: "3x1 min" }
//     ],
//     legs: [
//       { name: "Squats", sets: "4x10" },
//       { name: "Lunges", sets: "3x12 each leg" }
//     ],
//     back: [
//       { name: "Pull Ups", sets: "3x8" },
//       { name: "Deadlifts", sets: "4x6" }
//     ]
//   };

//   // Hover Effect (only highlights fade in/out, base always visible)
//   document.querySelectorAll(".hotspot").forEach(hs => {
//     hs.addEventListener("mouseenter", () => {
//       const part = hs.dataset.part;
//       gsap.to(`.${part}`, { opacity: 1, duration: 0.2 });
//     });

//     hs.addEventListener("mouseleave", () => {
//       const part = hs.dataset.part;
//       gsap.to(`.${part}`, { opacity: 0, duration: 0.4 });
//     });

//     // Click Event -> Show workout panel
//     hs.addEventListener("click", () => {
//       const selected = hs.dataset.part;
//       panel.classList.add("active");
//       panelTitle.innerText =
//         selected.charAt(0).toUpperCase() + selected.slice(1) + " Workouts";

//       exerciseList.innerHTML = "";
//       exercises[selected].forEach(ex => {
//         const div = document.createElement("div");
//         div.classList.add("exercise");
//         div.innerHTML = `<strong>${ex.name}</strong><br>Sets: ${ex.sets}`;
//         exerciseList.appendChild(div);
//       });
//     });
//   });
// }

// function goBack() {
//   document.getElementById("panel").classList.remove("active");
// }

window.addEventListener("load", init);

    function init() {
      const panel = document.getElementById("panel");
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

      //  Glow animation for all parts on load
      const tl = gsap.timeline();
      tl.to(".highlight", {
        opacity: 1,
        duration: 0.5,
        stagger: 0.4
      })
      .to(".highlight", {
        opacity: 0,
        duration: 0.5,
        stagger: 0.2
      });

      // Hover Effect
      document.querySelectorAll(".hotspot").forEach(hs => {
        hs.addEventListener("mouseenter", () => {
          const part = hs.dataset.part;
          gsap.to(`.${part}`, { opacity: 1, duration: 0.2 });
        });

        hs.addEventListener("mouseleave", () => {
          const part = hs.dataset.part;
          gsap.to(`.${part}`, { opacity: 0, duration: 0.4 });
        });

        // Click Event -> Show workout panel
        hs.addEventListener("click", () => {
          const selected = hs.dataset.part;
          panel.classList.add("active"); // adding a new class named active to panel
          panelTitle.innerText =
          //basically for converting chest to C+hest=Chest
            selected.charAt(0).toUpperCase() + selected.slice(1) + " Workouts";

          exerciseList.innerHTML = ""; //empty the list eg agar pehele chest thi or aab legs click kari to
          exercises[selected].forEach(ex => {
            const div = document.createElement("div");// ek new div mai display hogi excer
            div.classList.add("exercise");
            //<strong added to make the text bold>
            div.innerHTML = `<strong>${ex.name}</strong><br>Sets: ${ex.sets}`;
            exerciseList.appendChild(div);
          });
        });
      });
    }

    function goBack() {
      document.getElementById("panel").classList.remove("active");
    }
