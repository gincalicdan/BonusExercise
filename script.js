const imageLinks = [
    'https://images.unsplash.com/photo-1682687219640-b3f11f4b7234?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'https://images.unsplash.com/photo-1706463629335-d92264bbfd6f?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'https://images.unsplash.com/photo-1682695796497-31a44224d6d6?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
   
];

let currentCount = 0;
const imageElement = document.getElementById('image');

function displayImage(index) {
    imageElement.src = imageLinks[index];
}

function nextImage() {
    currentCount = (currentCount + 1) % imageLinks.length;
    displayImage(currentCount);
}

function prevImage() {
    currentCount = (currentCount - 1 + imageLinks.length) % imageLinks.length;
    displayImage(currentCount);
}

// Initial image display
displayImage(currentCount);

// Event listeners for buttons
document.getElementById('next').addEventListener('click', nextImage);
document.getElementById('prev').addEventListener('click', prevImage);
