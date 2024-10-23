import React, { useReducer } from "react"; // 👈 you'll need the reducer hook
import Quotes from "./Quotes";
import QuoteForm from "./QuoteForm";

/*
1. Import the reducer hook from React -- √
2. Create an object that serves as initial state == √
3. Build out a basic reducer that returns state
4. Use the reducer hook inside of App component
5. Pass into the Quotes component the quotes from state as a prop
6. Build out the reducer with all the cases
7. Build out the action dispatchers inside the App
8. Pass the necessary states and action dispatchers into Quotes component as props

Some steps can be done in parallel: you can build a single case inside the reducer, and then its corresponding action dispatcher inside the component, and then pass the necessary props into Quotes component.
 */

// 👇 these are the types of actions that can change state
const CREATE_QUOTE = "CREATE_QUOTE";
const DELETE_QUOTE = "DELETE_QUOTE";
const EDIT_QUOTE_AUTHENTICITY = "EDIT_QUOTE_AUTHENTICITY"; // 👈 toggles the apocryphal property of a single quote
const SET_HIGHLIGHTED_QUOTE = "SET_HIGHLIGHTED_QUOTE"; // 👈 highlights a quote (or un-highlights it)
const TOGGLE_VISIBILITY = "TOGGLE_VISIBILITY"; // 👈 toggles whether to show all or only non-apocryphal

let id = 1;
const getNextId = () => id++; // 👈 this is a helper to create new quotes
const quotes = [];

// 👇 create your initial state object here
const initialState = {
  displayAllQuotes: true,
  highlightedQuote: null,
  quotes: [
    {
      id: getNextId(),
      quoteText: "Don't cry because it's over, smile because it happened.",
      authorName: "Dr. Seuss",
      apocryphal: false,
    },
    {
      id: getNextId(),
      quoteText: "So many books, so little time.",
      authorName: "Frank Zappa",
      apocryphal: false,
    },
    {
      id: getNextId(),
      quoteText: "Be yourself; everyone else is already taken.",
      authorName: "Oscar Wilde",
      apocryphal: false,
    },
  ],
};

const reducer = (state, action) => {
  // 👇 implement your reducer here using the action types above
  switch (action.type) {
    case CREATE_QUOTE:
      return { ...state, quotes: [state.quotes, action.payload] };
    case DELETE_QUOTE:
      return {
        ...state,
        quotes: state.quotes.filter((quote) => quote.id !== action.payload),
      };
    case EDIT_QUOTE_AUTHENTICITY:
      return {
        ...state,
        quotes: state.quotes.map((quote) => {
          if (quote.id != action.payload) return quote;
          return { ...quote, apocryphal: !quote.apocryphal };
        }),
      };
    case SET_HIGHLIGHTED_QUOTE:
      return { ...state, highlightedQuote: state.highlightedQuote === action.payload ? null : action.payload };
    case TOGGLE_VISIBILITY:
      return { ...state };
    default:
      return state;
  }
};

export default function App() {
  // 👇 use the reducer hook to spin up state and dispatch
  const [state, dispatch] = useReducer(reducer, initialState);

  const createQuote = ({ authorName, quoteText }) => {
    // 👇 use the helper function above to create a new quote
    // 👇 and dispatch it over to the reducer
    const newQuote = {
      id: getNextId(),
      authorName,
      quoteText,
      apocryphal: false,
    };
    dispatch({ type: CREATE_QUOTE, payload: newQuote });
  };
  const deleteQuote = (id) => {
    // 👇 implement
    dispatch({ type: DELETE_QUOTE, payload: id });
  };
  const editQuoteAuthenticity = (id) => {
    // 👇 implement
    dispatch({ type: EDIT_QUOTE_AUTHENTICITY, payload: id });
  };
  const setHighlightedQuote = (id) => {
    // 👇 implement
    dispatch({ type: SET_HIGHLIGHTED_QUOTE, payload: id })
  };
  const toggleVisibility = () => {
    // 👇 implement
  };

  return (
    <div id="mp">
      <h2>Module Project</h2>
      <Quotes
        quotes={state.quotes}
        // 👇 lots of props are missing! Check the Quotes component
        highlightedQuote={state.highlightedQuote}
        deleteQuote={deleteQuote}
        editQuoteAuthenticity={editQuoteAuthenticity}
        setHighlightedQuote={setHighlightedQuote}
      />
      <QuoteForm createQuote={createQuote} />
    </div>
  );
}
