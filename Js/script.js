document.addEventListener('DOMContentLoaded', function () {
    const quoteElement = document.getElementById('quote');
    const newQuoteBtn = document.getElementById('newQuoteBtn');
  
    // Function to fetch a random quote
    const fetchQuote = async () => {
      try {
        const response = await fetch('https://api.quotable.io/random');
        const data = await response.json();
        return data.content;
      } catch (error) {
        console.error('Error fetching quote:', error);
        return 'Failed to fetch quote. Please try again later.';
      }
    };
  
    // Function to display the quote
    const displayQuote = async () => {
      const quote = await fetchQuote();
      quoteElement.textContent = quote;
    };
  
    // Display a quote when the page loads
    displayQuote();
  
    // Event listener for the "Get New Quote" button
    newQuoteBtn.addEventListener('click', displayQuote);
  });
  