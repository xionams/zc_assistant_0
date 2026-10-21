// Theme toggle — persists preference in localStorage
const themeToggle = document.getElementById('themeToggle');
const toggleIcon = themeToggle.querySelector('.toggle-icon');
const htmlElement = document.documentElement;

// Apply saved theme or default to light
const savedTheme = localStorage.getItem('theme');
if (savedTheme) {
  htmlElement.setAttribute('data-theme', savedTheme);
  toggleIcon.textContent = savedTheme === 'dark' ? '☀️' : '🌙';
} else {
  htmlElement.setAttribute('data-theme', 'light');
}

themeToggle.addEventListener('click', () => {
  const currentTheme = htmlElement.getAttribute('data-theme');
  const newTheme = currentTheme === 'light' ? 'dark' : 'light';

  htmlElement.setAttribute('data-theme', newTheme);
  localStorage.setItem('theme', newTheme);
  toggleIcon.textContent = newTheme === 'dark' ? '☀️' : '🌙';
});

// Set current year in footer
document.getElementById('year').textContent = new Date().getFullYear();
