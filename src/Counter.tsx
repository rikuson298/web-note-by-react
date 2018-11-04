import * as React from 'react'

const counter:React.SFC<{}> = () => {
  const [count, setCount] = React.useState(0)
  return (
    <div>
      counter
      {count}
      <button onClick={() => setCount(count + 1)}>
        +
      </button>
    </div>
  )
}

export default counter