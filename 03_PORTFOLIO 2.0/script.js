function openSection(id) {
  document
    .querySelectorAll(".section")
    .forEach((s) => (s.style.display = "none"));
  document.getElementById("home").style.display = "none";

  if (id === "home") {
    document.getElementById("home").style.display = "block";
    return;
  }

  let sec = document.getElementById(id);
  sec.style.display = "block";

  if (id === "skills") {
    document.querySelectorAll(".skill-progress").forEach((bar) => {
      bar.style.width = bar.getAttribute("data-width");
    });
  }
}
