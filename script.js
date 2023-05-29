const newsContainer = document.getElementById('newsContainer');
const adminLoginForm = document.getElementById('adminLoginForm');
const newsForm = document.getElementById('newsForm');
const articleForm = document.getElementById('articleForm');

adminLoginForm.addEventListener('submit', e => {
  e.preventDefault();

  const username = e.target.elements.username.value;
  const password = e.target.elements.password.value;

  // Perform authentication
  authenticateAdmin(username, password)
    .then(() => {
      adminLoginForm.style.display = 'none';
      newsForm.style.display = 'block';
    })
    .catch(error => {
      console.error('Authentication error:', error);
    });
});

articleForm.addEventListener('submit', e => {
  e.preventDefault();

  const title = e.target.elements.title.value;
  const content = e.target.elements.content.value;
  const image = e.target.elements.image.files[0];

  // Display the new article immediately
  displayNewArticle(title, content, image);

  e.target.reset();
});

function authenticateAdmin(username, password) {
  // Perform authentication logic (e.g., send request to server for verification)
  return new Promise((resolve, reject) => {
    // Simulating successful authentication for demonstration purposes
    if (username === 'admin' && password === 'password') {
      resolve();
    } else {
      reject('Invalid credentials');
    }
  });
}

function displayNewArticle(title, content, image) {
  const articleElement = document.createElement('div');
  articleElement.classList.add('article');
  
  const titleElement = document.createElement('h2');
  titleElement.textContent = title;
  
  const contentElement = document.createElement('p');
  contentElement.textContent = content;
  
  articleElement.appendChild(titleElement);
  articleElement.appendChild(contentElement);
  
  if (image) {
    const imageElement = document.createElement('img');
    imageElement.src = URL.createObjectURL(image);
    articleElement.appendChild(imageElement);
  }
  
  newsContainer.prepend(articleElement);
}
