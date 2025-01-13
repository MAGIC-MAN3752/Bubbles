// Make images draggable
const draggables = document.querySelectorAll('.movable');

draggables.forEach(item => {
    item.addEventListener('mousedown', (e) => {
        const element = e.target;
        let offsetX = e.clientX - element.offsetLeft;
        let offsetY = e.clientY - element.offsetTop;

        const moveAt = (pageX, pageY) => {
            element.style.left = pageX - offsetX + 'px';
            element.style.top = pageY - offsetY + 'px';
        };

        const onMouseMove = (event) => {
            moveAt(event.pageX, event.pageY);
        };

        document.addEventListener('mousemove', onMouseMove);

        document.addEventListener('mouseup', () => {
            document.removeEventListener('mousemove', onMouseMove);
        }, { once: true });
    });
});
