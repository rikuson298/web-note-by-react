import React from 'src/scripts/lib/React'
import {Provider} from './Context'

export const useAppProvider = (reducer: any, actionCreators: any, initialState: any) => {
  const [state, dispatch] = React.useReducer(reducer, initialState)
  const boundActionCreators = Object.keys(actionCreators).reduce((acc: object, actionCreator) => ({
    ...acc,
    [actionCreator]: (...args: any) => {
      dispatch(actionCreators[actionCreator](...args))
    },
  }), {})
  return (props: any) => (
    <Provider value={{state, actionCreators: boundActionCreators, children: props.children}}>
      {props.children}
    </Provider>
  )
}
