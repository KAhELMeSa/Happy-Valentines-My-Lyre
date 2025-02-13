console.log("JavaScript is running.");

document.addEventListener("DOMContentLoaded", function () {
    const modal = document.getElementById("imageModal");
    const modalImg = document.getElementById("modalImage");
    const closeBtn = document.querySelector(".close");

    // Ensure modal is hidden on page load
    modal.style.display = "none";

    // Get all images in the gallery
    const galleryImages = document.querySelectorAll(".gallery-image");

    // Add click event to each image
    galleryImages.forEach(image => {
        image.addEventListener("click", function () {
            modalImg.src = this.src;
            modal.style.display = "flex"; // Show the modal
        });
    });

    // Close modal when clicking the close button
    closeBtn.addEventListener("click", function () {
        modal.style.display = "none";
    });

    // Close modal when clicking outside the image
    modal.addEventListener("click", function (event) {
        if (event.target !== modalImg && event.target !== closeBtn) {
            modal.style.display = "none";
        }
    });
});
