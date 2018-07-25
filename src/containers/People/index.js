import React from 'react';
import { connect } from 'react-redux';
import { loadPeople } from '../../modules/people';
import { getPersons, isLoading as loading } from '../../selectors/people';

export class People extends React.PureComponent {
  componentDidMount() {
    this.props.loadPeople();
  }

  render() {
    const { persons, isLoading } = this.props;
    return (
      <div>
        <h1>People</h1>
        {isLoading ? (
          <span> Loading ...</span>
        ) : (
          <ul>{persons.map(p => <li key={p.name}>{p.name}</li>)}</ul>
        )}
      </div>
    );
  }
}
export default connect(
  state => ({
    persons: getPersons(state),
    isLoading: loading(state),
  }),
  {
    loadPeople,
  },
)(People);
