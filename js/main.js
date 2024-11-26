document.addEventListener("DOMContentLoaded", () => {
    const modal = document.querySelector(".notice-modal");
    const closeButton = document.querySelector(".close-btn");
    const checkbox = document.querySelector("#dont-show-again");

    if (localStorage.getItem("hide") === "true") {
        modal.style.display = "none";
    } else {
        modal.style.display = "block";
        modal.style.opacity = "1";
        modal.style.pointerEvents = "auto";
        modal.style.transition = "opacity 0.5s ease, pointer-events 0.5s ease";
    }

    closeButton.addEventListener("click", () => {
        modal.style.opacity = "0";
        modal.style.pointerEvents = "none";
        setTimeout(() => {
            modal.style.display = "none";
        }, 500);
    });

    checkbox.addEventListener("change", () => {
        if (checkbox.checked) {
            localStorage.setItem("hide", "true");
        } else {
            localStorage.removeItem("hide");
        }
    });
});
