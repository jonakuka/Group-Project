document.addEventListener("DOMContentLoaded", () => {
    const adoptButtons = document.querySelectorAll(".adopt-button");
    const modal = document.getElementById("adoption-modal");
    const closeModal = document.querySelector(".close");
    const petInfo = document.getElementById("pet-info");
    const adoptionForm = document.getElementById("adoption-form");

    adoptButtons.forEach(button => {
        button.addEventListener("click", function () {
            let pet = this.parentElement;
            let name = pet.getAttribute("data-name");
            let age = pet.getAttribute("data-age");
            let breed = pet.getAttribute("data-breed");

            petInfo.innerHTML = `Adopting <strong>${name}</strong> (Age: ${age}, Breed: ${breed})`;
            modal.style.display = "flex";
        });
    });

    closeModal.addEventListener("click", () => {
        modal.style.display = "none";
    });

    window.addEventListener("click", (e) => {
        if (e.target === modal) {
            modal.style.display = "none";
        }
    });

    adoptionForm.addEventListener("submit", (e) => {
        e.preventDefault();
        alert("Adoption form submitted successfully!");
        modal.style.display = "none";
    });
});


const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");


menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("active");
});