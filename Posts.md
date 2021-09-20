# Posts
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

## 4. 