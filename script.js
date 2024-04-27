const body = document.querySelector("body"),
  modeToggle = body.querySelector(".toggle");
sideBar = body.querySelector("nav");
sidebarToggle = body.querySelector(".sidebar-toggle");

let getMode = localStorage.getItem("mode");
if (getMode && getMode === "dark") {
  body.classList.toggle('dark');
}

let getStatus = localStorage.getItem("status");
if (getStatus && getStatus === "close") {
  sideBar.classList.toggle('close');
}

modeToggle.addEventListener('click', () => {
  body.classList.toggle('dark');
  if (body.classList.contains('dark')) {
    localStorage.setItem("mode", "dark");
  } else {
    localStorage.setItem("mode", "light");
  }
});

sidebarToggle.addEventListener('click', () => {
  sideBar.classList.toggle('close');
  if (sideBar.classList.contains('close')) {
    localStorage.setItem("status", "close");
  } else {
    localStorage.setItem("status", "open");
  }
})