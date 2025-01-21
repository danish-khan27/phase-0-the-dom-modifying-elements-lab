// Remove the <main> element first
const main = document.getElementById('main');
main.remove();

// Create and append the new element with id 'victory'
const newHeader = document.createElement('h1');
newHeader.id = 'victory';
newHeader.textContent = "YOUR-NAME is the champion"; // Replace "YOUR-NAME" with your name
document.body.appendChild(newHeader);

// Find the <ul> and remove it completely (removes all children)
const ul = document.querySelector('ul');
if (ul) {
  ul.remove(); // Removes the entire unordered list
}
