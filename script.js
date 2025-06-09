document.addEventListener("DOMContentLoaded", function () {
    // Select all pages
    const pages = document.querySelectorAll(".page");
    let currentPageIndex = 0; // Track current page

    // Function to display the correct page
    function showPage(index) {
        pages.forEach((page, i) => {
            page.style.display = i === index ? "block" : "none";
        });
    }

    // Ensure navigation buttons exist before adding event listeners
    const nextButton = document.getElementById("nextPage");
    const prevButton = document.getElementById("prevPage");

    if (nextButton) {
        nextButton.addEventListener("click", function () {
            if (currentPageIndex < pages.length - 1) {
                currentPageIndex++;
                showPage(currentPageIndex);
            }
        });
    }

    if (prevButton) {
        prevButton.addEventListener("click", function () {
            if (currentPageIndex > 0) {
                currentPageIndex--;
                showPage(currentPageIndex);
            }
        });
    }

    // Show the first page initially
    showPage(currentPageIndex);
});
function openDetailsPage(button) {
    let container = button.closest(".service");
    let title = container.querySelector("h2").textContent;
    let fullText = container.querySelector(".full-text").textContent;

    // Store the data in localStorage to retrieve it on the new page
    localStorage.setItem("serviceTitle", title);
    localStorage.setItem("serviceText", fullText);

    // Redirect to the new details page
    window.location.href = "details.html";
}

function openDetailsPage(button) {
    let container = button.closest(".service"); 
    let title = container.querySelector("h2").textContent;
    let fullText = container.querySelector(".full-text").textContent;

    // Store data for retrieval in the new page
    localStorage.setItem("serviceTitle", title);
    localStorage.setItem("serviceText", fullText);

    // Redirect to the details page
    window.location.href = "details.html";
}
document.addEventListener("DOMContentLoaded", function () {
    let readMoreButtons = document.querySelectorAll(".read-more-btn");

    readMoreButtons.forEach(button => {
        button.addEventListener("click", function () {
            console.log("Button clicked!"); // Check if the event is firing
            openDetailsPage(button);
        });
    });
});
