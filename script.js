const factButtons = document.querySelectorAll(".fact-button");

factButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const factId = button.getAttribute("aria-controls");
    const funFact = document.getElementById(factId);
    const isVisible = button.getAttribute("aria-expanded") === "true";

    button.setAttribute("aria-expanded", String(!isVisible));
    funFact.classList.toggle("is-visible", !isVisible);
    button.querySelector("span:first-child").textContent = isVisible
      ? "Show fun fact"
      : "Hide fun fact";
  });
});
