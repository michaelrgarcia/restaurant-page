function menu() {
    const mainElement = document.createElement("div");
    mainElement.id = "catalog";
    
    let heading1 = document.createElement("div");
    heading1.classList.add("card", "heading");
    heading1.textContent = "Main Dishes (all red velvet)";
    mainElement.append(heading1);

    for (let i = 0; i < 3; i++) {
        let card = document.createElement("div");
        card.classList.add("card");

        let itemInfo = document.createElement("div");
        itemInfo.classList.add("item-info");
        card.append(itemInfo);

        let itemName = document.createElement("p");
        let description = document.createElement("p");
        let itemImg = document.createElement("img");

        switch (i) {
            case 0:
                itemName.textContent = "Waffles ($8)";
                description.textContent = "A delicious stack of red velvet waffles made with natural, locally-sourced cocoa powder. Buttercream icing and chocolate chips available by request.";
                itemImg.src = "Red-Velvet-Waffles-1.jpg";
                itemImg.alt = "A stack of red velvet waffles with powdered sugar sprinkled on top.";
                break;
            case 1:
                itemName.textContent = "Pancakes ($8)";
                description.textContent = "A decently-sized stack of red velvet pancakes, made with the same high-quality ingredients as our signature waffles. Buttercream icing available by request.";
                itemImg.src = "Red-Velvet-Cake-Mix-Pancakes-800x530.jpg";
                itemImg.alt = "A stack of simple red velvet pancakes with powdered sugar sprinkled on top.";
                break;
            case 2:
                itemName.textContent = "French Toast ($10)";
                description.textContent = "Various pieces of red velvet french toast sandwiched together with a cream cheese filling. Chocolate icing and filling optional.";
                itemImg.src = "Red-Velvet-French-Toast-Cheesecake-IMAGE-11.jpg";
                itemImg.alt = "A stack of red velvet french toast sandwiched with buttercream and glazed with chocolate icing."; 
        }

        itemInfo.append(itemName, description, itemImg);

        mainElement.append(card);
    }

    let heading2 = document.createElement("div");
    heading2.classList.add("card", "heading");
    heading2.textContent = "Sides";
    mainElement.append(heading2);

    let redApricot = document.createElement("div");
    redApricot.classList.add("card");

    let apricotInfo = document.createElement("div");
    apricotInfo.classList.add("item-info");
    redApricot.append(apricotInfo);

    let apricotName = document.createElement("p");
    apricotName.textContent = "Apricots ($4)";

    let apricotDesc = document.createElement("p");
    apricotDesc.textContent = "Red velvet apricots! Locally sourced and always fresh. Sliced in half, pitted, and served in a small bowl.";

    let apricotImg = document.createElement("img");
    apricotImg.src = "redvelvetapricots.jpg";
    apricotImg.alt = "Normal-looking apricots that have been given the name 'red velvet apricots'."; 

    apricotInfo.append(apricotName, apricotDesc, apricotImg);

    mainElement.append(redApricot);

    let heading3 = document.createElement("div");
    heading3.classList.add("card", "heading");
    heading3.textContent = "Beverages";
    mainElement.append(heading3);

    let rvLatte = document.createElement("div");
    rvLatte.classList.add("card");

    let latteInfo = document.createElement("div");
    latteInfo.classList.add("item-info");
    rvLatte.append(latteInfo);

    let latteName = document.createElement("p");
    latteName.textContent = "Latte ($5)";

    let latteDesc = document.createElement("p");
    latteDesc.textContent = "A latte made with a special mix‒featuring our signature red velvet mix, locally sourced coffee grounds, and steamed milk. Espresso shots can be omitted.";

    let latteImg = document.createElement("img");
    latteImg.src = "redvelvetlatte.jpeg";
    latteImg.alt = "A red latte featuring a circular art piece."; 

    latteInfo.append(latteName, latteDesc, latteImg);

    mainElement.append(rvLatte);

    return mainElement;
}

export default menu();