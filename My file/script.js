let clickCount = 0;
const page1 = document.getElementById('page1');
const page2 = document.getElementById('page2');

page1.addEventListener('click', () => {
    clickCount++;
    
    // Change background color randomly
    page1.style.backgroundColor = getRandomColor();

    // Reset color back to black after 1 second
    setTimeout(() => {
        page1.style.backgroundColor = 'black';
    }, 1000);

    // After 10 clicks, show page 2
    if (clickCount >= 10) {
        page1.classList.add('hidden');
        page2.classList.remove('hidden');
    }
});

function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}