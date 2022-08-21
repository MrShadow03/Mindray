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
	loop: false,
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
//let slide_div = document.querySelectorAll(".anime-translate-outside");
let slide_div1 = document.querySelectorAll(".slide1");
let slide_div2 = document.querySelectorAll(".slide2");
let slide_div3 = document.querySelectorAll(".slide3");
let slide_div4 = document.querySelectorAll(".slide4");
let slides = document.querySelectorAll(".swiper-slide");
let observer_div = document.querySelectorAll(".observer");

let observer_1 = document.querySelector(".observer1");
let observer_2 = document.querySelector(".observer2");
let observer_3 = document.querySelector(".observer3");
let observer_4 = document.querySelector(".observer4");

// overflow_div.forEach((element) => {
// 	element.addEventListener("mouseenter", function () {
// 		slide_div.forEach((element) => {
// 			console.log("ok");
// 			element.classList.toggle("anime-translate-inside");
// 		});
// 	});
// });

// const observer = new IntersectionObserver(
// 	(entries) => {
// 		entries.forEach((entry) => {
// 			slide_div.forEach((element) => {
// 				if (entry.isIntersecting) {
// 					element.style.transform = "translateY(0)";
// 				} else {
// 					element.style.transform = "translateY(20rem)";
// 				}
// 			});
// 		});
// 	},
// 	{
// 	}
// );

// observer_div.forEach((element) => {
// 	observer.observe(element);
// });

const observer1 = new IntersectionObserver(
	(entries) => {
		entries.forEach((entry) => {
			slide_div1.forEach((element) => {
				console.log(entry)
				if (entry.isIntersecting) {
					element.style.transform = "translateY(0)";
				} else {
					element.style.transform = "translateY(20rem)";
				}
			});
		});
	},{
		threshold: 1,
	}
	);
	observer1.observe(observer_1);

const observer2 = new IntersectionObserver(
	(entries) => {
		entries.forEach((entry) => {
			slide_div2.forEach((element) => {
				console.log(entry)
				if (entry.isIntersecting) {
					element.style.transform = "translateY(0)";
				} else {
					element.style.transform = "translateY(20rem)";
				}
			});
		});
	},{
		threshold: 1,
	}
	);
	observer2.observe(observer_2);

const observer3 = new IntersectionObserver(
	(entries) => {
		entries.forEach((entry) => {
			slide_div3.forEach((element) => {
				if (entry.isIntersecting) {
					element.style.transform = "translateY(0)";
				} else {
					element.style.transform = "translateY(20rem)";
				}
			});
		});
	},{
		threshold: 1,
	}
	);
	observer3.observe(observer_3);






const observer4 = new IntersectionObserver(
	(entries) => {
		entries.forEach((entry) => {
			slide_div4.forEach((element) => {
				if (entry.isIntersecting) {
					element.style.transform = "translateY(0)";
				} else {
					element.style.transform = "translateY(20rem)";
				}
			});
		});
	},{
		threshold: 1,
	}
	);
	observer4.observe(observer_4);
	

	//product swipe btn

	let swipe_btn = document.querySelector("#swipe-btn");
	let product_gallery = document.querySelector(".product-gallery-wrapper");
	let swipe_arrow = document.querySelector("#swipe-arrow");
	let overlay_divs = document.querySelectorAll(".has-overlay");

	swipe_btn.addEventListener("click",function(){
		product_gallery.classList.toggle("gallery-slide");

		if(swipe_arrow.classList.contains("icon-arrow-right")){
			swipe_arrow.classList.remove("icon-arrow-right");
			swipe_arrow.classList.add("icon-arrow-left");
		}else{
			swipe_arrow.classList.remove("icon-arrow-left");
            swipe_arrow.classList.add("icon-arrow-right");
		}

		overlay_divs.forEach(element => {
			element.classList.toggle("overlay");
		});
	})