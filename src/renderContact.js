function contact() {
    const mainElement = document.createElement("div");
    mainElement.id = "contact";

    for (let i = 0; i < 3; i++) {
        let card = document.createElement("div");
        card.classList.add("card");

        let nameSection = document.createElement("span");
        nameSection.classList.add("name");

        switch(i) {
            case 0:
                nameSection.textContent = "Red"
                break;
            case 1:
                nameSection.textContent = "Velvet";
                break;
            case 2:
                nameSection.textContent = "Maroon";
        }

        let nameIcon = document.createElement("div");
        nameIcon.classList.add("name-pic");

        nameSection.appendChild(nameIcon);

        let otherInfo = document.createElement("div");
        otherInfo.classList.add("other-info");

        let title = document.createElement("p");
        let phone = document.createElement("p");
        let email = document.createElement("p");

        switch(i) {
            case 0:
                nameIcon.id = "red-pic";
                title.textContent = "Founder";
                phone.textContent = "123-456-7890";
                email.textContent = "veryRealEmail@fake.com";
                break;
            case 1:
                nameIcon.id = "velvet-pic";
                title.textContent = "Co-Founder";
                phone.textContent = "098-654-3217";
                email.textContent = "kindaReal@fake.com";
                break;
            case 2:
                nameIcon.id = "maroon-pic";
                title.textContent = "Manager";
                phone.textContent = "435-331-5134";
                email.textContent = "dontCallMe@fake.com";
        }

        otherInfo.append(title, phone, email);

        card.append(nameSection, otherInfo);

        mainElement.appendChild(card);
    }

    return mainElement;
}

export default contact();