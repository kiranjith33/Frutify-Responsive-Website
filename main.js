function menuClick() {
    const menu = document.getElementById("mobileMenu");
    if (menu.classList.contains('hidden')) {
      menu.animate(
        [
          { transform: "translateX(-100%)" },
          { transform: "translateY(0)" }
        ],
        {
          duration: 500,
          iterations: 1
        }
      );
      menu.classList.remove('hidden');
    } else {
      menu.animate(
        [
          { transform: "translateX(0)" },
          { transform: "translateY(-100%)" }
        ],
        {
          duration: 500,
          iterations: 1
        }
      );
      menu.classList.add('hidden');
    }
    console.log(menu.classList);
  }

  const menuItems = document.querySelectorAll('#mobileMenu a');
menuItems.forEach(item => {
  item.addEventListener('click', event => {
    event.preventDefault();
    const url = item.getAttribute('href');
    window.location.href = url;
  });
});