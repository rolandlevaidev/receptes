# Posts
Ideas for posts from [[ReactJS]]
## 1. Intro to ReactJS
React is a declarative, component-based JavaScript library for building user interfaces. It's the most well-known, the most sought-after and the most used among other JS libraries.
You will need React and ReactDOM to write React applications for the web.
React is responsible for creating React elements (a bit like `document.createElement()`) while ReactDOM is responsible for rendering React elements to the DOM ( like `rootElement.append()`)
Example:
```javascript
const elementProps = {id: 'element-id', children: 'Hello world!'}
const elementType = 'h1'
const reactElement = React.createElement(elementType, elementProps)
ReactDOM.render(reactElement, rootElement)
```
![[React_Intro.png]]

## 2. Using React
The fastest way to start using React is using a couple `<script>` tags like so:
```markup
<script src="https://unpkg.com/react@17/umd/react.production.min.js"></script>
<script src="https://unpkg.com/react-dom@17/umd/react-dom.production.min.js"></script>
```
![[React_Script_tags.png]]

Another quick way is to use [create-react-app](https://create-react-app.dev). 

If you have npm or yarn installed you just have to type these into the console:
```
npx create-react-app my-app
cd my-app
npm start
```
![[CRA_Install.png]]
And you'll have a base React app set up and the dev server running.

You can check out their [Getting Started](https://create-react-app.dev/docs/getting-started) guide for more info.

## 3. JSX
Which piece of code is easier to read?
```jsx
const element =
  <h1 className='title'>
    Title heading
  </h1>
```
![[JSX_1.png]]
```javascript
const element =
  React.createElement(
    'h1',
    { className: 'title' },
    "Title heading"
  )
```
![[JSX_2.png]]
The first one, right?
That is JSX. JSX is a fairly simple HTML-like syntax on top of the raw React API.
This is possible thanks to [Babel](https://babeljs.io/), a JavaScript compiler.

## 4. Creating custom components
Components are basically functions which return something that is “renderable” (more React elements, strings, `null`, numbers, etc.)

The first argument to `React.createElement` can also be a function which returns something that’s renderable.

Here are a few examples of Babel output for JSX:
```jsx
ui = <Capitalized /> // React.createElement(Capitalized)
ui = <property.access /> // React.createElement(property.access)
ui = <Property.Access /> // React.createElement(Property.Access)
ui = <Property['Access'] /> // SyntaxError
ui = <lowercase /> // React.createElement('lowercase')
ui = <kebab-case /> // React.createElement('kebab-case')
ui = <Upper-Kebab-Case /> // React.createElement('Upper-Kebab-Case')
ui = <Upper_Snake_Case /> // React.createElement(Upper_Snake_Case)
ui = <lower_snake_case /> // React.createElement('lower_snake_case')
```
So when making components, we capitalize the words.

```jsx
<Message greeting="Hello" subject="World" />
<Message greeting="Goodbye" subject="World" />
```
What happens if I forget to pass the `greeting` or `subject` props? It’s not going to render properly. We’ll end up with a dangling comma somewhere. It would be nice if we got some sort of indication that we passed the wrong value to the component. This is what the `propTypes` feature is for. Here’s an example of how to use `propTypes`:
```jsx
function FavoriteNumber({favoriteNumber}) {
  return <div>My favorite number is: {favoriteNumber}</div>
}

const PropTypes = {
  number(props, propName, componentName) {
    if (typeof props[propName] !== 'number') {
      return new Error('Some useful error message here')
    }
  },
}

FavoriteNumber.propTypes = {
  favoriteNumber: PropTypes.number,
}
```

There are some pretty common things to validate, so the React team maintains a package of these called [`prop-types`](https://npm.im/prop-types). It can be added to a page by adding a script tag for it:
```markup
<script src="https://unpkg.com/prop-types@15.7.2/prop-types.js"></script>
```

One useful feature of JSX is [“React Fragments”](https://reactjs.org/docs/fragments.html). It’s a special kind of component from React which allows the positioning of two elements side-by-side rather than just nested.
The component is available via `<React.Fragment>`.