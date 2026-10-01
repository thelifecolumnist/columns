document.addEventListener("DOMContentLoaded", () => {

    /* =========================
       CAT HOVER MESSAGE
    ========================= */

    const hoverAvatarSent = [
        "The quick brown fox jumps over the lazy dog.",
        "Coding in JavaScript is highly rewarding.",
        "Artificial intelligence shapes the modern world.",
        "Always remember to test your functions completely.",
        "An apple a day keeps the doctor away."
    ];


    const avatarContainer =
        document.getElementById("avatar-container");

    const hoverAvatarDiv =
        document.getElementById("hoverAvatar");


    if (avatarContainer && hoverAvatarDiv) {

        avatarContainer.addEventListener("mouseenter", () => {

            const randomIndex =
                Math.floor(
                    Math.random() * hoverAvatarSent.length
                );

            hoverAvatarDiv.textContent =
                hoverAvatarSent[randomIndex];

            hoverAvatarDiv.classList.add("show");
        });


        avatarContainer.addEventListener("mouseleave", () => {

            hoverAvatarDiv.classList.remove("show");

        });
    }


    /* =========================
       LIGHT / DARK MODE
    ========================= */

    const bgbtn =
        document.getElementById("bgbtn");


    /*
       Read the saved theme when the
       page loads.
    */

    const savedTheme =
        localStorage.getItem("theme");


    if (savedTheme === "dark") {

        document.body.classList.add("dark-mode");

    }


    /*
       Theme button exists on either
       index.html or blog1.html.
    */

    if (bgbtn) {

        bgbtn.addEventListener("click", () => {

            document.body.classList.toggle("dark-mode");


            const isDarkMode =
                document.body.classList.contains("dark-mode");


            /*
               Save the theme globally.

               This is the important part:
               localStorage belongs to the
               entire website, not just one page.
            */

            localStorage.setItem(
                "theme",
                isDarkMode ? "dark" : "light"
            );

        });

    }


    function countWords(str) {
        return str.trim().split(/\s+/).length;
    }


    const blogCards = document.querySelectorAll(".blog-head");


    blogCards.forEach((card) => {

        const description = card.querySelector(".blog-desc");
        const readTime = card.querySelector(".read-time");
        const wordCount = countWords(description.textContent);
        const minutes = Math.ceil(wordCount / 250);
        readTime.textContent = minutes + " min read";

    });


});