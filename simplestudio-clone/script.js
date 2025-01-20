// const logoSVG = document.querySelector("svg g path");

// const color = logoSVG.getAttribute("fill");

// console.log(logoSVG);

// logoSVG.setAttribute("fill", "#cd1111")

const servicesItems = document.getElementsByClassName("service-item-name");
console.log(servicesItems)
Array.from(servicesItems).forEach((value) => {
    value.addEventListener("click", (e) => {
        let item = e.target;
        console.log(item);
        let details = item.parentNode.parentNode.children[1];
        if (details.style.display === "block") {
            details.style.display = "none";
        } else {
            details.style.display = "block";
        }
    })
})


