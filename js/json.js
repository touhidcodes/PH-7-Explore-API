const shop = {
	owner: "alia",
	address: {
		street: "kochukhet vuter goli",
		city: "Dhaka",
		country: "BD",
	},
	product: ["laptop", "phone", "mic", "monitor", "keyboard", "mouse"],
	price: 45000,
	isNew: false,
	isOpen: true,
};

const shopJSON = JSON.stringify(shop);
console.log(shopJSON);

const object = JSON.parse(shopJSON);
console.log(object);
