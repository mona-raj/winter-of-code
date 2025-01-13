document.addEventListener("mouseover", (event) => {
    const eyes = document.querySelectorAll(".eye");
    const irises = document.querySelectorAll(".iris");

    // console.log(typeof eyes);

    Array.from(eyes).forEach((element, index) => {
        const iris = irises[index];
        const irisRect = iris.getBoundingClientRect();

        // console.log(irisRect);

        // coordinates of centre of iris
        const irisCentreX = irisRect.x + irisRect.width/2;
        const irisCentreY = irisRect.y + irisRect.height/2;

        // distance between mouse and centre of iris
        const distanceX = event.clientX - irisCentreX;
        const distanceY = event.clientY - irisCentreY;

        const angle = Math.atan2(distanceX, distanceY);

        const distance = Math.min(Math.sqrt(distanceX*distanceX + distanceY*distanceY), 20);
        
        // calculate distance by which to move iris
        const irisMoveX = Math.cos(angle) * distance;
        const irisMoveY = Math.sin(angle) * distance;

        iris.style.transform = `translate(${irisMoveX}px, ${irisMoveY}px)`
    })
})