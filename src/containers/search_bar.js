import React from 'react';
import { connect } from 'react-redux';

function mapStateToProps(state) {
	return {

	};
}

export class SearchBar extends React.Component {


	constructor(props) {
		super(props);
		this.state = {term: ''};

		this.onInputChange = this.onInputChange.bind(this);
		this.onSubmit = this.onSubmit.bind(this);
	}

	onInputChange(event){

		event.preventDefault();
		this.setState({term:event.target.value})
	}

	onSubmit(e){
		console.log('need to look for',this.state.term)
		e.preventDefault();
	}

	render() {
		return (
			<form onSubmit={this.onSubmit} className="input-group">

			<input 
			placeholder="Get a five-day forecast in your city"
 			className="form-control"
 			value={this.state.term}
 			onChange={this.onInputChange}
			/>
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
