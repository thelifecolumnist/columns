const contactForm = document.getElementById("contactForm");
const modal = document.getElementById("success-modal");
const closeModalBtn = document.getElementById("close-modal");

if (contactForm && modal && closeModalBtn) {
    contactForm.addEventListener("submit", async function (e) {
        e.preventDefault();

        const submitBtn = this.querySelector('button[type="submit"]');
        submitBtn.classList.add("btn-loading");

        const formData = new FormData(this);

        try {
            const response = await fetch(
                "https://formspree.io/f/mdkqvaba",
                {
                    method: "POST",
                    body: formData,
                    headers: {
                        Accept: "application/json"
                    }
                }
            );

            if (response.ok) {
                contactForm.reset();
                modal.classList.add("active");
            } else {
                let data = null;

                try {
                    data = await response.json();
                } catch {}

                if (data && data.errors) {
                    alert(
                        data.errors
                            .map(error => error.message)
                            .join(", ")
                    );
                } else {
                    alert("There was a problem submitting your form.");
                }
            }
        } catch (error) {
            alert("Network error. Please check your internet connection.");
        } finally {
            submitBtn.classList.remove("btn-loading");
        }
    });

    closeModalBtn.addEventListener("click", () => {
        modal.classList.remove("active");
    });

    modal.addEventListener("click", (e) => {
        if (e.target === modal) {
            modal.classList.remove("active");
        }
    });
}