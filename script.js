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

  // Implement your search logic here
  // Example: Searching through an array of data
  const data = ["apple", "banana", "orange", "pear"];
  const results = data.filter(item => item.toLowerCase().includes(query.toLowerCase()));

  // Display the search results
  if (results.length > 0) {
    results.forEach(result => {
      const resultItem = document.createElement("p");
      resultItem.textContent = result;
      searchResults.appendChild(resultItem);
    });
  } else {
    const noResultsMessage = document.createElement("p");
    noResultsMessage.textContent = "No results found.";
    searchResults.appendChild(noResultsMessage);
  }
}


