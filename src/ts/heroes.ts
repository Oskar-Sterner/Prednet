import { displayLogin } from "./universal-functions/functions";
import { displayHeroes } from "./universal-functions/functions";
let profileButton = document.getElementById("icon") as HTMLLIElement;

profileButton.addEventListener("click", displayLogin);

displayHeroes();