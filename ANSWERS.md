- [ ] Why would you use class component over function components (removing hooks from the question)?
    Class components were used as the standard practice when dealing with state in react, so there still is a lot of legacy code written with class components. It is important to keep code consistent and maintain old cold as well so moving forward, using class components will still be necessary.
- [ ] Name three lifecycle methods and their purposes.
    componentDidMount() --> called after render() during the mounting phase. Useful for fetching data. 
    componentDidUpdate() --> is called after the component has been updated/rerendered.
    componentWillUnmount() --> Method used to cleanup any ongoing tasks. "Death" of a component lifecycle.
- [ ] What is the purpose of a custom hook?
    Reusability, more DRY code. 
- [ ] Why is it important to test our apps?
    Tests built into apps help to minimize bugs, acts as a documentation, also helps with finding issues when making changes to the code. 