import React from 'react';

class BuildingList extends React.Component {
	render() {
		console.log('This is my directory file', this.props.data);
		const { data, filterText, selectedBuilding} = this.props;
		
		const buildingList = data
			.filter(directory => {
			// remove buildings that don't match current filter text
				return (directory.name.toLowerCase().indexOf(filterText.toLowerCase()) !== -1)
			})
			.map(directory => {
			return (
				
				<tr key={directory.id} onClick = {() => selectedBuilding(directory.id)}>
					<td>{directory.code} </td>
					<td> {directory.name} </td>
				</tr>
				
			);
		});

		return <tbody>{buildingList}</tbody>;
	}
}
export default BuildingList;
