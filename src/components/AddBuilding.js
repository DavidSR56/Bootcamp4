import 'bootstrap/dist/css/bootstrap.css';
import React from 'react';


class AddBuilding extends React.Component {
    render() {
        const {addBuilding} = this.props;
        return (
            <form className = "addBuilding" onSubmit = {
                event => {  
                    event.preventDefault()
                    this.refs.code.value = ''
                    this.refs.name.value = ''
                    this.refs.address.value =''
                    this.refs.latitude.value = ''
                    this.refs.longitude.value = ''
                }}>
                    <input type="text" ref = "code" placeholder = "Building Code"></input><br/>
                    <input type="text" ref = "name" placeholder = "Building Name"></input><br/>
                    <input type="text" ref = "address" placeholder = "Building Address"></input><br/>
                    <input type="number" ref = "latitude" placeholder = "Latitude"></input><br/>
                    <input type="number" ref = "longitude" placeholder = "Longitude"></input><br/>
                    <button class = "btn btn-success" onClick = {() => addBuilding (this.refs.code.value, this.refs.name.value, this.refs.address.value, this.refs.latitude.value, this.refs.longitude.value)}><strike>JUST DO IT</strike>Add Building</button>
            </form>
        );
    }
}
export default AddBuilding;