const menuToggle = document.getElementById('menuToggle');
const siteNav = document.getElementById('siteNav');
menuToggle.addEventListener('click', () => {
  const isOpen = siteNav.classList.toggle('open');
  menuToggle.setAttribute('aria-expanded', String(isOpen));
  menuToggle.setAttribute('aria-label', isOpen ? 'Close navigation' : 'Open navigation');
  menuToggle.textContent = isOpen ? '×' : '☰';
});
siteNav.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
  siteNav.classList.remove('open');
  menuToggle.setAttribute('aria-expanded', 'false');
  menuToggle.setAttribute('aria-label', 'Open navigation');
  menuToggle.textContent = '☰';
}));
document.getElementById('year').textContent = new Date().getFullYear();
const upload = document.getElementById('portraitUpload');
const preview = document.getElementById('portraitPreview');
upload.addEventListener('change', () => {
  const file = upload.files && upload.files[0];
  if (!file || !file.type.startsWith('image/')) return;
  const reader = new FileReader();
  reader.onload = () => { preview.innerHTML = ''; const img = document.createElement('img'); img.src = reader.result; img.alt = 'Your portrait preview'; preview.appendChild(img); };
  reader.readAsDataURL(file);
});
