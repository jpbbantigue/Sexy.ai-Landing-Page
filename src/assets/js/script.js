document.addEventListener("DOMContentLoaded", function () {
	// Function to hide modal and set cookie
	function hideModalAndSetCookie() {
		const overlay = document.getElementById("overlay");
		const modal = document.getElementById("ageModal");
		overlay.style.display = "none";
		modal.style.display = "none";

		document.cookie = "ageModal=yes; expires=1;";
	}

	// Load NSFW button functionality
	document
		.getElementById("loadNSFWContentBtn")
		.addEventListener("click", function () {
			const overlay = document.getElementById("overlay");
			overlay.style.display = "block";

			const modal = document.getElementById("ageModal");
			modal.style.display = "block";

			document
				.getElementById("yesBtn")
				.addEventListener("click", function () {
					hideModalAndSetCookie();
					const sectionsToHide = document.querySelectorAll(
						"#about, #our-models, #portfolio"
					);
					sectionsToHide.forEach(function (section) {
						section.style.display = "block";
					});
					document.getElementById(
						"loadNSFWContentBtn"
					).style.display = "none";
				});

			document
				.getElementById("noBtn")
				.addEventListener("click", function () {
					window.location.href = "https://www.google.com";
				});
		});

	// Load more functionality
	var collections = document.querySelectorAll(
		".collection2, .collection3, .collection4"
	);

	var loadMoreBtn = document.getElementById("loadMoreBtn");
	loadMoreBtn.addEventListener("click", function () {
		collections.forEach(function (collection) {
			collection.style.display =
				collection.style.display === "none" ||
				collection.style.display === ""
					? "block"
					: "none";
		});

		var buttonText = loadMoreBtn.textContent.trim();
		loadMoreBtn.textContent =
			buttonText === "Load More" ? "Show Less" : "Load More";
	});

	// Initially hide sections
	const sectionsToHide = document.querySelectorAll(
		"#about, #our-models, #portfolio"
	);
	sectionsToHide.forEach(function (section) {
		section.style.display = "none";
	});

	// Populate carousel
	fetch("https://api.sexy.ai/getModels")
		.then((res) => res.json())
		.then((res) => {
			const models = res.payload.map((model) => ({
				imageUrl: model.sampleImages[1].url,
				name: model.name,
			}));

			const carouselInner = document.querySelector(".carousel-inner");

			// Loop `models` and append it to carousel <div>
			models.forEach((model, index) => {
				// Create a <div> that'll contain <p> and <img>
				const item = document.createElement("div");
				item.classList.add("item");
				if (index === 0) item.classList.add("active");

				// Create <p> tag for model name & append to <div> container
				const modelName = document.createElement("p");
				modelName.setAttribute("class", "model-name");
				modelName.innerText = model.name;
				item.appendChild(modelName);

				// Create <img> tag for model img & append to <div> container
				const image = document.createElement("img");
				image.setAttribute("src", model.imageUrl);
				image.setAttribute("class", "model-image");
				image.setAttribute("alt", "Image " + (index + 1));
				item.appendChild(image);

				// Append everything to `carouselInner`
				carouselInner.appendChild(item);
			});
		});

	// Populate Pricing section
	const pricingSection = document.querySelector("#pricing .row");
	fetch("https://api.sexy.ai/getBillingPlans")
		.then((res) => res.json())
		.then((res) => {
			const plans = res.payload;

			plans.forEach((plan) => {
				const planName = plan.name;
				const features = plan.features;
				const price = plan.prices[0];
				const { value, period, paymentProviders } = price
					? price
					: {
							value: 0,
							period: "month",
							paymentProviders: [{ paymentUrl: "" }],
					  };
				const paymentUrl = paymentProviders[0].paymentUrl;

				const containerDiv = document.createElement("div");
				containerDiv.setAttribute(
					"class",
					"col-md-3 col-sm-6 col-xs-12"
				);

				const wowDiv = document.createElement("div");
				wowDiv.setAttribute("class", "wow zoomIn");
				wowDiv.setAttribute("data-wow-duration", "400ms");
				wowDiv.setAttribute("data-wow-delay", "0ms");
				containerDiv.appendChild(wowDiv);

				const ulPricing = document.createElement("ul");
				ulPricing.setAttribute("class", "pricing");
				wowDiv.appendChild(ulPricing);

				// ---> Pricing card header
				//
				const liPlanHeader = document.createElement("li");
				liPlanHeader.setAttribute("class", "plan-header");
				ulPricing.appendChild(liPlanHeader);

				const priceDuration = document.createElement("div");
				priceDuration.setAttribute("class", "price-duration");
				liPlanHeader.appendChild(priceDuration);

				const priceSpan = document.createElement("span");
				priceSpan.setAttribute("class", "price");
				priceSpan.innerText = `$${Number(value).toFixed(2)}`;
				priceDuration.appendChild(priceSpan);

				const durationSpan = document.createElement("span");
				durationSpan.setAttribute("class", "duration");
				durationSpan.innerText = `per ${period}`;
				priceDuration.appendChild(durationSpan);

				const planNameDiv = document.createElement("div");
				planNameDiv.setAttribute("class", "plan-name");
				planNameDiv.innerText = planName;
				liPlanHeader.appendChild(planNameDiv);
				//
				// ---> Pricing card header

				// ---> Pricing card details
				//
				const divPlanDetails = document.createElement("div");
				divPlanDetails.setAttribute("class", "plan-details");
				ulPricing.appendChild(divPlanDetails);
				features.forEach((feature) => {
					const formatFeatureList = (feature) =>
						`<strong>${feature.split(" ")[0]}</strong> ${feature
							.split(" ")
							.slice(1)
							.join(" ")}`;
					const liFeature = document.createElement("li");
					feature = feature.toUpperCase();
					liFeature.innerHTML = formatFeatureList(feature);
					divPlanDetails.appendChild(liFeature);
				});
				//
				// ---> Pricing card details

				// ---> Pricing card purchase
				//
				const liPlanPurchase = document.createElement("li");
				liPlanPurchase.setAttribute("class", "plan-purchase");
				liPlanPurchase.innerHTML = `<a
										class="btn btn-lg"
										href="${paymentUrl ? paymentUrl : "https://sexy.ai/sign-up"}"
										>Get It Now!</a
									>`;
				ulPricing.appendChild(liPlanPurchase);
				//
				// ---> Pricing card purchase

				// Append
				pricingSection.appendChild(containerDiv);
			});
		});
});
