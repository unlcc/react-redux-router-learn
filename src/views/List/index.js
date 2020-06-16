import React from 'react';
import { connect } from 'react-redux';

class List extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>{this.props.number}</div>
    );
  }
}

export default connect(
  state => ({
    number: state.number
  })
)(List);