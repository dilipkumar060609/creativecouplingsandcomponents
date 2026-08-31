document.addEventListener("DOMContentLoaded", function () {

    const revealElements = document.querySelectorAll(".reveal");

    const observer = new IntersectionObserver(
        function (entries) {

            entries.forEach(function (entry) {

                if (entry.isIntersecting) {
                    entry.target.classList.add("visible");
                }

            });

        },
        {
            threshold: 0.15
        }
    );

    revealElements.forEach(function (element) {
        observer.observe(element);
    });

});