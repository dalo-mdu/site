let container = document.querySelector("header")
let nav_item = document.querySelector("nav a.active")

if (nav_item) {
	container.scrollTo(nav_item.offsetLeft+nav_item.offsetWidth/2-container.offsetWidth/2, 0)
}