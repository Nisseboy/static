javascript:(function() {

let muiPaper = document.getElementsByClassName("MuiDrawer-paper")[0];
let sidebar = document.getElementById("student-sidebar-root");
let typos = document.getElementsByClassName("MuiTypography-root");
let lines = document.getElementsByClassName("MuiListItemButton-root");
muiPaper.style.width = "12rem";
sidebar.style.width = "12rem";
for (let i in Array.from(typos)) {
    let typo = typos[i];
    typo.style.fontSize = "0.7rem";
}
for (let i in Array.from(lines)) {
    let line = lines[i];
    line.style.padding = "0";
    line.style.borderBottom = "1px dotted gray";
}

})();
