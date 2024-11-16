// Get the required DOM elements
const colorPicker = document.getElementById('colorPicker');
const colorPreview = document.getElementById('colorPreview');
const colorCode = document.getElementById('colorCode');

// Update the color preview and HEX code when the user selects a color
colorPicker.addEventListener('input', (event) => {
  const color = event.target.value; // Get the selected color
  colorPreview.style.backgroundColor = color; // Update the preview box
  colorCode.value = color; // Display the HEX code in the text box
});