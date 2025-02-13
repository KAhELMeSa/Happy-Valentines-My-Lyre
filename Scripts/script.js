document.getElementById("yes").addEventListener("click", function () {
    // Show the loading screen
    showLoadingScreen();

    setTimeout(() => {
        // Hide Valentine Box and display the menu
        document.getElementById("valentineBox").style.display = "none";
        document.getElementById("loadingScreen").classList.remove("active");
        const menu = document.getElementById("menu");
        menu.style.display = "block";
    }, 2000); // Simulate a loading time of 2 seconds
});

document.getElementById("no").addEventListener("click", function() {
    // Shrink the "No" button
    this.classList.add("shrink");
});




// Function to show the loading screen
function showLoadingScreen() {
    const loadingScreen = document.getElementById("loadingScreen");
    loadingScreen.classList.add("active");

    // Start the dots animation
    const dots = document.getElementById("dots");
    let count = 0;
    const dotInterval = setInterval(() => {
        dots.textContent = ".".repeat(count % 3 + 1);
        count++;
    }, 500);

    setTimeout(() => {
        clearInterval(dotInterval);
        loadingScreen.classList.remove("active");
    }, 2000); // Hide loading screen after 2 seconds
}

// Function to simulate loading when an option is clicked
function showLoading(targetURL) {
    showLoadingScreen();

    setTimeout(() => {
        window.location.href = targetURL;
    }, 2000); // Simulate a loading time of 2 seconds
}
