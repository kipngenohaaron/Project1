// Retrieve necessary elements from the DOM
const searchInput = document.getElementById("search-input");
const searchButton = document.getElementById("search-button");
const searchResults = document.getElementById("search-results");

// Add event listener to the search button
searchButton.addEventListener("click", performSearch);

// Function to perform the search
function performSearch() {
  // Clear previous search results
  searchResults.innerHTML = "";

  // Retrieve the search query from the input field
  const query = searchInput.value;

  // Make an API request
  fetch(`https://api.example.com/search?q=${query}`)
    .then(response => response.json())
    .then(data => {
      // Handle the API response
      if (data.length > 0) {
        data.forEach(result => {
          const resultItem = document.createElement("p");
          resultItem.textContent = result;
          searchResults.appendChild(resultItem);
        });
      } else {
        const noResultsMessage = document.createElement("p");
        noResultsMessage.textContent = "No results found.";
        searchResults.appendChild(noResultsMessage);
      }
    })
    .catch(error => {
      // Handle any errors
      console.error(error);
    });
}
