import header from "./makeHeader";
import main from "./makeMain";
import footer from "./makeFooter";

const content = document.getElementById("content");

content.append(header, main, footer);

