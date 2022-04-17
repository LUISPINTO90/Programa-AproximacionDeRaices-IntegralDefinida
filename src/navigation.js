let tabs = document.querySelectorAll(".tabsToggle");
let tabsContents = document.querySelectorAll(".tabsContent");

tabs.forEach((tab, index) => {
  tab.addEventListener("click", () => {
    tabsContents.forEach((content) => {
      content.classList.remove("isActive");
    });
    tabs.forEach((tab) => {
      tab.classList.remove("isActive");
    });
    tabsContents[index].classList.add("isActive");
    tabs[index].classList.add("isActive");
  });
});
