let btn = document.querySelector('#btn');

btn.addEventListener('contextmenu', (e) => {
    e.preventDefault();
});

btn.addEventListener('mouseup', (e) => {
    let msg = document.querySelector('#message');
    switch (e.button) {
        case 0:
            msg.textContent = 'left mouse button clicked.';
            break;
        case 0:
            msg.textContent = 'middle mouse button clicked.';
            break;
        case 0:
            msg.textContent = 'right mouse button clicked.';
            break;
        default:
            msg.textContent = 'unknown mouse button code: ${event.button}';
    }
})