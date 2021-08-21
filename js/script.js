const icon = document.getElementById('icon');
const body = document.getElementById('body');

icon.addEventListener('click', () => {
  body.classList.toggle('dark');
});
