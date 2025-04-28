document.getElementById('downloadButton').addEventListener('click', function(event) {
    event.preventDefault(); // prevent the a tag from jumping
    window.location.href = '/docs/CV-2024.pdf';
  });
  
  document.getElementById('themeToggle').addEventListener('click', function(event) {
    event.preventDefault();
    const currentTheme = document.documentElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'light' ? 'dark' : 'light';
    document.documentElement.setAttribute('data-theme', newTheme);
    this.textContent = newTheme === 'light' ? '🌙' : '☀️';
  });
  