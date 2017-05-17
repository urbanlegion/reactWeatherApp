import React from 'react';
import { connect } from 'react-redux';

function mapStateToProps(state) {
  return {

  };
}

export class SearchBar extends React.Component {


  constructor(props) {
    super(props);
  }

  render() {
    return (
    <form className="input-group"><input/>
    <span className="input-group-btn"> 
    <button className="btn btn-secondary" type="submit">Submit</button>
    </span>
    </form>
    );
  }
}

export default connect(
  mapStateToProps,
// Implement map dispatch to props
)(SearchBar)
