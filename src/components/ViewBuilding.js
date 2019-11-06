import React from 'react';
import BuildingList from './BuildingList';
import RemoveBuilding from './RemoveBuilding';

class ViewBuilding extends React.Component {
	
	
	render() {
		const {id, data} = this.props;
		const selectedBuilding = data.filter(directory => {return directory.id === id})[0]
		console.log('the selected building is', selectedBuilding)

		if (selectedBuilding) {
			return (
				<div>
					<p>
						Name: {selectedBuilding.name} <br/>
						Code: {selectedBuilding.code} <br/>
						{/* I haven't used ternary operators recently, but I think this was the only way to do it. */} 
						{selectedBuilding.address ? 'Address: ' + selectedBuilding.address : "Address not listed."} <br/>
						{selectedBuilding.coordinates ? 'Coordinates: ' + selectedBuilding.coordinates.latitude + ', ' + selectedBuilding.coordinates.longitude : "Coordinates not listed."	} <br/>
						<br/>
						<em>Don't like this building? Maybe it's erroneous or nonexistant? <b>Remove</b> it then. No feelings will be hurt.</em><br/>
						<sub>Click the button below...</sub>
					</p>
					<p>
						<RemoveBuilding removeBuilding = {this.props.removeBuilding} id = {id}/>
					</p>
					<p>
						<b><em>Maybe you're feeling generous. Create a new building, just like that. <br/> This list isn't complete, in your imagination.</em></b><br/>
					</p>
					<p>

					</p>
				</div>
			);
		}

		else{
		return (
			<div>
				<p>
					{' '}
					<i>Click on a name to view more information</i><br/>
					<b><em>Maybe you're feeling generous. Create a new building, just like that. This list isn't complete, in your imagination.</em></b><br/>

				</p>
			</div>

		);
		}
	}
}
export default ViewBuilding;
