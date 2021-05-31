const header = () => {
  const element = document.createElement("header");
  element.innerHTML = `
      <h1>The Fairfax</h1>
      <nav>
          <li class="nav-item"><a href="#">Home</a></li>
          <li class="nav-item"><a href="#">Menu</a></li>
          <li class="nav-item"><a href="#">Contact</a></li>
      </nav>`;
  return element;
};

export { header };
