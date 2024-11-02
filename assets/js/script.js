function myFunction() {
  const invitation = document.querySelector("#invitation");
  invitation.classList.remove("d-none");
  invitation.scrollIntoView({behavior:"smooth", block: "start"});
}

// Intersection Observer to handle scroll-triggered animations
document.addEventListener("DOMContentLoaded", function () {
const animatedElements = document.querySelectorAll(".animated");

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
      }
    });
  },
  { threshold: 0 }
);

animatedElements.forEach((element) => {
  observer.observe(element);
});
});