function documentLoaded () {
  let navToggle = document.getElementById('nav-toggle');
  let nav = document.getElementById('nav');

  window.addEventListener('resize', showNav);
  navToggle.addEventListener('click', toggleNav);

  function toggleNav () {
    nav.classList.toggle('hidden');
  }

  function showNav () {
    let width = window.innerWidth;
    if (width >= 576) {
      nav.classList.remove('hidden');
    }
  }
}

document.addEventListener('DOMContentLoaded', documentLoaded);
