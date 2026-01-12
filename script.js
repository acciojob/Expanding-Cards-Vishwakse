const panels = document.querySelectorAll(".panel");

panels.forEach((panel) => {
  panel.addEventListener("click", () => {
    panel.classList.add("active");

    const imgText = panel.children[1];
    imgText.style.display = "block";

    panels.forEach((otherPanel) => {
      const otherImgText = otherPanel.children[1];
      otherImgText.style.display = "block";
      if (otherPanel !== panel) {
        otherPanel.classList.remove("active");
        otherImgText.style.display = "none";
      }
    });
  });
});
