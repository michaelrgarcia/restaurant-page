function home() {
    const mainElement = document.createElement("div");
    mainElement.id = "home";

    const hoursTitleText = document.createElement("span");
    hoursTitleText.textContent = "Hours";

    const clockIcon = document.createElement("img");
    clockIcon.src = "../imgs/3b81284324312a12f8e43e58f54c0efd-removebg-preview.png";
    clockIcon.alt = "A clock.";

    hoursTitleText.appendChild(clockIcon);

    const hours = document.createElement("div");
    hours.id = "hours";

    const days = document.createElement("ul");

    for (let i = 0; i < 7; i++) {
        let day = document.createElement("li");

        switch(i) {
            case 0:
                day.textContent = "Monday: ";
                break;
            case 1:
                day.textContent = "Tuesday: ";
                break;
            case 2:
                day.textContent = "Wednesday: ";
                break;
            case 3:
                day.textContent = "Thursday: ";
                break;
            case 4:
                day.textContent = "Friday: ";
                break;
            case 5:
                day.textContent = "Saturday: 8AM-5PM";
                break;
            case 6: 
                day.textContent = "Sunday: Closed";
        }
        if (i < 5) day.textContent = day.textContent + "6AM-3PM";

        days.appendChild(day);
    }

    hours.append(hoursTitleText, days)

    const info = document.createElement("div");
    info.id = "info";

    const infoTitleText = document.createElement("p");
    infoTitleText.textContent = "Info";

    const description = document.createElement("p");
    description.textContent = "If it wasn't obvious from our name, we only serve red velvet waffles. Over the years, we've expanded our menu to include many other things red velvet! It's guaranteed that there's something that you'll love! Just have a browse around and see what catches your eye!";

    info.append(infoTitleText, description);

    mainElement.append(hours, info);

    return mainElement;
}

export default home();