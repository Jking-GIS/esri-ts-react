# React and TypeScript for Esri

## Links

* [Create React App](https://create-react-app.dev/)
  * [Create React App templates](https://www.npmjs.com/search?q=cra-template)
* [Bootstrap](https://getbootstrap.com/docs/4.6/getting-started/introduction/)
* [TypeScript ESLint](https://github.com/typescript-eslint/typescript-eslint#can-i-use-all-of-the-existing-eslint-plugins-and-rules-without-any-changes)
* [Enums and Alternatives](https://2ality.com/2020/02/enum-alternatives-typescript.html)
* [React TypeScript cheat sheet](https://github.com/typescript-cheatsheets/react)
* [Emmet cheat sheet](https://docs.emmet.io/cheat-sheet/)
* [React event types](https://stackoverflow.com/questions/42081549/typescript-react-event-types)
* [Fetching data with React hooks](https://www.robinwieruch.de/react-hooks-fetch-data)
* [React testing library](https://testing-library.com/docs/react-testing-library/intro)
* [Complete guide to useEffect](https://overreacted.io/a-complete-guide-to-useeffect/)

## Notes

### Controlled vs Uncontrolled components

updates:  
* Controlled components update on every interaction (keypress, click, etc.)
* Uncontrolled components update when you tell them to (they need code to say WHEN they should update)

re-render:  
* Controlled component provoke re-rendering on every update because they're tied to state
* Uncontrolled components may not even provoke re-rendering

external updates:  
* Controlled components can reflect updates to data other than from the form field
* Uncontrolled components cannot reflect updates other than through user interactions (typing, clicking, etc.)

collecting data:  
* Controlled components are up-to-date
* Data from uncontrolled components may be stale