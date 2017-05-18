import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux'
import {fetchWeather} from '../actions/index'
function mapStateToProps(state) {
  return {};
}

class SearchBar extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      term: ''
    };

    this.onInputChange = this.onInputChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onInputChange(event) {

    event.preventDefault();
    this.setState({term: event.target.value})
  }

  onSubmit(e) {
    console.log('need to look for', this.state.term)
    e.preventDefault();
    this.props.fetchWeather(this.state.term)
    this.setState({term: ''});

  }

  render() {
    return (
      <form onSubmit={this.onSubmit} className="input-group">

        <input placeholder="Get a five-day forecast in your city" className="form-control" value={this.state.term} onChange={this.onInputChange}/>
        <span className="input-group-btn">
          <button className="btn btn-secondary" type="submit">Submit</button>
        </span>
      </form>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    fetchWeather
  }, dispatch)
} //adding the fetchWeather to the props and binding it so when it changes, it will re-render my component

export default connect(null, mapDispatchToProps)(SearchBar)
// set first arg to null because i dont care about states for this component but only it's props
