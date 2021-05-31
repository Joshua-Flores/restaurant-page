const menuPage = () => {
  const element = document.createElement("div");
  element.innerHTML = `
        <p>Here's our fantastic menu...</p>`;
  return element;
};

export { menuPage };
