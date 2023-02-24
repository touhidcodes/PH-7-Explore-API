function loadUsers2() {
	fetch("https://jsonplaceholder.typicode.com/users")
		.then((res) => res.json())
		.then((data) => displayData2(data));
}

function displayData2(data) {
	for (const user of data) {
		const li = document.createElement("li");
		li.innerText = user.name;
		const ul = document.getElementById("user-list-container");
		ul.appendChild(li);
	}
}
