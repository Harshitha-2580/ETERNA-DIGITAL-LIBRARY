document.addEventListener("DOMContentLoaded", () => {
  const apiKey = "AIzaSyDr4MD-ExS8cCOYx-yqR4aO51h8SExiaHU"; 
  const apiUrl = "https://www.googleapis.com/books/v1/volumes";

  const searchInput = document.getElementById("search-input");
  const searchButton = document.querySelector("#one button");

  searchButton.addEventListener("click", async (event) => {
      event.preventDefault(); 

      const query = searchInput.value.trim();
      if (!query) {
          alert("Please enter a search term.");
          return;
      }

      try {
          const response = await fetch(`${apiUrl}?q=${encodeURIComponent(query)}&key=${apiKey}`);
          const data = await response.json();
          const books = (data.items || []).map(book => {
              const { title, authors, description, imageLinks, previewLink } = book.volumeInfo;
              return {
                  title,
                  authors: authors?.join(", "),
                  description: description?.substring(0, 100) + "...",
                  thumbnail: imageLinks?.thumbnail || "default-image.jpg",
                  link: previewLink || "#"
              };
          });

          sessionStorage.setItem("searchResults", JSON.stringify(books));
          window.location.href = "results.html";
      } catch (error) {
          console.error("Error fetching books:", error);
          alert("An error occurred while fetching books. Please try again later.");
      }
  });
});
