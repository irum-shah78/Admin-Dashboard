const body = document.querySelector("body"),
  modeToggle = body.querySelector(".toggle");
sideBar = body.querySelector("nav");
sidebarToggle = body.querySelector(".sidebar-toggle");

modeToggle.addEventListener('click', () => {
  body.classList.toggle('dark');
});

sidebarToggle.addEventListener('click', () => {
  sideBar.classList.toggle('close');
})