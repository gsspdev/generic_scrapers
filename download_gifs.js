// Function to open all GIF links
function openGifLinks() {
  // Select all 'a' elements with href ending in .gif (case-insensitive)
  const gifLinks = document.querySelectorAll('a[href$=".gif" i]');
  
  // Iterate through the links and open each in a new tab
  gifLinks.forEach(link => {
    window.open(link.href, '_blank');
  });
}

// Execute the function
openGifLinks();

