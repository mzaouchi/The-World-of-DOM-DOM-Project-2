document.addEventListener("DOMContentLoaded", function () {

    // Select the elements
    const colorBox = document.getElementById("color-box");
    const changeColorBtn = document.getElementById("change-color-btn");

    // Generate a random hexadecimal color
    function getRandomColor() {
        const letters = "0123456789ABCDEF";
        let color = "#";

        for (let i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }

        return color;
    }

    // Change the color when the button is clicked
    changeColorBtn.addEventListener("click", function () {

        const randomColor = getRandomColor();

        colorBox.style.backgroundColor = randomColor;

    });

});