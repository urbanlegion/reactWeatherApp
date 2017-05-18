import React from 'react';
import {connect} from 'react-redux';
import Chart from '../components/chart'
import GoogleMap from '../components/google_maps'
class WeatherList extends React.Component {
  static propTypes = {
    name: React.PropTypes.string
  };

  constructor(props) {
    super(props);
  }

  renderWeather(cityData) {

    const temps = _.map(cityData.list.map(weather => weather.main.temp), (temp) => temp - 273.15);
    const pressure = cityData.list.map(weather => weather.main.pressure);
    const humidity = cityData.list.map(weather => weather.main.humidity);
    const {lon, lat} = cityData.city.coord;
    console.log('the lat and lon are : ', lat, lon)
    return (
      <tr key={cityData.city.name}>
        <td><GoogleMap lat={lat} lon={lon} />
        </td>
        <td><Chart data={temps} color={"orange"} units="C"/></td>
        <td><Chart data={pressure} color={"blue"} units="hPa"/></td>
        <td><Chart data={humidity} color={"red"} units="%"/></td>
      </tr>

    );

  }

  render() {
    return (
      <table className="table table-hover">
        <thead>
          <tr>
            <th>City</th>
            <th>Temprature(C)</th>
            <th>Pressure(hPa)</th>
            <th>Humidity(%)</th>
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
