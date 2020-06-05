// parent element respinsible for displaying card
const bricks = document.querySelector(".row");

// sample data set
const data = [
	{
		title: "Good Omens",
		author: " David Arnold",
		image: "/src/assets/images/cover.png",
	},
	{
		title: "Aladin",
		author: " Original motion picture soundtrack",
		image: "/src/assets/images/cover2.png",
	},
	{
		title: "Sabrina",
		author: " Adam Taylor",
		image: "/src/assets/images/cover3.png",
	},
	{
		title: "The umbrealla academy",
		author: " Jeff Ruson",
		image: "/src/assets/images/cover4.png",
	},
	{
		title: "The umbrealla academy",
		author: " Jeff Ruson",
		image: "/src/assets/images/cover4.png",
	},
	{
		title: "Sabrina",
		author: " Adam Taylor",
		image: "/src/assets/images/cover3.png",
	},
	{
		title: "Dead Pool",
		author: "Perthy Martins",
		image: "/src/assets/images/cover6.png",
	},
	{
		title: "A Star is Born",
		author: "Lady Gaga & Bradly Cooper",
		image: "/src/assets/images/cover7.png",
	},
	{
		title: "The Greatest Showman",
		author: "Ben Paskek & Justin Paul",
		image: "/src/assets/images/cover8.png",
	},
	{
		title: "Fantastic Beast",
		author: "James Newton Howard",
		image: "/src/assets/images/cover9.png",
	},
	{
		title: "Fantastic Beast",
		author: "James Newton Howard",
		image: "/src/assets/images/cover9.png",
	},
	{
		title: "Sabrina",
		author: " Adam Taylor",
		image: "/src/assets/images/cover3.png",
	},
	{
		title: "Sherlock",
		author: "David Arnold and Micheal Prince",
		image: "/src/assets/images/cover11.png",
	},
	{
		title: "Parasite",
		author: "Jung Jae IL",
		image: "/src/assets/images/cover12.png",
	},
	{
		title: "The Avenger",
		author: " Alan Sylvestri",
		image: "/src/assets/images/cover14.png",
	},
	{
		title: "Stranger Things",
		author: "Kyle Dixon and Micheal Stein",
		image: "/src/assets/images/cover15.png",
	},
	{
		title: "Stranger Things",
		author: "Kyle Dixon and Micheal Stein",
		image: "/src/assets/images/cover15.png",
	},
	{
		title: "Sabrina",
		author: " Adam Taylor",
		image: "/src/assets/images/cover3.png",
	},
];
// function insering items to dom
const loadBricks = (data) => {
	const allBricks = data
		.map((brick) => {
			const { title, author, image } = brick;

			return `
		<div class="col-12 col-sm-4 col-md-3 col-lg-2 mb-8 split" data-name=${title}>
		<img
			class="shadow-xl"
			src=${image}
			alt="img"
		/>
		<h2 class="text-gray-800 mt-2 font-semibold">${title}</h2>
		<p class="text-gray-600 text-xs tracking-tight -mt-1">${author}</p>
	</div>
		`;
		})
		.join("");

	bricks.innerHTML = allBricks;
};
// initializing the function
loadBricks(data);

// get card node from the document
const cards = document.querySelectorAll(".split");

// filter base on user input
document.querySelector("#search").addEventListener("keydown", (e) => {
	input = e.target.value;
	cards.forEach((card) => {
		let atrr = card.getAttribute("data-name");
		if (atrr.toLowerCase().includes(input.toLowerCase())) {
			card.style.display = "block";
		} else {
			card.style.display = "none";
		}
	});
});
