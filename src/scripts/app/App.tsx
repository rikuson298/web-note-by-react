import React from 'src/scripts/lib/React'
import Counter from './Counter'

class App extends React.Component {

  
  public render() {
    return (
      <div className="App">
        <header className="App-header">
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          <Counter />
        </header>
      </div>
    );
  }
}

export default App
