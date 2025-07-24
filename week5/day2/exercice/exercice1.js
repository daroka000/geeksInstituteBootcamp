const apiUrl = 'https://api.giphy.com/v1/gifs/search?q=hilarious&rating=g&api_key=hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My';
// Fetch data from the Giphy API
fetch(apiUrl)
  .then(response => {
    if (!response.ok) {
      // If response status is not OK (200–299), throw an error
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    // Parse and return the JSON response
    return response.json();
  })
  .then(data => {
    // Log the full JavaScript object received
    console.log('Giphy API Response:', data);
  })
  .catch(error => {
    // Log any errors that occur during fetch or parsing
    console.error('Fetch error:', error);
  });
