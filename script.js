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

  // Perform article submission
  submitArticle(title, content, image)
    .then(() => {
      e.target.reset();
      // Refresh the news articles after submission
      fetchNewsArticles();
    })
    .catch(error => {
      console.error('Article submission error:', error);
    });
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

function submitArticle(title, content, image) {
    // Perform article submission logic (e.g., send request to server to save article)
    return new Promise((resolve, reject) => {
      // Simulating successful submission for demonstration purposes
      setTimeout(() => {
        resolve();
      }, 100);
    });
  }
  
