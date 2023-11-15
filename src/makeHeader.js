function header() {
    const mainElement = document.createElement("header");

    const headerText = document.createElement("span");
    headerText.id = "headertxt"
    headerText.textContent = "Red's Velvety Waffles";

    const subsection = document.createElement("span");
    subsection.classList.add("waffle-headline");

    const waffleimg = document.createElement("img");
    waffleimg.src = "../dist/imgs/waffle-pancake-clip-art-element-transparent-background-png.webp";
    waffleimg.alt = "A delicious waffle.";

    const quote = document.createElement("p");
    quote.textContent = "They don't sell the kind of waffles depicted in this picture. But the quality of the food here is still amazing!"

    const customerName = document.createElement("p");
    customerName.textContent = "- A friendly customer";

    subsection.appendChild(waffleimg);
    subsection.appendChild(quote);
    subsection.appendChild(customerName);

    mainElement.appendChild(headerText);
    mainElement.appendChild(subsection);

    return mainElement;
}

export default header();