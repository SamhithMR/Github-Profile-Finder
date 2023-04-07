


let main = document.querySelector('.main')
const userNotFound = () => {
	main.innerHTML=`user not found`
};

let searchButton = document.querySelector('.searchButton')
let searchInput = document.querySelector('.search')

searchButton.addEventListener("click", () => {
	fetchUserData(searchInput.value);
});

searchInput.addEventListener("keypress", (event) => {
	if (event.key === "Enter") {
		fetchUserData(searchInput.value);
	}
});


