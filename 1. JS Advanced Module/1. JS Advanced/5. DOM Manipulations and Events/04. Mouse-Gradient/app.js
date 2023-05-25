function attachGradientEvents() {

    //taking elements
    let gradientBox = document.getElementById('gradient-box');
    let result = document.getElementById('result');

    gradientBox.addEventListener('mousemove', mouseHover);

    //create function mouseHover
    function mouseHover(e) {
        let element = e.target;
        let position = e.offsetX;
        let sizeElement = element.clientWidth;
        let percent = Math.trunc((position / sizeElement) * 100);

        result.textContent = `${percent}%`;
    }

    gradientBox.addEventListener('mouseout', function() {
        result.textContent = '';
    });
}