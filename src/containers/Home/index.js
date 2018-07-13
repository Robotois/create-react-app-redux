import React from 'react'
import { connect } from 'react-redux'
import { push } from 'connected-react-router'

import { getCount, isDecrementing as isDec, isIncrementing as isInc } from '../../selectors/counter'
import { increment, incrementAsync, decrement, decrementAsync } from '../../modules/counter'

class Home extends React.Component {
  render() {
    const {
      count,
      increment,
      incrementAsync,
      isDecrementing,
      isIncrementing,
      decrement,
      decrementAsync,
      changePage,
    } = this.props
    return (
      <div>
        <h1>Home</h1>
        <p>Count: {count}</p>
        <p>
          <button onClick={increment}>Increment</button>
          <button onClick={incrementAsync} disabled={isIncrementing}>
            Increment Async
          </button>
        </p>

        <p>
          <button onClick={decrement}>Decrement</button>
          <button onClick={decrementAsync} disabled={isDecrementing}>
            Decrement Async
          </button>
        </p>

        <p>
          <button onClick={() => changePage()}>Go to about page via redux</button>
        </p>
      </div>
    )
  }
}

export default connect(
  state => ({
    count: getCount(state),
    isDecrementing: isDec(state),
    isIncrementing: isInc(state),
  }),
  {
    increment,
    incrementAsync,
    decrement,
    decrementAsync,
    changePage: () => push('/about-us'),
  },
)(Home)
