# 🎨 Interactive Color Changer

## 📌 Description

**Interactive Color Changer** is a simple JavaScript project that demonstrates how to use **DOM manipulation and event listeners** to create an interactive webpage.

The application displays a colored box and a **"Change Color"** button. Every time the user clicks the button, the box changes to a randomly generated color.

## 🎯 Objectives

The goal of this project is to practice:

* HTML document structure
* CSS styling
* JavaScript DOM manipulation
* DOM events
* `getElementById()`
* `addEventListener()`
* Random values
* Hexadecimal colors
* Functions

## ✨ Features

* 📦 Displays a colored box.
* 🎨 Generates a random hexadecimal color.
* 🖱️ Changes the box color when the button is clicked.
* 🔄 Generates a different color on every click.
* 📱 Uses a simple responsive layout.

## 🛠️ Technologies Used

* HTML5
* CSS3
* JavaScript

## 📂 Project Structure

```text
interactive-color-changer/
│
├── index.html
├── style.css
├── script.js
└── README.md
```

## 🧱 HTML Structure

The HTML page contains:

* A main container
* A heading
* A color box with the ID `color-box`
* A button with the ID `change-color-btn`

Example:

```html
<div class="container">
    <h1>Color Changer</h1>

    <div id="color-box"></div>

    <button id="change-color-btn">
        Change Color
    </button>
</div>
```

## 🎨 CSS Styling

The CSS is responsible for:

* Centering the content
* Styling the color box
* Setting the initial background color
* Styling the button
* Adding a hover effect

## ⚙️ JavaScript Functionality

### `getRandomColor()`

The `getRandomColor()` function generates a random hexadecimal color.

```javascript
function getRandomColor() {
    const letters = "0123456789ABCDEF";
    let color = "#";

    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }

    return color;
}
```

Example generated colors:

```text
#FF5733
#3498DB
#2ECC71
#9B59B6
```

### DOM Selection

The JavaScript selects the HTML elements using `getElementById()`:

```javascript
const colorBox = document.getElementById("color-box");
const changeColorBtn = document.getElementById("change-color-btn");
```

### Click Event

An event listener detects when the button is clicked:

```javascript
changeColorBtn.addEventListener("click", function () {
    const randomColor = getRandomColor();

    colorBox.style.backgroundColor = randomColor;
});
```

The generated color is then applied to the box.

## 🚀 How to Run the Project

1. Clone or download the project.
2. Open the project folder in VS Code.
3. Open `index.html` in a web browser.
4. Click the **Change Color** button.
5. Observe the color box change to a random color.

You can also use the **Live Server** extension in VS Code.

## 🧪 Testing

The project should behave as follows:

| Action               | Expected Result                 |
| -------------------- | ------------------------------- |
| Open the page        | A colored box is displayed      |
| Click "Change Color" | The box changes color           |
| Click again          | A new random color is generated |
| Click multiple times | The color continues changing    |

## 📚 Concepts Practiced

This project provides practice with:

* `DOMContentLoaded`
* `document.getElementById()`
* `addEventListener()`
* Functions
* `Math.random()`
* `Math.floor()`
* Loops
* String manipulation
* Hexadecimal color codes
* CSS `background-color`
* DOM style manipulation

---

⭐ A beginner-friendly JavaScript project for practicing DOM events and interactive web development.
