import React from 'src/scripts/lib/React'
import {useAppProvider} from 'src/scripts/contexts/app/Provider'
import {useAppConsumer} from 'src/scripts/contexts/app/Consumer'
import {initialState, reducer, actionCreators} from 'src/scripts/stores/Counter'
import Button from 'src/scripts/components/shared/Button'
import FireStoreCounter from './FireStoreCounter'

const App = () => {
  const Provider = useAppProvider(reducer, actionCreators, initialState)
  return (
    <Provider>
      <div className="App">
        <FireStoreCounter />
        <Counter />
      </div>
    </Provider>
  )
}

const Counter = () => {
  const {state, actionCreators} = useAppConsumer()
  return (
    <div>
      count: {state.count}
      <Button onClick={() => actionCreators.increment()}>++</Button>
      <Button onClick={() => actionCreators.decrement()}>--</Button>
    </div>
  )
}

export default App
