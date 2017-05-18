import React from 'react';
import { connect } from 'react-redux';


class WeatherList extends React.Component {
	static propTypes = {
		name: React.PropTypes.string,
	};

	constructor(props) {
		super(props);
	}

	render() {
		return (
	<table className="table table-hover">
		<thead>
			<tr>
				<th>City</th>
				<th>Temprature</th>
				<th>Pressure</th>
				<th>Humidity</th>
			</tr>
		</thead>
		<tbody>
			
		</tbody>
	</table>
			);
	}
}


function mapStateToProps({weather}) {
	return {weather}; // {wather } === {weather : weather}
}

export default connect(mapStateToProps)(WeatherList)

