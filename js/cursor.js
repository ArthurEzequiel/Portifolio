const cursorDot = document.querySelector('[data-cursor-dot]'); 
const cursorOutline = document.querySelector('[data-cursor-outline]'); 


window.addEventListener("mousemove", function (e) { 
    const posX = e.clientX;
    const posY = e.clientY;

    cursorDot.style.left = `${posX}px`;
    cursorDot.style.top = `${posY}px`;

    // cursorOutline.style.left = `${posX}px`;
    // cursorOutine.style.top = `${posy}px`;

    cursorOutline.animate({
        left: `${posX}px`,
        top: `${posY}px`
    }, { duration: 1000, fill: "forwards" });
    cursorDot.animate({
        left: `${posX}px`,
        top: `${posY}px`
    }, { duration: 500, fill: "forwards" });
});

