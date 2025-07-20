document.addEventListener("DOMContentLoaded", async () => {
    const API_URL = "https://www.googleapis.com/books/v1/volumes";
    const API_KEY = "AIzaSyDr4MD-ExS8cCOYx-yqR4aO51h8SExiaHU"; // Replace with your Google API key
    const arrivalsContainer = document.getElementById("arrivals-container");
  
    try {
      const response = await fetch(`${API_URL}?q=new&orderBy=newest&maxResults=10&key=${API_KEY}`);
      const data = await response.json();
  
      const books = (data.items || []).map((item) => {
        const { title, authors, description, imageLinks, previewLink } = item.volumeInfo;
        return {
          title,
          authors: authors?.join(", ") || "Unknown",
          description: description?.substring(0, 100) + "..." || "No description available.",
          thumbnail: imageLinks?.thumbnail || "default-image.jpg",
          link: previewLink || "#",
        };
      });
  
      books.forEach((book) => {
        const bookCard = document.createElement("div");
        bookCard.className = "book";
        bookCard.innerHTML = `
          <img src="${book.thumbnail}" alt="${book.title}">
          <h3>${book.title}</h3>
          <p><strong>Author(s):</strong> ${book.authors}</p>
          <p>${book.description}</p>
          <a href="${book.link}" target="_blank">Read More</a>
        `;
        arrivalsContainer.appendChild(bookCard);
      });
    } catch (error) {
      console.error("Error fetching new arrivals:", error);
      arrivalsContainer.innerHTML = "<p>Failed to load new arrivals. Please try again later.</p>";
    }
  });
  