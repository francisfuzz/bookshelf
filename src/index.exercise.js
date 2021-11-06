// 🐨 you'll need to import React and ReactDOM up here
import * as React from 'react'
import * as ReactDOM from 'react-dom'

// 🐨 you'll also need to import the Logo component from './components/logo'
import {Logo} from './components/logo'

// 🐨 create an App component here and render the logo, the title ("Bookshelf"), a login button, and a register button.
// 🐨 for fun, you can add event handlers for both buttons to alert that the button was clicked
function App () {
  function handleClick() {
    alert('Button was clicked')
  }
  return (
    <div>
      <Logo />
      <h1>Bookshelf</h1>
      <button onClick={handleClick}>Login</button>
      <button onClick={handleClick}>Register</button>
    </div>
  )
}

// 🐨 use ReactDOM to render the <App /> to the root element
// 💰 find the root element with: document.getElementById('root')
ReactDOM.render(<App />, document.getElementById('root'))
