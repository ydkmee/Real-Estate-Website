'use strict';


/**
 * navbar toggle in mobile
 */

const /** {NodeElement} */ $navbar = document.querySelector("[data-navbar]");
const /** {NodeElement} */ $navToggler = document.querySelector("[data-nav-toggler]");

$navToggler.addEventListener("click", () => $navbar.classList.toggle("active"));



/**
 * Header scroll state
 */

const /** {NodeElement} */ $header = document.querySelector("[data-header]");

window.addEventListener("scroll", e => {
  $header.classList[window.scrollY > 50 ? "add" : "remove"]("active");
});



/**
 * Add to favorite button toggle
 */

const /** {NodeList} */ $toggleBtns = document.querySelectorAll("[data-toggle-btn]");

$toggleBtns.forEach($toggleBtn => {
  $toggleBtn.addEventListener("click", () => {
    $toggleBtn.classList.toggle("active");
  });
});

const form = document.getElementById('housing-search-form');
const searchResults = document.getElementById('search-results');

form.addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent the default form submission

    // Get the user's search criteria
    const wantTo = form.elements['want-to'].value;
    const propertyType = form.elements['property-type'].value;
    const location = form.elements['location'].value;

    // Here, you would typically make an AJAX request to your server to fetch search results.
    // For this example, we'll just display a message with the selected criteria.
    searchResults.innerHTML = `
        <p>Search Criteria:</p>
        <p>Want to: ${wantTo}</p>
        <p>Property type: ${propertyType}</p>
        <p>Location: ${location}</p>
    `;
});