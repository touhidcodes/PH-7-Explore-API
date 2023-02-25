function loadPost() {
	url = "https://jsonplaceholder.typicode.com/posts";
	fetch(url)
		.then((res) => res.json())
		.then((data) => displayPost(data));
}

loadPost();

function displayPost(posts) {
	const container = document.getElementById("post-container");
	for (const post of posts) {
		const article = document.createElement("div");
		article.classList.add("post");
		article.innerHTML = `
        <h4>User Id: ${post.id}</h4>
        <h5>Post Title: ${post.title}</h5>
        <p>Post Description: ${post.body}</p>
        `;
		container.appendChild(article);
	}
}
