var h2s = document.querySelectorAll("h2");
h2s.forEach(h2 => {
    h2.addEventListener("click", (e) => {
        e.target.classList.toggle("active");

        var panel = e.target.nextElementSibling;
        if (panel.style.display === "block") {
            panel.style.display = "none";
        } else {
            panel.style.display = "block";
        }
    });
});