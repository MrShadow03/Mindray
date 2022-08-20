let main_tab = document.querySelector(".main-tab-title");
let submenu1 = document.querySelectorAll(".submenu1");
let submenu11 = document.querySelectorAll(".submenu11");
let submenu12 = document.querySelectorAll(".submenu12");
let submenu13 = document.querySelectorAll(".submenu13");
let submenu111 = document.querySelectorAll(".submenu111");
let submenu1111 = document.querySelectorAll(".submenu1111");
let large_tab_btn = document.querySelector("#larger-tab-btn");
let height_small = "50rem";
let height_large = "95rem";

// large_tab_btn.onmousehover = (height= "100rem") => {

// }
large_tab_btn.addEventListener("mouseover", () => {
	submenu1.forEach((element) => {
		element.style.height = height_large;
	});
	submenu11.forEach((element) => {
		element.style.height = height_large;
	});
	submenu12.forEach((element) => {
		element.style.height = height_large;
	});
	submenu13.forEach((element) => {
		element.style.height = height_large;
	});
	submenu111.forEach((element) => {
		element.style.height = height_large;
	});
	submenu1111.forEach((element) => {
		element.style.height = height_large;
	});
	main_tab.style.height = height_large;
});

large_tab_btn.addEventListener("mouseout", () => {
	submenu1.forEach((element) => {
		element.style.height = height_small;
	});
	submenu11.forEach((element) => {
		element.style.height = height_small;
	});
	submenu12.forEach((element) => {
		element.style.height = height_small;
	});
	submenu13.forEach((element) => {
		element.style.height = height_small;
	});
	submenu111.forEach((element) => {
		element.style.height = height_small;
	});
	submenu1111.forEach((element) => {
		element.style.height = height_small;
	});
	main_tab.style.height = height_small;
});

//swiper js codes

var swiper = new Swiper(".mySwiper", {
	loop: true,
	speed: 1000,
	autoplay: {
		delay: 2500,
		disableOnInteraction: false,
	},
	pagination: {
		el: ".swiper-pagination",
		dynamicBullets: true,
		clickable: true,
	},
});

//Intersection observer

let overflow_div = document.querySelectorAll(".anime-overflow-hidden");
let slide_div = document.querySelectorAll(".anime-translate-outside");
let slides = document.querySelectorAll(".swiper-slide");

// overflow_div.forEach((element) => {
// 	element.addEventListener("mouseenter", function () {
// 		slide_div.forEach((element) => {
// 			console.log("ok");
// 			element.classList.toggle("anime-translate-inside");
// 		});
// 	});
// });

const observer = new IntersectionObserver(
	(entries) => {
		entries.forEach((entry) => {
			slide_div.forEach((element) => {
				if (entry.isIntersecting) {
					console.log(entry.target);
					element.style.transform = "translateY(0)";
				} else {
					element.style.transform = "translateY(20rem)";
				}
			});
		});
	},
	{
		threshold: 0.9,
	}
);

slides.forEach((element) => {
	observer.observe(element);
});
