const quoteText = document.getElementById('quote-text');
const refreshButton = document.getElementById('refresh-button');
const shareButton = document.getElementById('share-button');
const saveButton = document.getElementById('save-button');

const QUOTES_API_URL = 'https://ron-swanson-quotes.herokuapp.com/v2/quotes';

// Fetch a random Ron Swanson quote from the API
async function fetchQuote() {
    try {
        const response = await fetch(QUOTES_API_URL);
        const data = await response.json();
        return data[0];
    } catch (error) {
        console.error('Error fetching quote:', error);
        return 'An error occurred while fetching the quote.';
    }
}

// Display the fetched quote
async function displayQuote() {
    const quote = await fetchQuote();
    quoteText.textContent = `"${quote}"`;
}

// Event listener for the Refresh button
refreshButton.addEventListener('click', displayQuote);

// Event listener for the Share button
shareButton.addEventListener('click', () => {
    const quote = quoteText.textContent;
    const shareUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(quote)}`;
    window.open(shareUrl, '_blank');
});

// Event listener for the Save button (placeholder functionality)
saveButton.addEventListener('click', () => {
    alert('Saving functionality will be implemented in the future.');
});

// Initial display of a quote when the page loads
displayQuote();
