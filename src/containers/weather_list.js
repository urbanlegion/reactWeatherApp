import React from 'react';
import { connect } from 'react-redux';
import Chart from '../components/chart'

class WeatherList extends React.Component {
	static propTypes = {
		name: React.PropTypes.string,
	};

	constructor(props) {
		super(props);
	}

	renderWeather(cityData){

		const temps = cityData.list.map(weather => weather.main.temp);
		const pressure = cityData.list.map(weather => weather.main.pressure);
        const humidity = cityData.list.map(weather => weather.main.humidity);

		return(
			<tr key={cityData.city.name}>
			<td>{cityData.city.name}</td>
			<td><Chart data={temps} color={"orange"}/></td>
			<td><Chart data={pressure} color={"blue"}/></td>
			<td><Chart data={humidity} color={"red"}/></td>		

			</tr>

			); 

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
			{this.props.weather.map(this.renderWeather)}
			</tbody>
			</table>
			);
	}
}


function mapStateToProps({weather}) {
	return {weather}; // {wather } === {weather : weather}
}

export default connect(mapStateToProps)(WeatherList)

