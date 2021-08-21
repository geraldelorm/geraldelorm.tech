const icon = document.getElementById('icon');
const body = document.getElementById('body');
const lIcon = document.getElementsByClassName('l-icon');
const dIcon = document.getElementsByClassName('d-icon');

icon.addEventListener('click', (e) => {
  body.classList.toggle('dark');
});

if (body.classList.contains('dark')) {
  dIcon.classList.toggle('off');
} else if (body.classList.contains('light')) {
  lIcon.classList.toggle('off');
}
