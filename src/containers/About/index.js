import React from 'react';

export default class About extends React.PureComponent {
  render() {
    const { count } = this.props;
    return (
      <div>
        <h1>About</h1>
        <p>we all are pros!</p>
      </div>
    );
  }
}
