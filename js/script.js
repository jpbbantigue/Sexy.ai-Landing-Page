document.addEventListener("DOMContentLoaded", function() {
    var carouselInner = document.querySelector(".carousel-inner");
    var imageUrls = [
        "https://files.cdn2.io/images/carousel/Animated.jpg",
        "https://files.cdn2.io/images/carousel/Art%20Universe.jpg",
        "https://files.cdn2.io/images/carousel/BOM.jpg",
        "https://files.cdn2.io/images/carousel/Babes.jpg",
        "https://files.cdn2.io/images/carousel/Buxom%20Brits.jpg",
        "https://files.cdn2.io/images/carousel/CyberRealistic.jpg",
        "https://files.cdn2.io/images/carousel/Deliberate.jpg",
        "https://files.cdn2.io/images/carousel/Dreamshaper%20PixelArt.jpg",
        "https://files.cdn2.io/images/carousel/Dreamshaper.jpg",
        "https://files.cdn2.io/images/carousel/ER%20Natural%20Sin.jpg",
        "https://files.cdn2.io/images/carousel/Empower.jpg",
        "https://files.cdn2.io/images/carousel/FantasyMix.jpg",
        "https://files.cdn2.io/images/carousel/Furry.jpg",
        "https://files.cdn2.io/images/carousel/GhostMix.jpg",
        "https://files.cdn2.io/images/carousel/Hassaku%20Hentai.jpg",
        "https://files.cdn2.io/images/carousel/Homoerotic.jpg",
        "https://files.cdn2.io/images/carousel/Pornmerge.jpg",
        "https://files.cdn2.io/images/carousel/ReV%20Animated.jpg",
        "https://files.cdn2.io/images/carousel/RealCartoon3D.jpg",
        "https://files.cdn2.io/images/carousel/Realistic%20Vision%20V51.jpg",
        "https://files.cdn2.io/images/carousel/Realistic%20Vision.jpg",
        "https://files.cdn2.io/images/carousel/Reliberate.jpg",
        "https://files.cdn2.io/images/carousel/SDXL.jpg",
        "https://files.cdn2.io/images/carousel/Transformix.jpg",
        "https://files.cdn2.io/images/carousel/VR%20Porn.jpg",
        "https://files.cdn2.io/images/carousel/Virile%20Reality.jpg",
        "https://files.cdn2.io/images/carousel/YiffyMix.jpg",
        "https://files.cdn2.io/images/carousel/epiCPhotoGasm.jpg",
        "https://files.cdn2.io/images/carousel/last%20image.jpg",
        // Add more image URLs as needed
    ];

    imageUrls.forEach(function(url, index) {
        var item = document.createElement("div");
        item.classList.add("item");
        if (index === 0) {
            item.classList.add("active");
        }
        var image = document.createElement("img");
        image.setAttribute("src", url);
        image.setAttribute("alt", "Image " + (index + 1));
        item.appendChild(image);
        carouselInner.appendChild(item);
    });
});
// Load NSFW button
document.addEventListener("DOMContentLoaded", function() {
    // Select sections to hide
    var sectionsToHide = document.querySelectorAll("#about, #our-models, #portfolio");

    // Hide the sections initially
    sectionsToHide.forEach(function(section) {
        section.style.display = "none";
    });

    // Add event listener to the button
    document.getElementById("loadNSFWContentBtn").addEventListener("click", function() {
        // Display the modal
        const overlay = document.getElementById("overlay");
        overlay.style.display = "block";

        const modal = document.getElementById("ageModal");
        modal.style.display = "block";

        // Event listener for "Yes" button
        document.getElementById("yesBtn").addEventListener("click", function() {
            hideModalAndSetCookie();
            // Show the hidden sections
            sectionsToHide.forEach(function(section) {
                section.style.display = "block";
            });
            // Hide the button after showing content
            document.getElementById("loadNSFWContentBtn").style.display = "none";
        });

        // Event listener for "No" button
        document.getElementById("noBtn").addEventListener("click", function() {
            // Redirect to google.com
            window.location.href = "https://www.google.com";
        });
    });

    // Function to hide modal and set cookie
    function hideModalAndSetCookie() {
        const overlay = document.getElementById("overlay");
        const modal = document.getElementById("ageModal");
        overlay.style.display = "none";
        modal.style.display = "none";

        document.cookie = "ageModal=yes; expires=1;";
    }

    // Load more functionality
    var collections = document.querySelectorAll(".collection2, .collection3, .collection4");

    document.getElementById("loadMoreBtn").addEventListener("click", function() {
        // Toggle visibility of collections 2, 3, and 4
        collections.forEach(function(collection) {
            collection.style.display = (collection.style.display === 'none' || collection.style.display === '') ? 'block' : 'none';
        });

        // Change button text based on visibility
        var buttonText = this.textContent === "Load More" ? "Show Less" : "Load More";
        this.textContent = buttonText;
    });
});