function main() {
    const mainElement = document.createElement("main");

    const tabs = document.createElement("ul");
    tabs.id = "tabsmenu";

    for (let i = 0; i < 3; i++) {
        let tab = document.createElement("li");
        if (i === 0) {
            tab.textContent = "Home";
        } else if (i === 1) {
            tab.textContent = "Contact";
        } else if (i === 2) {
            tab.textContent = "Menu"
        }
        tabs.appendChild(tab);
    } 

    const scrollMenu = document.createElement("div");
    scrollMenu.id = "menu"

    mainElement.appendChild(tabs);
    mainElement.appendChild(scrollMenu);

    return mainElement;
}

export default main();