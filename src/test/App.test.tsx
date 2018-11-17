import * as React from 'react'
import * as ReactDOM from 'react-dom'
// FIXME: 実行時に読み込めるようにする
import App from 'src/scripts/components/app/App'

it('renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(<App />, div)
  ReactDOM.unmountComponentAtNode(div)
});
