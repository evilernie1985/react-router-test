import React, { Component } from 'react'
import logo from './logo.svg'
import './App.css'
import Home from './Home'
import About from './About'
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

class App extends Component {
  render () {
    return (
      <div className='App'>
        <div className='App-header'>
          <img src={logo} className='App-logo' alt='logo' />
          <h2>Welcome to React</h2>
        </div>
        <div className='App-intro'>
          {/* Start of routing */}
          <div>
            <Router>
              <div>
                <nav>
                  <Link to='/'>Home</Link> {'|| '}
                  <Link to='/About'>About</Link>
                </nav>
                {/* / route   */}
                <Route exact path='/' component={
                  () => (
                    <Home description={'This is the Homepage'} />
                  )
                } />
                {/* / about route */}
                <Route path='/About' component={
                  () => (
                    <About description={'This is the About page'} />)
                } />
              </div>


            </Router>
          </div>
        </div>
      </div>
    )
  }
}

export default App
