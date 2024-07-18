# Project Instructions: GitHub Repository Setup and Webpage Creation

## 🚀 Setup Instructions

1. **Create a GitHub Repository**

   - Follow your instructions on setting up your project’s GitHub repository.

2. **Create a Webpage with a 16x16 Grid of Squares**
   - Create the divs using JavaScript. Don’t try to create them by hand by copying and pasting them in your HTML file!
   - It’s best to put your grid squares inside a `container` div. This div can be written in your HTML file.
   - Use Flexbox to make the divs appear as a grid (versus just one on each line). Despite the name, do not be tempted to research or use CSS Grid, as it will be taught in a later lesson after the foundations path. This project is an opportunity specifically to practice Flexbox!

## 🛠️ Troubleshooting

- **OMG, why isn’t my grid being created??**
  - Did you link your CSS stylesheet?
  - Open your browser’s developer tools.
  - Check if there are any errors in the JavaScript console.
  - Check your “elements” panel to see if the elements have actually shown up but are somehow hidden.
  - Go willy-nilly and add `console.log` statements in your JavaScript to see if it’s actually being loaded.

## 🖱️ Interactivity

1. **Set up a “hover” effect**

   - Make the grid divs change color when your mouse passes over them, leaving a (pixelated) trail through your grid like a pen would.
   - **Hint:** “Hovering” is what happens when your mouse enters a div and ends when your mouse leaves it. You can set up event listeners for either of those events as a starting point.

2. **Changing the color of the divs**

   - Adding a new class to the div.
   - Changing the div’s background color using JavaScript.

3. **Add a button to generate a new grid**

   - Add a button on the top of the screen that will send the user a popup asking for the number of squares per side for the new grid.
   - Once entered, the existing grid should be removed, and a new grid should be generated in the same total space as before (e.g., 960px wide) so that you’ve got a new sketch pad.
   - **Tip:** Set the limit for the user input to a maximum of 100. A larger number of squares results in more computer resources being used, potentially causing delays, freezing, or crashing that we want to prevent.
   - Research button tags in HTML and how you can make a JavaScript function run when one is clicked.
   - Also, check out prompts.
   - You should be able to enter 64 and have a brand new 64x64 grid pop up without changing the total amount of pixels used.

4. **Push your project to GitHub!**

## 🌟 Extra Credit

Transform the behavior of a square when interacting with the mouse by introducing a series of modifications.

1. **Randomize the squares’ RGB values** with each interaction.

2. **Implement a progressive darkening effect**
   - Each interaction darkens the square by 10%. The goal is to achieve a fully black (or completely colored) square in only ten interactions.
   - **Hint:** The `opacity` CSS property is useful here. To learn how to use it, check [this MDN docs article about the opacity CSS property](https://developer.mozilla.org/en-US/docs/Web/CSS/opacity).
   - You can choose to do either one or both of these challenges, it’s up to you.

Happy coding! 😃
