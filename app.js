

const fetchUserData = async (userName) => {
	try {
		const response = await fetch(`https://api.github.com/users/${userName}`);
		const data = await response.json();

		if (data.login !== undefined) {
			renderProfile(data);
			renderUserRepositories(userName);
		} else {
			userNotFound();
		}
	} catch (error) {
		console.log(error);
	}
};
let profile_img = document.querySelector('.profile_img')
let Username = document.querySelector('.Username')
let login = document.querySelector('.login')
let bio = document.querySelector('.bio')
let followers = document.querySelector('.followers')
let following = document.querySelector('.following')
let repos = document.querySelector('.repos')
let heading = document.querySelector('.heading')

const renderProfile = (userData) => {
	profile_img.src = userData.avatar_url;
	Username.textContent = `userName: ${userData.name}`;
	login.textContent = `@${userData.login}`;
	followers.textContent = `followers: ${userData.followers}`;
	following.textContent = `following: ${userData.following}`;
	repos.textContent = `repos: ${userData.public_repos}`;
};

let repositorys = document.querySelector('.repositorys')
const renderUserRepositories = async (userName) => {
	try {
		const response = await fetch(`https://api.github.com/users/${userName}/repos`);
		const repositories = await response.json();
		let HTMLContentToAppend = "";
		heading.innerHTML = `Repositories`
		for (const repository of repositories) {
			HTMLContentToAppend += `
				<div class="repository bg-light my-5 p-5">
					<a href="${repository.html_url}" class="text-blue-500" target="_blank">${repository.name}</a>
					<p class="text"><span class="text-slate-400">description: </span>${repository.description}</p>
					<div class="">
						<p class=""><span class="text-slate-400">Last Updated: </span> ${String(repository.updated_at).substring(0, 10)}</p>
					</div>
				</div>
		`;
		}

		repositorys.innerHTML = `${HTMLContentToAppend}`;
	} catch (error) {
		console.log(error);
	}
};



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


