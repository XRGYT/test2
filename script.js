// Sample data for articles
const articles = [
  {
    title: 'Recent News',
    content: 'We are developing this site to provide un-biased news. we are not funded by any government or anyone and we wish to provide legitimate information.',
    image: 'new.png'
  },
  {
    title: 'News Coming Soon',
    content: '',
    image: ''
  }
];

// Function to add articles to the HTML
function displayArticles() {
  const articlesContainer = document.getElementById('articles');

  // Loop through the articles data
  for (let i = 0; i < articles.length; i++) {
    const article = articles[i];

    // Create article element
    const articleElement = document.createElement('article');

    // Create title element
    const titleElement = document.createElement('h2');
    titleElement.textContent = article.title;
    articleElement.appendChild(titleElement);

    // Create content element
    const contentElement = document.createElement('p');
    contentElement.textContent = article.content;
    articleElement.appendChild(contentElement);

    // Create image element
    const imageElement = document.createElement('img');
    imageElement.src = article.image;
    articleElement.appendChild(imageElement);

    // Append article element to articles container
    articlesContainer.appendChild(articleElement);
  }
}

// Call the displayArticles function when the page loads
window.addEventListener('DOMContentLoaded', displayArticles);
