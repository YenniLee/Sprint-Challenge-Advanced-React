- [ ] Why would you use class component over function components (removing hooks from the question)?

    Using hooks and functional components in react is fairly new, so it is important to be able to understand and maintain legacy code written in class components. 

- [ ] Name three lifecycle methods and their purposes.

    componentDidMount() - is called after a component has mounted, fetching data should go here
    componentDidUpdate() - is called whenever the component has updated, useful for updating DOM elements
    render() - it tells React which components will be mounted to the screen

- [ ] What is the purpose of a custom hook?

    Custom hooks allows us to apply stateful logic and non-visual behavior (e.g., event listeners, managing form inputs, etc) to components repeatedly => more DRY code. 

- [ ] Why is it important to test our apps?

    Testing is like insurance for our apps. It helps to reduce and eliminate certain errors, and it forces developers to think of and address edge cases e.g., users will not always use an app the way the programmers intended.  