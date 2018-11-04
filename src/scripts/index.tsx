import * as React from 'react'
import * as ReactDOM from 'react-dom'
import App from 'src/scripts/app/App'
import 'src/styles/index.css'
import * as serviceWorker from './serviceWorker'

ReactDOM.render(
  <App />,
  document.getElementById('root') as HTMLElement
);
serviceWorker.register()
