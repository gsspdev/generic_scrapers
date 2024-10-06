// Function to open all JPG links
function openWebMLinks() {
  // Select all 'a' elements with href ending in .jpg (case-insensitive)
  const webMLinks = document.querySelectorAll('a[href$=".webm" i]');

  // Iterate through the links and open each in a new tab
  webMLinks.forEach(link => {
    window.open(link.href, '_blank');
  });
}

// Execute the function
openWebMLinks();
