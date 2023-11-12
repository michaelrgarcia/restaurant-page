function main() {
    const mainElement = document.createElement("main");

    const scrollMenu = document.createElement("div");
    scrollMenu.id = "catalog"
    scrollMenu.textContent = "I am the tab switching menu";
    
    mainElement.appendChild(scrollMenu);

    return mainElement;
}

export default main();