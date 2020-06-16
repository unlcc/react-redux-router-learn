import React from 'react';
import { connect } from 'react-redux';
import { increment } from '../../actions/index';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.props.dispatch(increment());
  }

  render() {
    return (
      <div>
        {this.props.number}
        <button onClick={this.handleClick}>+1</button>
      </div>
    );
  }
}

export default connect(
  state => ({
    number: state.number
  })
)(App);