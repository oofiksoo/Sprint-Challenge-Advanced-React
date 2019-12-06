- [ ] Why would you use class component over function components (removing hooks from the question)?

This is a trick, or outdated question. As of the React Hooks implementation There is no particular specification that increases the viability of a class component over a functional component. A functional component is in many cases less resources intensive, and requires a reduced code base to accomplish the same outcomes in compairson to the class componant.

- [ ] Name three lifecycle methods and their purposes.

componentDidMount - This method is called after render, and provides functionality appropriatly based on its compoent state.

componentDidUpdate - this method is called after render, and after state/data change, and provides the ability to provide functionality only after data/statechange.

componentWillUnmount - this method is called on close just prior to data destroy. this functionality is intended to provide cleanup of data, events, and properties that are no longer in use.

- [ ] What is the purpose of a custom hook?

to provide custom useState and useEffect functionality encapsulated in its own component.

- [ ] Why is it important to test our apps?

      to identify bugs and unexpected behaviour prior to regrssion thought the application. It will ensure expected behaviour as you continue to build out components and or dependants within the applications functionality.
