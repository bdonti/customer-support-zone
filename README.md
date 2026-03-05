
#### 1) What is JSX, and why is it used?
Ans: JSX is a syntax extension for JavaScript. JSX stands for Javascript XML. It lets us write HTML like markup inside a JS file. Under the hood it is transformed into regular Javascript using compilers like with Babel or typescript.

#### 2) What is the difference between State and Props?
Ans: The main difference between state and props in React is that Props are a way to pass data from one component to another (typically parent to child) & they are immutable and read-only. In contrast, state represents real-time data managed within a specific component that can change over time and it is technically mutable.

#### 3) What is the useState hook, and how does it work?
Ans: useState is a Hook that allows you to add React state to functional components. It returns an array containing two elements: a getter (the current state value) and a setter (a function to update that value).
-> const [state, setState] = useState(initialValue);

#### 4) How can you share state between components in React?
Ans: In react we share data by concept by lifting state up. When multiple components need to reflect the same changing data, it is recommended to lift the shared state up to their closest common ancestor. This means instead of maintaining local state in both child components, we move the state to the parent. The parent then passes the state down to the children via props, along with a function by prop drilling to update that state. 

#### 5) How is event handling done in React?
Ans: Event handling in React is very similar to handling events on DOM elements, but with a few syntax differences. In React, we use onClick instead of onclick (we use camelCase) and we pass a function as the event handler inside curly braces {} instead of a string.

