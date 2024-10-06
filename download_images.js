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

