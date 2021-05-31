const homePage = () => {
  const element = document.createElement("div");
  element.innerHTML = `
      <p>
        At The Fairfax, we've been serving world-class seafood, steaks, and
        chops since we opened our doors in 1986. Come visit us for lunch or
        dinner to unwind and let us do the cooking for you.
      </p>
      <img src="https://source.unsplash.com/N_Y88TWmGwA/1920x1080" />`;
  return element;
};

export { homePage };
