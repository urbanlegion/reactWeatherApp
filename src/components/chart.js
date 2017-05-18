import _ from 'lodash'
import React from 'react';
import { Sparklines,SparklinesLine,SparklinesReferenceLine } from 'react-sparklines';
export default (props) => {
function average(data){
return _.round(_.sum(data)/data.length)

}
		return (
			<div>
			<Sparklines data={props.data}  width={120} height={50}>
			<SparklinesLine color={props.color}/>
			 <SparklinesReferenceLine type="avg" />
			</Sparklines>
			<div>Average:{average(props.data)} {props.units}</div>
			</div>
			);

}
