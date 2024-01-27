document.addEventListener("DOMContentLoaded", function () {
    var elem = document.querySelectorAll(".elem");

    elem.forEach(function (val) {
        const img = val.querySelector("img");

       
        img.style.transform = "translate(-50%, -50%)";

        val.addEventListener("mouseenter", function () {
            img.style.opacity = 1;
        });

        val.addEventListener("mouseleave", function () {
            img.style.opacity = 0;
        });

        val.addEventListener("mousemove", function (dets) {
            const rect = val.getBoundingClientRect();
            const offsetX = dets.clientX - rect.left;
            const offsetY = dets.clientY - rect.top;

            img.style.transform = `translate(${offsetX}px, ${offsetY}px) translate(-50%, -50%)`;
        });
    });
});
