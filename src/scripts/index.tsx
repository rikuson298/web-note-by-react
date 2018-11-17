import React from 'src/scripts/lib/React'
import ReactDOM from 'src/scripts/lib/ReactDOM'
import App from 'src/scripts/app/App'
import 'src/styles/index.css'
import * as serviceWorker from './serviceWorker'

ReactDOM.render(
  <App />,
  document.getElementById('root') as HTMLElement
);
serviceWorker.register()
