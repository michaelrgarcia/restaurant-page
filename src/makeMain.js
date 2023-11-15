function main() {
    const mainElement = document.createElement("main");

    const tabs = document.createElement("ul");
    tabs.id = "tabsmenu";

    for (let i = 0; i < 3; i++) {
        let test = document.createElement("li");
        if (i === 0) {
            test.textContent = "Home";
        } else if (i === 1) {
            test.textContent = "Contact";
        } else if (i === 2) {
            test.textContent = "Menu"
        }
        tabs.appendChild(test);
    } 

    const scrollMenu = document.createElement("div");
    scrollMenu.id = "menu"

    mainElement.appendChild(tabs);
    mainElement.appendChild(scrollMenu);

    return mainElement;
}

export default main();