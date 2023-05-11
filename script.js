const content = document.getElementsByClassName("content")
const tabButton = document.getElementsByClassName("tab-button")



function openTab(evt, tabName) {
    for (let i = 0; i < content.length; i++) {
            content[i].style.display = "none";
        }
    for (let i = 0; i < tabButton.length; i++) {
        tabButton[i].className = tabButton[i].className.replace(" active", "");
        }
        document.getElementById(tabName).style.display = "block";
         evt.currentTarget.className += " active";
}