const myButton = document.getElementById('newQuote');
const quoteHTML = document.getElementById('quoteHTML');
const authorHTML = document.getElementById('authorHTML');

myButton.onclick = function () {
  const options = {
    method: 'GET',
    headers: { 'X-Api-Key': 'JTa0DkfKzE2ByEqfLLYUXA==LIPp1E1X53jKDZG5' },
  };

  fetch('https://api.api-ninjas.com/v1/quotes', options)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      quoteHTML.innerHTML = `"${data[0].quote}"`;
      authorHTML.innerHTML = `Author: ${data[0].author}`;
    })
    .catch((err) => console.error(err));
};
