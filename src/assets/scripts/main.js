export function highlightBackground(event) {
	event.target.style.backgroundColor = "#303841";
	event.target.style.color = "white";
}

export function unhighlightBackground(event) {
	event.target.style.backgroundColor = "";
	event.target.style.color = "";
}

export function showCaption(event) {
    var figure = event.currentTarget;
    var caption = figure.querySelector("figcaption");
    caption.classList.remove("invisible");
}

export function hideCaption(event) {
    var figure = event.currentTarget;
    var caption = figure.querySelector("figcaption");
    caption.classList.add("invisible");
}