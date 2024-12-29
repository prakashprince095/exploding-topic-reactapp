const toggleButton = document.getElementById("toggle-btn");
const sidebar = document.getElementById("sidebar");

function toggleSidebar() {
  sidebar.classNameList.toggle("close");
  toggleButton.classNameList.toggle("rotate");

  closeAllSubMenus();
}

function toggleSubMenu(button) {
  if (!button.nextElementSibling.classNameList.contains("show")) {
    closeAllSubMenus();
  }

  button.nextElementSibling.classNameList.toggle("show");
  button.classNameList.toggle("rotate");

  if (sidebar.classNameList.contains("close")) {
    sidebar.classNameList.toggle("close");
    toggleButton.classNameList.toggle("rotate");
  }
}

function closeAllSubMenus() {
  Array.from(sidebar.getElementsByclassName("show")).forEach((ul) => {
    ul.classNameList.remove("show");
    ul.previousElementSibling.classNameList.remove("rotate");
  });
}
