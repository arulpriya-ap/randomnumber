# 🎲 Random Number Generator

A simple and interactive **Random Number Generator** built using **React**. This project demonstrates the fundamentals of React by using the `useState` hook to manage state, handle button click events, update the user interface dynamically, and display a history of all generated random numbers.

The application generates a random number between **1 and 100** each time the **Generate Number** button is clicked. Every generated number is stored and displayed in a list, allowing users to view the complete history until it is cleared using the **Reset** button.

---

## 🚀 Features

* 🎲 Generate a random number between **1 and 100**
* 📋 Display the latest generated random number
* 📝 Maintain a history of all generated numbers
* 🔄 Reset the current number and clear the generated numbers list
* ⚛️ Built using React Functional Components
* 🎨 Simple, clean, and responsive user interface

---

## 🛠️ Technologies Used

* React
* JavaScript (ES6)
* HTML5
* CSS3
* Vite

---

## 📖 How the Application Works

1. The application initializes two state variables using React's `useState` hook:

   * `randomNumber` stores the latest generated random number.
   * `numbers` stores all previously generated random numbers.

2. When the **Generate Number** button is clicked:

   * A random number between **1 and 100** is generated using `Math.random()`.
   * The generated number is displayed in the number box.
   * The generated number is added to the history list.

3. The **Generated Numbers** section displays every random number generated during the current session.

4. When the **Reset** button is clicked:

   * The displayed random number is cleared.
   * The history of generated numbers is removed.
   * The application returns to its initial state.

---

## ⚛️ React Concepts Used

This project demonstrates the following React concepts:

* Functional Components
* JSX (JavaScript XML)
* React Hooks (`useState`)
* State Management
* Event Handling
* Array Manipulation
* Rendering Lists using `map()`
* Dynamic UI Updates

---

## 🎯 Learning Outcomes

Through this project, I gained practical experience in:

* Creating React Functional Components
* Managing state using the `useState` hook
* Handling user interactions through button click events
* Generating random numbers using JavaScript
* Updating the UI dynamically based on state changes
* Storing multiple values in an array
* Displaying dynamic lists using the `map()` method
* Styling React components with CSS

---

## 👩‍💻 Author

**Arul Priya**

This project was developed as part of my React learning journey to strengthen my understanding of React fundamentals, state management, event handling, and dynamic rendering.

---

## ⭐ Support

If you found this project helpful, consider giving it a **⭐ Star** on GitHub. Your support is greatly appreciated!
