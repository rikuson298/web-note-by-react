import React from 'src/scripts/lib/React'

export const Context = React.createContext<{state: any, actionCreators: any, children: any}>({
  actionCreators: {},
  children: {},
  state: {},
})
export const Provider = Context.Provider
export const Consumer = Context.Consumer
