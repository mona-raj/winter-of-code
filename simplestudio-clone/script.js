// hide or unhide details in services section
const servicesItems = document.getElementsByClassName("service-item-name");
// console.log(servicesItems)
Array.from(servicesItems).forEach((value) => {
    value.addEventListener("click", (e) => {
        let item = e.target;
        // console.log(item);
        let details = item.parentNode.parentNode.children[1];
        if (details.style.display === "block") {
            details.style.display = "none";
        } else {
            details.style.display = "block";
        }
    })
})

// change text opacity on scroll in manifesto section
gsap.registerPlugin(ScrollTrigger);

gsap.to(".text-change", {
    opacity: 1,
    stagger: 2,
    scrollTrigger: {
      trigger: ".section-manifesto",
      start: "top 20%",
      end: "bottom 80%",
      scrub: true,
      markers: true
    },
  })



