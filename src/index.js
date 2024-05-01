const validateEmail = () => {
  const form = document.getElementById('email-subscription-form');
  const emailInput = document.getElementById('email');
  const email = emailInput.value;
  
  const validation = emailInput.checkValidity();
  if (validation) {
    form.classList.remove('error-state');
    return email;
  }
  
  let message = '';
  if (email === '' || !email) {
    message = 'Email is required';
  } else {
    message = 'Valid email required';
  }

  const errorElement = form.querySelector('span.error-message');
  errorElement.textContent = message;
  form.classList.add('error-state')

  return false;
}

const handleEmailSubmit = (e) => {
  e.preventDefault();
  e.stopPropagation();

  const email = validateEmail();
  if (!email) {
    return;
  }

  const articleSucess = document.querySelector('article.success');
  const strongElement = articleSucess.querySelector('strong');
  strongElement.textContent = email;

  const currentArticle = document.querySelector('article.active');

  currentArticle.classList.toggle('active');
  articleSucess.classList.toggle('active');
}


const onDismissMessage = (e) => {
  const article = e.target.closest('article');
  article.classList.remove('active');

  document.querySelector('article:not(.success)').classList.add('active');
}

document.getElementById('email').addEventListener('input', () => {
  setTimeout(() => {
    validateEmail();
  }, 700);
});

document.getElementById('email-subscription-form').addEventListener('submit', handleEmailSubmit);

document.querySelector('article.success button').addEventListener('click', onDismissMessage);
