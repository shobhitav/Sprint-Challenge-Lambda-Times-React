
- [ ] What are PropTypes used for? Please describe why it's important to type check our data in JavaScript.

PropTypes are used for data validation , to reduce the errors occuring  when wrong type of data is 
passed to the React components. This helps the developer make sure that no wrong data is passsed.

- [ ] Describe a life-cycle event in React?
Most web developers, at some point, need to call an API endpoint to retrieve data. If you're working with React, it's important to know where to perform this action. The best practice with React is to place API calls or any calls to your server in the lifecycle method componentDidMount(). This method is called after a component is mounted to the DOM. Any calls to setState() here will trigger a re-rendering of your component. When you call an API in this method, and set your state with the data that the API returns, it will automatically trigger an update once you receive the data.


- [ ] Explain the details of a Higher Order Component?
HOC is a function which takes in a components and returns components with a different 
functionality.
The goal of this is to decompose the logic into simpler and smaller functions that can be reused. A rule of thumb is a function does just one task and does it well. This also avoids side effects ( changing anything that is not owned by the function ) , and makes debugging and maintenance a whole lot easier.

- [ ] What are three different ways to style components in React? Explain some of the benefits of each.
There are many different ways to style a component in React like using vanilla css,inline styling or using third-party libraries like ReactStrap or styled components.
All the approaches for styling components are good, it depends on the developer which one he wants to use.For vanilla css we have to import a different css file ans use className prop for different components.
Inline styling is when css styling is  defined within the javascript using object or template literals. A basic example being to create a style definition and apply it inline to an element. 

For larger files,instead of using vanilla css ,it is better to use styled components instead .
The major benefit with syled components is that you can abstract styles to the component level. You can separate styles from logic within your components. 