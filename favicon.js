// Array of favicon image URLs
const faviconImages = [
    'obj/apngframe1.png',
    'obj/apngframe2.png'
];

// Interval for changing favicon (in milliseconds)
const interval = 500; // Adjust as needed

let currentIndex = 0; // Start with the first image

function changeFavicon() {
    const link = document.querySelector("link[rel='icon']") || document.createElement('link');
    link.rel = 'icon';
    link.href = faviconImages[currentIndex];
    document.head.appendChild(link);

    // Update currentIndex for next frame
    currentIndex = (currentIndex + 1) % faviconImages.length; // Loop back to 0 after the last image
}

// Initial call to set the first favicon
changeFavicon();

// Subsequent calls to cycle through favicons
setInterval(changeFavicon, interval);