# The Reducer Pattern Module Project

## ✨ Requirements

1. Node >= 18.x
2. Git Bash (Windows users)

## ✨ Usage

1. Fork and clone repo
2. Run `npm install`
3. Run `npm run dev`
4. Load app in `http://localhost:3003`

## ✨ Prototype

[Working app](https://bloominstituteoftechnology.github.io/W_S10_M1_Project/)

## ✨ Instructions

Welcome to Mo=dule 1 Project! In this module you learned to use the Reducer hook to pull state calculations out of components and into reducer functions. In this project you will design state, build reducers and wire action dispatchers to the JSX, to allow users of your app to read, highlight and delete inspirational quotes, as well as create their own.

### 🥷 Tasks

**Important notes about your tasks:**

- Watch the first minutes of the **Solution Video** if you need help getting started.
- There is no need to install any NPM dependencies.
- You will make changes to two modules only:
  - [App.js](./frontend/components/App.js)
  - [QuoteForm.js](./frontend/components/QuoteForm.js)

#### 👉 TASK 1 - Study the prototype

If you open the [Prototype](https://bloominstituteoftechnology.github.io/W_S10_M1_Project/) in React Dev Tools you will find that the App component runs on **three** slices of reducer state:

```js
{
  quotes: [
    {
      id: 1,                     // unique ID
      authorName: "Dr. Seuss",   // author
      quoteText: "Don't cry...", // quote
      apocryphal: false          // apocryphal means "of doubtful authenticity"
    },
   // other quotes
  ],
  displayAllQuotes: true, // whether to show all quotes or only the non-apocryphal
  highlightedQuote: null, // the ID of the currently highlighted quote, or null
}
```

Interact with the prototype until you understand how the state and the user interface relate to each other.

#### 👉 TASK 2 - Fix the App.js component

You fill find **comments inside the module** to help you along, but broadly, the steps are:

1. Import the reducer hook from React
2. Create an object that serves as initial state
3. Build out a basic reducer that returns state
4. Use the reducer hook inside of App component
5. Pass into the Quotes component the quotes from state as a prop
6. Build out the reducer with all the cases
7. Build out the action dispatchers inside the App
8. Pass the necessary states and action dispatchers into Quotes component as props

Some steps can be done in parallel: you can build a single case inside the reducer, and then its corresponding action dispatcher inside the component, and then pass the necessary props into Quotes component.

#### 👉 TASK 3 - Fix the QuoteForm.js component

You fill find **comments inside the module** to help you along, but broadly, the steps are:

1. Import the reducer hook from React
2. Create an object that serves as initial state
3. Build out the reducer
4. Build out the action dispatchers
5. Use the reducer hook inside QuoteForm component
6. Add the missing props to the JSX

As in step 2, Some steps can be done in parallel: you can build a single case inside the reducer, and then its corresponding action dispatcher inside the component, and then repeat the process.

#### 👉 TASK 4 - Watch the Solution Video

This step is only required if you need help getting started or get stuck at any point. HAVE FUN!

## FAQ

<details>
  <summary>I feel very stuck. What can I do?</summary>

Check out the Solution Video for this project in your learning platform. In it, an industry expert will walk you through their thinking in detail while they solve the tasks. The Solution Videos are highly recommended even if you are not stuck: you will learn lots of tricks.

</details>

<details>
  <summary>I am getting errors when I run npm install. What is going on?</summary>

This project requires Node to be correctly installed on your computer to work. Sometimes Node can be installed but misconfigured. Try deleting `node_modules` and running `npm install`. If that fails, try deleting both `node_modules` and `package-lock.json` before reinstalling. If all fails, please request support!

</details>

<details>
  <summary>Do I need to install extra libraries with NPM?</summary>

No. Everything you need should be installed already.

</details>

<details>
  <summary>Can I edit the HTML or the CSS?</summary>

You can edit the CSS of the project to give it a personal touch so you can add it to your portfolio, but only after you've finished your tasks!

</details>

<details>
  <summary>My page does not work! How do I debug it?</summary>

Remember to use console.logs and breakpoints to troubleshoot your code. Do not panic if you see errors in the console, just read them carefully looking for clues.

</details>

<details>
  <summary>How do I run tests against my code?</summary>

There are no automatic tests in this project. Feel free to write some, though! All necessary libraries are installed.

</details>

<details>
  <summary>I messed up and want to start over! How do I do that?</summary>

Do NOT delete your repository from GitHub! Instead, commit frequently as you work. This in practice creates restore points. If you find yourself in a mess, use git reset --hard to simply discard all changes to your code since your last commit. If you are dead-set on restarting the challenge from scratch, you can do this with Git as well. Research how to reset --hard to a specific commit.

</details>
