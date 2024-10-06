// Function to open all JPG links
function openJpgLinks() {
  // Select all 'a' elements with href ending in .jpg (case-insensitive)
  const jpgLinks = document.querySelectorAll('a[href$=".jpg" i]');
  
  // Iterate through the links and open each in a new tab
  jpgLinks.forEach(link => {
    window.open(link.href, '_blank');
  });
}

// Execute the function
openJpgLinks();

